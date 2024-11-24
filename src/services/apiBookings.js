import supabase from "./supabase";

async function getBookings() {
    const { data, error } = await supabase.from('bookings').select("*");
    if(error) {
        throw new Error('Bookings could not be loaded');
    }

    return data;
}

export { getBookings };