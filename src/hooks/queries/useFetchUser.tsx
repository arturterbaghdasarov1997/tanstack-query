import { useQuery } from "@tanstack/react-query"
import fetchUser from "../../api/fetchUser"

const useFetchUser = (id: string) => {
    const result = useQuery({
        queryKey: ['user'],
        queryFn: () => fetchUser(Number(id)),
    })
    
    return result
}

export default useFetchUser