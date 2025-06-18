import supabase from "./supabase";
import { getToday } from "../utils/helpers";
import { PAGE_SIZE } from "../utils/constants";

async function getBookings({ filter, sortBy, page }) {
    let query = supabase.from('bookings').select("id, created_at, start_date, end_date, num_guests, num_nights, status, total_price, cabins(name), guests(full_name, email)", {count: "exact"});

    if(filter) {
        query = query[filter.method || "eq"](filter.field, filter.value);
    }
    if(sortBy) {
        query = query.order(sortBy.field, {ascending: sortBy.direction === "asc"});
    }
    if(page) {
        const from = (page - 1) * PAGE_SIZE;
        const to = page * PAGE_SIZE - 1;
        query = query.range(from, to);
    }

    const { data, error, count } = await query;
    if(error) {
        throw new Error('Bookings could not be loaded');
    }

    return {data, count};
}

async function getBooking(id) {
    const { data, error } = await supabase.from('bookings').select("*, cabins(*), guests(*)").eq("id", id);
    if(error) {
        throw new Error('Booking was not found');
    }
    
    return data[0];
}

async function updateBooking(id, booking) {
    const { data, error } = await supabase.from('bookings').update(booking).eq("id", id).select();
    if(error) {
        throw new Error('Booking could not be updated');
    }
    
    return data[0];
}

async function deleteBooking(id) {
    const { data, error } = await supabase.from('bookings').delete().eq("id", id);
    if(error) {
        throw new Error('Booking could not be deleted');
    }

    return data;
}

async function getBookingsAfterDate(date) {
    const { data, error } = await supabase.from('bookings').select("created_at, total_price, extra_price").gte("created_at", date).lte("created_at", getToday({ end: true }));
    if(error) {
        throw new Error('Bookings could not be loaded');
    }

    return data;
}

async function getStaysAfterDate(date) {
    const { data, error } = await supabase.from('bookings').select("*, guests(full_name)").gte("start_date", date).lte("start_date", getToday());
    if(error) {
        throw new Error('Bookings could not be loaded');
    }

    return data;
}

async function getStaysToday() {
    const filter_1 = `and(status.eq.unconfirmed,start_date.eq.${getToday()})`;
    const filter_2 = `and(status.eq.checked-in,end_date.eq.${getToday()})`;
    const { data, error } = await supabase.from('bookings').select("*, guests(full_name, country_code)").or(`${filter_1},${filter_2}`).order("created_at");
    if(error) {
        throw new Error('Bookings could not be loaded');
    }

    return data;
}

export {
    getBookings,
    getBooking,
    updateBooking,
    deleteBooking,
    getBookingsAfterDate,
    getStaysAfterDate,
    getStaysToday
};