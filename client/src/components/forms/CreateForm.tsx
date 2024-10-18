import React from 'react';
import { IFormField } from '../../interfaces/form-field.interface';

interface CreateFormProps {
    fields: IFormField[];
    formBtn: React.ReactNode;
    action: (formData: Record<string, string>) => void;
    initialValues?: Record<string, any>;
}

const CreateForm: React.FC<CreateFormProps> = ({ fields, formBtn, action, initialValues }) => {
    const [formData, setFormData] = React.useState<Record<string, string>>(initialValues || {});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type, value, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? String(checked) : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        action(formData);
    };

    return (
        <form  className='p-2 border border-gray-300' onSubmit={handleSubmit}>
            {fields.map(({ name, label, type, placeholder }) => (
                <div key={name}>
                    <label>
                        {label}
                        <input
                            name={name}
                            type={type}
                            placeholder={placeholder}
                            value={type === 'checkbox' ? undefined : formData[name] || ''} 
                            checked={type === 'checkbox' ? formData[name] === 'true' : undefined}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            ))}
            {formBtn}
        </form>
    );
};

export default CreateForm;
