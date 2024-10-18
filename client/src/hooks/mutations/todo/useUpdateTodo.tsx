import { useMutation } from "@tanstack/react-query";
import { ITodo } from "../../../interfaces/todo.interface";
import updateTodo from "../../../api/todo/updateTodo";
import { client } from "../../../react-query/client";

interface UpdateTodoVariables {
    id: number;
    data: Partial<ITodo>;
}

const useUpdateTodo = () => {
    const result = useMutation({
        mutationFn: ({ id, data }: UpdateTodoVariables) => updateTodo(id, data),
        onError: (err) => console.log(err),
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ['todos'] });
        },
    });
    
    return result;
};

export default useUpdateTodo;
