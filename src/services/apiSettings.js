import supabase from "./supabase";

async function getSettings() {
    const { data, error } = await supabase.from('settings').select("*");
    if(error) {
        throw new Error('Settings could not be loaded');
    }

    return data[0];
}

async function updateSettings(newSettings) {
    const { data, error } = await supabase.from('settings').update(newSettings).eq('id', 1).select();
    if(error) {
        throw new Error('Settings could not be updated');
    }

    return data[0];
}

export { getSettings, updateSettings };