import $api from "../../http";

export default async function fetchTodo(id: number) {
    const res = await $api.get(`/todos/${id}`)
    return res.data
}