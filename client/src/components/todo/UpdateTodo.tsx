import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CreateForm from '../forms/CreateForm';
import useFetchTodo from '../../hooks/queries/todo/useFetchTodo';
import useUpdateTodo from '../../hooks/mutations/todo/useUpdateTodo';
import { IFormField } from '../../interfaces/form-field.interface';

const UpdateTodo: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: todo, error, isLoading } = useFetchTodo(id!);
    const { mutate } = useUpdateTodo();

    const fields: IFormField[] = [
        { name: "title", placeholder: "Todo Title", label: "Title", type: "text" },
        { name: "description", placeholder: "Todo description", label: "Description", type: "text" },
        { name: "isCompleted", placeholder: "Is Completed", label: "Completed", type: "checkbox" },
    ];

    const onSubmit = (formData: Record<string, string>) => {
        const updatedData = {
            ...todo,
            title: formData.title,
            description: formData.description,
            isCompleted: formData.isCompleted === 'true',
        };
        mutate({ id: Number(id), data: updatedData });
        navigate('/todos');
    };

    if (error) return <h3>{error.message}</h3>;
    if (isLoading) return <h1>Loading . . . </h1>;

    return (
        <CreateForm
            fields={fields}
            formBtn={<button type="submit">Update Todo</button>}
            action={onSubmit}
            initialValues={{
                title: todo?.title,
                description: todo?.description,
                isCompleted: todo?.isCompleted,
            }}
        />
    );
};

export default UpdateTodo;
