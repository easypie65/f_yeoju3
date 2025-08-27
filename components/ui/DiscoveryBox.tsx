
import React from 'react';

interface DiscoveryBoxProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder: string;
    name: string;
}

const DiscoveryBox: React.FC<DiscoveryBoxProps> = ({ value, onChange, placeholder, name }) => {
    return (
        <div className="bg-teal-50 border-l-4 border-teal-400 p-6 my-6 rounded-r-lg shadow-sm">
            <h3 className="text-lg font-bold text-teal-800 mb-2">✨ 내가 발견한 규칙</h3>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full h-28 p-3 border-2 border-teal-200 rounded-md focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition bg-white"
            />
        </div>
    );
};

export default DiscoveryBox;