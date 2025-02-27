import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

function useCabins() {
    const { data: cabins, isLoading } = useQuery({
        queryKey: ["cabins"],
        queryFn: getCabins,
    });

    return { cabins, isLoading };
}

export { useCabins };