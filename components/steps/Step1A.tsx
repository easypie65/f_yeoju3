import React from 'react';
import type { Step1Data } from '../../types';
import SectionWrapper from '../SectionWrapper';
import QuestionBox from '../ui/QuestionBox';
import DiscoveryBox from '../ui/DiscoveryBox';
import FormItem from '../ui/FormItem';

interface Step1AProps {
    data: Step1Data;
    onUpdate: (data: Step1Data) => void;
}

const Step1A: React.FC<Step1AProps> = ({ data, onUpdate }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>) => {
        onUpdate({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <SectionWrapper
            title="📊 1단계: 계수 a의 변화 탐구"
            description="슬라이더를 이용하여 a의 값을 다양하게 변화시키며 그래프를 관찰하고 아래 질문에 답해보세요."
        >
            <div className="w-full aspect-video mb-8 rounded-lg overflow-hidden border border-gray-200 shadow-md">
                <iframe
                    src="https://www.geogebra.org/calculator/f8ttaerd?embed"
                    className="w-full h-full"
                    allowFullScreen
                    style={{ border: 0 }}
                    frameBorder="0"
                    title="GeoGebra applet for coefficient a"
                ></iframe>
            </div>
            
            <QuestionBox>
                <FormItem label="a > 0일 때 그래프는 어떤 모양인가요?">
                    <select name="positiveShape" value={data.positiveShape} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="">선택하세요</option>
                        <option value="아래로 볼록">아래로 볼록</option>
                        <option value="위로 볼록">위로 볼록</option>
                    </select>
                </FormItem>
                <FormItem label="a < 0일 때 그래프는 어떤 모양인가요?">
                    <select name="negativeShape" value={data.negativeShape} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="">선택하세요</option>
                        <option value="아래로 볼록">아래로 볼록</option>
                        <option value="위로 볼록">위로 볼록</option>
                    </select>
                </FormItem>
                <FormItem label="|a|의 값이 클수록 그래프의 폭은 어떻게 변하나요?">
                    <select name="width" value={data.width} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="">선택하세요</option>
                        <option value="넓어진다">넓어진다</option>
                        <option value="좁아진다">좁아진다</option>
                    </select>
                </FormItem>
            </QuestionBox>
            <DiscoveryBox
                value={data.discovery}
                onChange={handleChange}
                placeholder="계수 a에 대해 발견한 규칙을 자유롭게 써보세요..."
                name="discovery"
            />
        </SectionWrapper>
    );
};

export default Step1A;
