
import React, { useState, useCallback } from 'react';
import type { ExplorationData } from './types';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import Step1A from './components/steps/Step1A';
import Step2B from './components/steps/Step2B';
import Step3C from './components/steps/Step3C';
import Step4Summary from './components/steps/Step4Summary';
import Navigation from './components/Navigation';

const TOTAL_STEPS = 4;

const App: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<ExplorationData>({
        step1: {
            positiveShape: '',
            negativeShape: '',
            width: '',
            discovery: '',
        },
        step2: {
            vertexFormula: '',
            sameSignPosition: '',
            diffSignPosition: '',
            discovery: '',
        },
        step3: {
            yIntercept: '',
            positivePosition: '',
            negativePosition: '',
            cZeroSpecial: '',
            discovery: '',
        },
    });

    const handleNext = useCallback(() => {
        if (currentStep < TOTAL_STEPS) {
            setCurrentStep(prev => prev + 1);
        }
    }, [currentStep]);

    const handlePrev = useCallback(() => {
        if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
        }
    }, [currentStep]);
    
    const updateFormData = useCallback(<T extends keyof ExplorationData>(step: T, data: ExplorationData[T]) => {
        setFormData(prev => ({
            ...prev,
            [step]: data,
        }));
    }, []);

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1A data={formData.step1} onUpdate={(data) => updateFormData('step1', data)} />;
            case 2:
                return <Step2B data={formData.step2} onUpdate={(data) => updateFormData('step2', data)} />;
            case 3:
                return <Step3C data={formData.step3} onUpdate={(data) => updateFormData('step3', data)} />;
            case 4:
                return <Step4Summary data={formData} />;
            default:
                return null;
        }
    };

    return (
        <div className="container max-w-4xl mx-auto p-4 md:p-8 font-sans">
            <Header />
            <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />
            <main>
                {renderStep()}
            </main>
            <Navigation 
                currentStep={currentStep} 
                totalSteps={TOTAL_STEPS} 
                onPrev={handlePrev} 
                onNext={handleNext} 
            />
        </div>
    );
};

export default App;