import { isFuture, isPast, isToday } from "date-fns";
import styled from "styled-components";
import supabase from "../services/supabase";
import { subtractDates } from "../utils/helpers";
import { useUploader } from "../hooks/useUploader";
import { bookings } from "./data-bookings";
import Button from "../ui/Button";

const StyledUploader = styled.div`
    background-color: var(--color-grey-200);
    border-radius: 8px;
    padding: 20px;
    text-align: center;
`;

async function createBookings() {
    const { data: cabins } = await supabase.from("cabins").select("*").order("id");
    const { data: settings } = await supabase.from("settings").select("breakfast_price").single();

    function generateBooking(booking) {
        const cabin = cabins.at(booking.cabin_id - 1);
        const num_nights = subtractDates(booking.end_date, booking.start_date);
        const cabin_price = num_nights * (cabin.regular_price - cabin.discount);

        const totalExtraPrice = num_nights * booking.num_guests * settings.breakfast_price;
        const extra_price = booking.has_breakfast ? totalExtraPrice : 0;
        const total_price = cabin_price + extra_price;

        let status = "unconfirmed";
        const { start_date, end_date } = booking;

        if(isPast(new Date(end_date)) && !isToday(new Date(end_date))) {
            status = "checked-out";
        }
        else if((isPast(start_date) && !isToday(start_date)) && (isFuture(end_date) || isToday(end_date))) {
            status = "checked-in";
        }

        const newBooking = {
            ...booking,
            num_nights,
            cabin_price,
            extra_price,
            total_price,
            status
        };

        return newBooking;
    }

    const generatedBookings = bookings.map((booking, idx) => generateBooking({ ...booking, id: idx + 1 }));
    return generatedBookings;
}

const Uploader = () => {
    const { uploadData, isUploading } = useUploader();

    async function handleUpload() {
        const sampleData = await createBookings();
        uploadData(sampleData);
    }

    return (
        <StyledUploader>
            <Button onClick={handleUpload} disabled={isUploading}>
                Upload Sample Data
            </Button>
        </StyledUploader>
    );
};

export default Uploader;