
import React from 'react';

interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
}

const Step: React.FC<{ step: number | string; label: string; isActive: boolean; isCompleted: boolean }> = ({ step, label, isActive, isCompleted }) => {
    const getStepClasses = () => {
        if (isActive) {
            return 'bg-indigo-600 text-white scale-110 shadow-lg';
        }
        if (isCompleted) {
            return 'bg-green-500 text-white';
        }
        return 'bg-gray-200 text-gray-400';
    };

    return (
        <div className="flex flex-col items-center">
            <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-xl transition-all duration-300 ${getStepClasses()}`}>
                {step}
            </div>
            <p className="text-xs mt-2 font-semibold text-gray-600">{label}</p>
        </div>
    );
};

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
    const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
    const steps = [
        { step: 'a', label: '계수 a' },
        { step: 'b', label: '계수 b' },
        { step: 'c', label: '계수 c' },
        { step: '📋', label: '정리' },
    ];

    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 mb-8 shadow-md border border-white/20">
            <div className="flex justify-between items-center relative">
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-1 bg-gray-200" style={{ transform: 'translateY(-14px)' }}>
                    <div 
                        className="h-full bg-gradient-to-r from-green-400 to-indigo-500 rounded-full transition-all duration-500 ease-in-out" 
                        style={{ width: `${progressPercentage}%` }}
                    />
                </div>
                {steps.map((s, index) => (
                    <div key={index} className="z-10">
                        <Step
                            step={s.step}
                            label={s.label}
                            isActive={currentStep === index + 1}
                            isCompleted={currentStep > index + 1}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgressBar;