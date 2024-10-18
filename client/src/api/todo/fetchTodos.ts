import $api from "../../http";

export default async function fetchTodos() {
    const res = await $api.get('/todos')
    return res.data
}