import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useSettings } from "./useSettings";
import { useUpdateSetting } from "./useUpdateSetting";

const UpdateSettingsForm = () => {
    const { settings, isLoading } = useSettings();
    const { updateSetting, isUpdating } = useUpdateSetting();

    if(isLoading) return <Spinner/>

    const {
        max_guests_per_booking: maxGuests,
        min_booking_length: minBookingLength,
        max_booking_length: maxBookingLength,
        breakfast_price: breakfastPrice
    } = settings;

    function handleUpdate(e, field) {
        const { value } = e.target;
        if(!value) return;

        updateSetting({ [field] : value });
    }
    return (
        <Form>
            <FormRow label="Minimum Nights per Booking">
                <Input
                    type="number"
                    id="min-nights"
                    defaultValue={minBookingLength}
                    disabled={isUpdating}
                    onBlur={(e) => handleUpdate(e, "min_booking_length")}
                />
            </FormRow>
            <FormRow label="Maximum Nights per Booking">
                <Input
                    type="number"
                    id="max-nights"
                    defaultValue={maxBookingLength}
                    disabled={isUpdating}
                    onBlur={(e) => handleUpdate(e, "max_booking_length")}
                />
            </FormRow>
            <FormRow label="Maximum guests per booking">
                <Input
                    type="number"
                    id="max-guests"
                    defaultValue={maxGuests}
                    disabled={isUpdating}
                    onBlur={(e) => handleUpdate(e, "max_guests_per_booking")}
                />
            </FormRow>
            <FormRow label="Breakfast Price">
                <Input
                    type="number"
                    id="breakfast-price"
                    defaultValue={breakfastPrice}
                    disabled={isUpdating}
                    onBlur={(e) => handleUpdate(e, "breakfast_price")}
                />
            </FormRow>
        </Form>
    );
};

export default UpdateSettingsForm;