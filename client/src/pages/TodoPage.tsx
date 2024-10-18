import React from 'react'
import useFetchTodo from '../hooks/queries/todo/useFetchTodo'
import { useParams } from 'react-router-dom'
import UserItem from '../components/todo/TodoItem'
import { ITodo } from '../interfaces/todo.interface'

const TodoPage:React.FC = () => {
    const {id} = useParams()
    const {data, error, isLoading} = useFetchTodo(id!)
    const {id: userId, title, description, completed} = data || ({} as ITodo)

    if (error) return <h3>{error.message}</h3>
    if (isLoading) return <h1>Loading . . . </h1>

    return (
        <div>
            <UserItem id={userId} title={title} description={description} completed={completed} />
        </div>
    )
}

export default TodoPage