
import React from 'react';

interface NavigationProps {
    currentStep: number;
    totalSteps: number;
    onPrev: () => void;
    onNext: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentStep, totalSteps, onPrev, onNext }) => {
    if (currentStep > totalSteps) return null;

    const nextButtonText = currentStep === totalSteps - 1 ? "최종 정리" : "다음 단계";

    return (
        <div className="flex justify-between mt-8">
            <button
                onClick={onPrev}
                disabled={currentStep === 1}
                className="py-3 px-6 rounded-lg text-base font-bold cursor-pointer transition transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none bg-gray-200 text-gray-700 shadow-sm"
            >
                이전
            </button>
            {currentStep < totalSteps && (
                <button
                    onClick={onNext}
                    className="py-3 px-6 rounded-lg text-base font-bold cursor-pointer transition transform hover:-translate-y-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md hover:shadow-lg"
                >
                    {nextButtonText}
                </button>
            )}
        </div>
    );
};

export default Navigation;