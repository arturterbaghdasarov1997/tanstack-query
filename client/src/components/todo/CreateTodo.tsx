import React from 'react';
import CreateForm from '../forms/CreateForm';
import { IFormField } from '../../interfaces/form-field.interface';
import useCreateTodo from '../../hooks/mutations/todo/useCreateTodo';

const CreateTodo: React.FC = () => {
    const { mutate } = useCreateTodo();

    const fields: IFormField[] = [
        { name: "title", placeholder: "Todo Title", label: "Title", type: "text" },
        { name: "description", placeholder: "Todo description", label: "Description", type: "text" },
    ];

    const createBtn = () => (
        <button className='border border-gray-300 p-2 w-full' type='submit'>Create Todo</button>
    );

    const onSubmit = (formData: Record<string, string | boolean>) => {
        mutate(formData);
    };

    return (
        <CreateForm fields={fields} formBtn={createBtn()} action={onSubmit} />
    );
};

export default CreateTodo;
