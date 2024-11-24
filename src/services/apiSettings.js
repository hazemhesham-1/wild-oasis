import supabase from "./supabase";

async function getSettings() {
    const { data, error } = await supabase.from('settings').select("*");
    if(error) {
        throw new Error('Settings could not be loaded');
    }

    return data;
}

export { getSettings };