import React from 'react';
import type { Step3Data } from '../../types';
import SectionWrapper from '../SectionWrapper';
import QuestionBox from '../ui/QuestionBox';
import DiscoveryBox from '../ui/DiscoveryBox';
import FormItem from '../ui/FormItem';

interface Step3CProps {
    data: Step3Data;
    onUpdate: (data: Step3Data) => void;
}

const Step3C: React.FC<Step3CProps> = ({ data, onUpdate }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        onUpdate({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <SectionWrapper
            title="📊 3단계: 계수 c의 변화 탐구"
            description="a = 1, b = 0으로 고정하고, c의 값을 변화시키며 y축 교점을 관찰하고 아래 질문에 답해보세요."
        >
            <div className="w-full aspect-video mb-8 rounded-lg overflow-hidden border border-gray-200 shadow-md">
                <iframe
                    src="https://www.geogebra.org/calculator/qj7sjb5g?embed"
                    className="w-full h-full"
                    allowFullScreen
                    style={{ border: 0 }}
                    frameBorder="0"
                    title="GeoGebra applet for coefficient c"
                ></iframe>
            </div>
            
            <QuestionBox>
                <FormItem label="그래프와 y축의 교점의 y좌표는 무엇과 같나요?">
                    <input type="text" name="yIntercept" value={data.yIntercept} onChange={handleChange} placeholder="c와 같다? 다르다?" className="w-full p-2 border border-gray-300 rounded-md" />
                </FormItem>
                <FormItem label="c > 0일 때, 그래프는 x축을 기준으로 어디에서 y축과 만나나요?">
                    <select name="positivePosition" value={data.positivePosition} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="">선택하세요</option>
                        <option value="위쪽">위쪽</option>
                        <option value="아래쪽">아래쪽</option>
                    </select>
                </FormItem>
                <FormItem label="c < 0일 때, 그래프는 x축을 기준으로 어디에서 y축과 만나나요?">
                    <select name="negativePosition" value={data.negativePosition} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md">
                        <option value="">선택하세요</option>
                        <option value="위쪽">위쪽</option>
                        <option value="아래쪽">아래쪽</option>
                    </select>
                </FormItem>
                <FormItem label="c = 0일 때는 어떤 특별한 점이 있나요?">
                    <input type="text" name="cZeroSpecial" value={data.cZeroSpecial} onChange={handleChange} placeholder="특별한 점을 써보세요" className="w-full p-2 border border-gray-300 rounded-md" />
                </FormItem>
            </QuestionBox>
            <DiscoveryBox
                value={data.discovery}
                onChange={handleChange}
                placeholder="계수 c에 대해 발견한 규칙을 자유롭게 써보세요..."
                name="discovery"
            />
        </SectionWrapper>
    );
};

export default Step3C;
