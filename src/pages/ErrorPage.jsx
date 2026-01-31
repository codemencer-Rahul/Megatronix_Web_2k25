import React from 'react';
import { useNavigate } from 'react-router-dom';
import LetterGlitch from '../components/animations/LetterGlitch';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Animation */}
            <div className="fixed inset-0 w-full h-full">
                <LetterGlitch />
            </div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center gap-6 px-4">
                {/* 404 Text */}
                <h1 
                    className="text-8xl sm:text-9xl md:text-[12rem] font-bold font-orbitron tracking-wider"
                    style={{ 
                        color: "var(--yellow-primary)",
                        textShadow: "0 0 40px var(--yellow-shadow-strong), 0 0 80px var(--yellow-shadow)"
                    }}
                >
                    404
                </h1>

                {/* Error Message */}
                <div className="text-center space-y-2">
                    <h2 
                        className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-wider"
                        style={{ color: "var(--white)" }}
                    >
                        Page Not Found
                    </h2>
                    <p 
                        className="text-base sm:text-lg md:text-xl"
                        style={{ color: "var(--gray-text)" }}
                    >
                        The page you're looking for doesn't exist.
                    </p>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:scale-105"
                        style={{
                            backgroundColor: "var(--yellow-primary)",
                            color: "var(--black)",
                            boxShadow: "0 0 20px var(--yellow-shadow)"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = "0 0 30px var(--yellow-shadow-strong)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "0 0 20px var(--yellow-shadow)";
                        }}
                    >
                        Go Home
                    </button>

                    <button
                        onClick={() => navigate(-1)}
                        className="px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:scale-105"
                        style={{
                            backgroundColor: "transparent",
                            color: "var(--white)",
                            border: "1px solid var(--gray-text)"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "var(--yellow-primary)";
                            e.currentTarget.style.color = "var(--yellow-primary)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "var(--gray-text)";
                            e.currentTarget.style.color = "var(--white)";
                        }}
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
