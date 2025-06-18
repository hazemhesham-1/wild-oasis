import supabase, { supabaseUrl } from "./supabase";

async function createEditCabin(newCabin, id) {
    const { image } = newCabin;
    const hasImagePath = image?.startsWith?.(supabaseUrl);

    const imageName = `${Date.now()}-${image?.name}`;
    const imagePath = hasImagePath ? image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

    let query = supabase.from('cabins');
    if(!id) {
        query = query.insert([{...newCabin, image: imagePath}]);
    }
    else {
        query = query.update({...newCabin, image: imagePath}).eq('id', id);
    }

    const {
        data,
        error
    } = await query.select().single();
    if(error) {
        throw new Error('Cabin could not be created');
    }

    if(!hasImagePath) {
        const {
            error: storageError,
        } = await supabase.storage.from('cabin-images').upload(imageName, image, {
            cacheControl: "3600",
            upsert: false,
        });
        if(storageError) {
            await supabase.from('cabins').delete().eq("id", data.id);
            throw new Error('Cabin image could not be uploaded');
        }
    }

    return data;
}

async function getCabins() {
    const { data, error } = await supabase.from('cabins').select("*");
    if(error) {
        throw new Error('Cabins could not be loaded');
    }

    return data;
}

async function deleteCabin(id) {
    const {
        data,
        error
    } = await supabase.from('cabins').delete().eq("id", id);
    if(error) {
        throw new Error('Cabin could not be deleted');
    }

    return data;
}

export { createEditCabin, getCabins, deleteCabin };