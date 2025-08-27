
import React from 'react';

interface QuestionBoxProps {
    children: React.ReactNode;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({ children }) => {
    return (
        <div className="bg-yellow-50 border-l-4 border-orange-400 p-6 my-6 rounded-r-lg shadow-sm">
            <h3 className="text-lg font-bold text-orange-800 mb-4">🤔 발견해보세요!</h3>
            <div className="space-y-4">
                {children}
            </div>
        </div>
    );
};

export default QuestionBox;