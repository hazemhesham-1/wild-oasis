import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import supabase from "../services/supabase";

function useUploader() {
    const queryClient = useQueryClient();

    async function handleDataUpload(data) {
        const { error } = await supabase.from("bookings").delete().neq("id", 0);
        if(error) throw new Error("Failed to upload data!");

        await supabase.from("bookings").insert(data);
    }

    const { mutate: uploadData, isPending: isUploading } = useMutation({
        mutationFn: handleDataUpload,
        onSuccess: () => {
            toast.success("Sample data was uploaded successfully 👍");
            queryClient.invalidateQueries({ active : true });
        },
        onError: () => {
            toast.error("There was an error while uploading data");
        },
    });
    
    return { uploadData, isUploading };
}

export { useUploader };