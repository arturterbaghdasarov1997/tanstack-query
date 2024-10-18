import React, { Fragment } from 'react'
import useFetchTodos from '../hooks/queries/todo/useFetchTodos'
import TodosList from '../components/todo/TodoList'
import CreateTodo from '../components/todo/CreateTodo'

const TodosPage:React.FC = () => {
    const {data: todos, error, isLoading} = useFetchTodos()

    if (error) return <h3>{error.message}</h3>
    if (isLoading) return <h1>Loading . . . </h1>

    return (
        <Fragment>
            <CreateTodo/>
            <TodosList todos={todos}/>
        </Fragment>
    )
}

export default TodosPage