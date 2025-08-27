
import React, { useState } from 'react';
import { CLASS_LINKS } from '../../constants';
import type { ExplorationData } from '../../types';

interface Step4SummaryProps {
    data: ExplorationData;
}

const SummaryCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 h-full">
        <h4 className="text-xl font-bold text-indigo-700 mb-4">{title}</h4>
        <div className="space-y-3 text-gray-700">{children}</div>
    </div>
);

const SummaryItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
    <div>
        <p className="font-semibold text-sm text-gray-500">{label}</p>
        <p className="text-base font-medium">{value || <span className="text-gray-400 italic">입력 없음</span>}</p>
    </div>
);

const DiscoveryItem: React.FC<{ value: string }> = ({ value }) => (
     <div className="mt-4 pt-3 border-t">
        <p className="font-semibold text-sm text-teal-600">✨ 내가 발견한 규칙:</p>
        <p className="text-base font-medium whitespace-pre-wrap">{value || <span className="text-gray-400 italic">입력 없음</span>}</p>
    </div>
)

const Step4Summary: React.FC<Step4SummaryProps> = ({ data }) => {
    const [selectedClass, setSelectedClass] = useState('');
    const [showConfetti, setShowConfetti] = useState(false);

    const handleClassSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedClass(e.target.value);
    };

    const handleSubmit = () => {
        if (selectedClass && CLASS_LINKS[selectedClass]) {
            setShowConfetti(true);
            setTimeout(() => {
                window.open(CLASS_LINKS[selectedClass], '_blank');
                setShowConfetti(false);
            }, 1000);
        } else {
            alert('반을 선택해주세요!');
        }
    };
    
    return (
        <section className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-white/20 animate-fade-in overflow-hidden">
            {showConfetti && <Confetti />}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">🎉 최종 정리: 내가 발견한 이차함수의 비밀!</h2>
            <p className="text-gray-600 mb-6">탐구 활동을 통해 발견한 내용을 확인하고, 자신의 반을 선택하여 결과를 제출해주세요.</p>

            <div className="bg-gray-50 rounded-lg p-6 my-8 border">
                <h3 className="text-xl font-bold text-gray-800 mb-4">📊 나의 탐구 결과 요약</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <SummaryCard title="계수 a의 역할">
                        <SummaryItem label="a > 0일 때 모양" value={data.step1.positiveShape} />
                        <SummaryItem label="a < 0일 때 모양" value={data.step1.negativeShape} />
                        <SummaryItem label="|a|가 클수록 폭" value={data.step1.width} />
                        <DiscoveryItem value={data.step1.discovery} />
                    </SummaryCard>
                     <SummaryCard title="계수 b의 역할">
                        <SummaryItem label="꼭짓점 x좌표" value={data.step2.vertexFormula} />
                        <SummaryItem label="a, b 부호 같을 때" value={data.step2.sameSignPosition} />
                        <SummaryItem label="a, b 부호 다를 때" value={data.step2.diffSignPosition} />
                        <DiscoveryItem value={data.step2.discovery} />
                    </SummaryCard>
                     <SummaryCard title="계수 c의 역할">
                        <SummaryItem label="y축 교점" value={data.step3.yIntercept} />
                        <SummaryItem label="c > 0일 때 위치" value={data.step3.positivePosition} />
                        <SummaryItem label="c < 0일 때 위치" value={data.step3.negativePosition} />
                        <SummaryItem label="c = 0일 때 특징" value={data.step3.cZeroSpecial} />
                        <DiscoveryItem value={data.step3.discovery} />
                    </SummaryCard>
                </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 my-6 border border-indigo-200">
                <h3 className="text-xl font-bold text-indigo-800 mb-4">📋 제출하기</h3>
                <p className="mb-4 text-gray-700">자신의 반을 선택하면 해당 반의 팅커벨 보드로 이동합니다.</p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <select
                        value={selectedClass}
                        onChange={handleClassSelect}
                        className="w-full sm:w-1/2 p-3 border-2 border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                    >
                        <option value="">-- 반을 선택하세요 --</option>
                        {Object.keys(CLASS_LINKS).map(classNum => (
                            <option key={classNum} value={classNum}>{classNum}반</option>
                        ))}
                    </select>
                    <button
                        onClick={handleSubmit}
                        disabled={!selectedClass}
                        className="w-full sm:w-auto py-3 px-8 rounded-lg text-base font-bold cursor-pointer transition transform hover:-translate-y-0.5 bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        제출 링크 열기 🚀
                    </button>
                </div>
                 <p className="mt-4 text-center font-semibold text-indigo-700">
                    💡 최종정리를 캡처 후 각반 팅커벨 보드에 올리세요!
                </p>
            </div>

            <div className="mt-8 p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-bold text-yellow-800">✨ 수고했어요!</h4>
                <p className="text-yellow-700 mt-2">오늘 탐구 활동을 통해 이차함수 그래프의 비밀을 파헤쳤습니다. 이제 여러분은 그래프의 모양을 예측하는 전문가가 되었어요!</p>
            </div>
        </section>
    );
};

const Confetti: React.FC = () => {
    // A simple confetti effect component
    const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b'];
    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {Array.from({ length: 50 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full animate-confetti"
                    style={{
                        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 8 + 4}px`,
                        height: `${Math.random() * 8 + 4}px`,
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                />
            ))}
            <style>
                {`
                @keyframes confetti {
                    0% { transform: translateY(-100%) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
                }
                .animate-confetti {
                    animation: confetti 2s linear infinite;
                }
                `}
            </style>
        </div>
    );
}

export default Step4Summary;