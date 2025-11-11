import React from 'react';
import { CheckCircleIcon, XCircleIcon } from './icons';

interface FeedbackModalProps {
    isCorrect: boolean;
    explanation: string;
    correctWords: string[];
    onNext: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isCorrect, explanation, correctWords, onNext }) => {
    const bgColor = isCorrect ? 'bg-green-900/80' : 'bg-red-900/80';
    const borderColor = isCorrect ? 'border-green-500/50' : 'border-red-500/50';
    const textColor = isCorrect ? 'text-green-300' : 'text-red-300';
    const Icon = isCorrect ? CheckCircleIcon : XCircleIcon;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
            <div className={`w-full max-w-md rounded-2xl p-6 md:p-8 shadow-2xl border ${bgColor} ${borderColor} animate-fade-in-up`}>
                <div className="flex flex-col items-center text-center">
                    <Icon className={`w-16 h-16 mb-4 ${textColor}`} />
                    <h2 className={`text-3xl font-bold ${isCorrect ? 'text-white' : 'text-red-200'}`}>
                        {isCorrect ? '¡Correcto!' : '¡Casi!'}
                    </h2>
                    {!isCorrect && (
                         <p className="text-lg mt-2 text-slate-300">
                            La{correctWords.length > 1 ? 's' : ''} palabra{correctWords.length > 1 ? 's' : ''} correcta{correctWords.length > 1 ? 's' : ''} era{correctWords.length > 1 ? 'n' : ''}: <strong className="font-bold text-yellow-400 text-xl">{correctWords.join(', ')}</strong>.
                         </p>
                    )}
                    <p className="mt-4 text-slate-300">{explanation}</p>
                    <button 
                        onClick={onNext}
                        className="mt-8 w-full px-6 py-3 bg-sky-600 text-white font-bold text-lg rounded-lg hover:bg-sky-500 transition-all duration-300"
                    >
                        Siguiente
                    </button>
                </div>
            </div>
             <style>{`
                @keyframes fade-in-up {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.3s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default FeedbackModal;