import React from 'react';

interface SectionWrapperProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, description, children }) => {
    return (
        <section className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-white/20 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-600 mb-6"><strong>📝 탐구 과정:</strong> {description}</p>
            {children}
        </section>
    );
};

export default SectionWrapper;