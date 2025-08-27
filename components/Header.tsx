
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center mb-8 shadow-lg border border-white/20">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                🎯 이차함수 계수별 그래프 변화 탐구
            </h1>
            <p className="text-gray-600">
                이차함수 y = ax² + bx + c에서 각 계수의 변화에 따른 그래프 변화를 발견해보세요!
            </p>
        </header>
    );
};

export default Header;