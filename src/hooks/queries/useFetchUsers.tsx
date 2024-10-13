import { useQuery } from "@tanstack/react-query"
import fetchUsers from "../../api/fetchUsers"
import { IUser } from "../../interfaces/user.interface"

const useFetchUsers = () => {
    const result = useQuery<IUser[]>({
        queryKey: ['users'],
        queryFn: fetchUsers
    })

    return result
}

export default useFetchUsers