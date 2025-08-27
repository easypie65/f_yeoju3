import React from 'react';
import type { Step2Data } from '../../types';
import SectionWrapper from '../SectionWrapper';
import QuestionBox from '../ui/QuestionBox';
import DiscoveryBox from '../ui/DiscoveryBox';
import FormItem from '../ui/FormItem';

interface Step2BProps {
    data: Step2Data;
    onUpdate: (data: Step2Data) => void;
}

const Step2B: React.FC<Step2BProps> = ({ data, onUpdate }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        onUpdate({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <SectionWrapper
            title="📊 2단계: 계수 b의 변화 탐구"
            description="a = 1로 고정하고, b의 값을 변화시키며 꼭짓점의 위치와 대칭축을 관찰하고 아래 질문에 답해보세요."
        >
            <div className="w-full aspect-video mb-8 rounded-lg overflow-hidden border border-gray-200 shadow-md">
                 <iframe
                    src="https://www.geogebra.org/calculator/wd5zquyc?embed"
                    className="w-full h-full"
                    allowFullScreen
                    style={{ border: 0 }}
                    frameBorder="0"
                    title="GeoGebra applet for coefficient b"
                ></iframe>
            </div>

            <QuestionBox>
                <FormItem label="꼭짓점의 x좌표는 어떤 식으로 구할 수 있을까요?">
                    <input type="text" name="vertexFormula" value={data.vertexFormula} onChange={handleChange} placeholder="x = ______" className="w-full p-2 border border-gray-300 rounded-md" />
                </FormItem>
                <FormItem label="a와 b의 부호가 같을 때, 대칭축은 y축을 기준으로 어디에 있나요?">
                    <select name="sameSignPosition" value={data.sameSignPosition} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="">선택하세요</option>
                        <option value="왼쪽">왼쪽</option>
                        <option value="오른쪽">오른쪽</option>
                    </select>
                </FormItem>
                <FormItem label="a와 b의 부호가 다를 때, 대칭축은 y축을 기준으로 어디에 있나요?">
                    <select name="diffSignPosition" value={data.diffSignPosition} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="">선택하세요</option>
                        <option value="왼쪽">왼쪽</option>
                        <option value="오른쪽">오른쪽</option>
                    </select>
                </FormItem>
            </QuestionBox>
            <DiscoveryBox
                value={data.discovery}
                onChange={handleChange}
                placeholder="계수 b에 대해 발견한 규칙을 자유롭게 써보세요..."
                name="discovery"
            />

        </SectionWrapper>
    );
};

export default Step2B;
