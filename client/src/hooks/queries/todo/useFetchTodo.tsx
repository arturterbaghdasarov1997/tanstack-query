import { useQuery } from "@tanstack/react-query"
import fetchTodo from "../../../api/todo/fetchTodo"

const useFetchTodo = (id: string) => {
    const result = useQuery({
        queryKey: ['todo'],
        queryFn: () => fetchTodo(Number(id)),
    })
    
    return result
}

export default useFetchTodo