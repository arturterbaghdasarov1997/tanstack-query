import React, { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import useDeleteTodo from '../../hooks/mutations/todo/useDeleteTodo';

interface TodoItemProps {
    id: number,
    title: string,
    description: string,
    completed: boolean
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, description, completed }) => {
    const navigate = useNavigate();
    const { mutate: deleteTodo } = useDeleteTodo();

    const handleDelete = (e: MouseEvent<HTMLButtonElement>, id: number) => {
        e.stopPropagation();
        deleteTodo(id);
    };

    const handleEditClick = () => {
        navigate(`/todos/${id}/edit`);
    };

    return (
        <div onClick={() => navigate(`/todos/${id}`)} key={id} className='border border-gray-300 cursor-pointer relative'>
            <h3>{title}</h3>
            <p className='text-blue-800'>{description}</p>
            <h3 className={completed ? 'text-green-600' : 'text-orange-600'}>
                {completed ? 'completed' : 'pending'}
            </h3>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={e => handleDelete(e, id)} className='absolute p-3 text-red-700 top-2 right-2 border border-gray-300'>
                x
            </button>
        </div>
    );
};

export default TodoItem;
