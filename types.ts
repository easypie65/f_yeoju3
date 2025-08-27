
export interface Step1Data {
    positiveShape: string;
    negativeShape: string;
    width: string;
    discovery: string;
}

export interface Step2Data {
    vertexFormula: string;
    sameSignPosition: string;
    diffSignPosition: string;
    discovery: string;
}

export interface Step3Data {
    yIntercept: string;
    positivePosition: string;
    negativePosition: string;
    cZeroSpecial: string;
    discovery: string;
}

export interface ExplorationData {
    step1: Step1Data;
    step2: Step2Data;
    step3: Step3Data;
}