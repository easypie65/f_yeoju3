
import React from 'react';

interface FormItemProps {
    label: string;
    children: React.ReactNode;
}

const FormItem: React.FC<FormItemProps> = ({ label, children }) => {
    return (
        <div>
            <label className="block mb-1 font-semibold text-gray-700">{label}</label>
            {children}
        </div>
    );
};

export default FormItem;