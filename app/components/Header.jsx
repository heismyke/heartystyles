"use client"

import { useState, useEffect } from 'react';

export default function Banner() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    // Create marks for the ruler (0-100 cm)
    const rulerMarks = Array.from({ length: 101 }, (_, i) => i);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Set loaded state after component mounts to trigger animations
        setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-stone-50">
            {/* Ruler Design - L-shaped ruler from top-right to bottom-right */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
                {/* Vertical ruler line */}
                <div
                    className={`absolute top-0 right-16 w-px h-0 bg-stone-800 transition-all duration-1500 ease-out ${isLoaded ? 'h-1/2' : ''}`}
                    style={{
                        transitionDelay: '300ms',
                        opacity: 0.8
                    }}
                ></div>

                {/* Horizontal ruler line */}
                <div
                    className={`absolute top-1/2 right-16 h-px w-0 bg-stone-800 transition-all duration-1500 ease-out ${isLoaded ? 'w-3/4' : ''}`}
                    style={{
                        transitionDelay: '1800ms',
                        opacity: 0.8
                    }}
                ></div>

                {/* Vertical ruler marks */}
                <div className="absolute top-0 right-16 h-1/2">
                    {rulerMarks.map((mark, index) => {
                        // Only show every 5th mark as a longer line
                        const isLongerMark = index % 5 === 0;
                        const isMajorMark = index % 10 === 0;
                        const markLength = isMajorMark ? 10 : (isLongerMark ? 6 : 3);

                        return (
                            <div
                                key={`v-${index}`}
                                className={`absolute right-0 w-${markLength} h-px bg-stone-800 transition-all duration-500`}
                                style={{
                                    top: `${index / 2}%`,
                                    transform: 'translateY(-50%)',
                                    opacity: isLoaded ? 0.8 : 0,
                                    width: markLength,
                                    transitionDelay: `${800 + index * 8}ms`,
                                }}
                            ></div>
                        );
                    })}

                    {/* Centimeter numbers - vertical */}
                    {rulerMarks.filter(mark => mark % 10 === 0 && mark > 0).map((mark) => (
                        <div
                            key={`vn-${mark}`}
                            className="absolute right-12 text-xs text-stone-500 font-light transition-all duration-500"
                            style={{
                                top: `${mark / 2}%`,
                                transform: 'translateY(-50%)',
                                opacity: isLoaded ? 0.8 : 0,
                                transitionDelay: `${1200 + mark * 8}ms`,
                            }}
                        >
                            {mark}
                        </div>
                    ))}
                </div>

                {/* Horizontal ruler marks */}
                <div className="absolute top-1/2 right-16 w-3/4">
                    {rulerMarks.map((mark, index) => {
                        // Only show every 5th mark as a longer line
                        const isLongerMark = index % 5 === 0;
                        const isMajorMark = index % 10 === 0;
                        const markLength = isMajorMark ? 10 : (isLongerMark ? 6 : 3);

                        return (
                            <div
                                key={`h-${index}`}
                                className={`absolute top-0 h-${markLength} w-px bg-stone-800 transition-all duration-500`}
                                style={{
                                    left: `${index / 1.35}%`,
                                    transform: 'translateX(-50%)',
                                    opacity: isLoaded ? 0.8 : 0,
                                    height: markLength,
                                    transitionDelay: `${2000 + index * 8}ms`,
                                }}
                            ></div>
                        );
                    })}

                    {/* Centimeter numbers - horizontal */}
                    {rulerMarks.filter(mark => mark % 10 === 0 && mark > 0).map((mark) => (
                        <div
                            key={`hn-${mark}`}
                            className="absolute top-12 text-xs text-stone-500 font-light transition-all duration-500"
                            style={{
                                left: `${mark / 1.35}%`,
                                transform: 'translateX(-50%)',
                                opacity: isLoaded ? 0.8 : 0,
                                transitionDelay: `${2400 + mark * 8}ms`,
                            }}
                        >
                            {mark}
                        </div>
                    ))}
                </div>

                {/* Moving measurement arrow - vertical */}
                <div
                    className="absolute right-16 w-6 h-6 transition-all duration-300"
                    style={{
                        top: isLoaded ? `${20 + (scrollPosition * 0.05)}%` : '0%',
                        opacity: isLoaded ? 1 : 0,
                        transitionDelay: '2800ms',
                        transform: 'translateY(-50%)'
                    }}
                >
                    <div className="absolute left-0 top-1/2 w-6 h-px bg-stone-800"></div>
                    <div className="absolute left-0 top-1/2 w-px h-3 bg-stone-800" style={{ transform: 'translateY(-50%)' }}></div>
                </div>

                {/* Moving measurement arrow - horizontal */}
                <div
                    className="absolute top-1/2 h-6 w-6 transition-all duration-300"
                    style={{
                        left: isLoaded ? `${20 + (scrollPosition * 0.05)}%` : '0%',
                        opacity: isLoaded ? 1 : 0,
                        transitionDelay: '3000ms',
                        transform: 'translateX(-50%)'
                    }}
                >
                    <div className="absolute top-0 left-1/2 h-6 w-px bg-stone-800"></div>
                    <div className="absolute top-0 left-1/2 h-px w-3 bg-stone-800" style={{ transform: 'translateX(-50%)' }}></div>
                </div>
            </div>

            {/* Subtle thread/stitch line animation */}
            <div
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(to bottom, transparent 98%, rgba(120, 113, 108, 0.1) 100%)',
                    backgroundSize: '100% 8px',
                    backgroundRepeat: 'repeat',
                    opacity: isLoaded ? 0.3 : 0,
                    transition: 'opacity 2s ease-out',
                    transitionDelay: '3200ms',
                }}
            ></div>

            {/* Content Container */}
            <div className="container mx-auto px-4 h-full flex items-center">
                <div className="max-w-md relative z-10">
                    {/* Title with line animation */}
                    <div className="overflow-hidden mb-6">
                        <h1
                            className="text-5xl font-light tracking-tight text-stone-900 transition-all duration-1000"
                            style={{
                                opacity: isLoaded ? 1 : 0,
                                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                            }}
                        >
                            Precisely crafted
                        </h1>
                        <div
                            className="h-px bg-stone-800 transition-all duration-1500 ease-out-expo"
                            style={{
                                width: isLoaded ? '120px' : '0',
                                transitionDelay: '300ms'
                            }}
                        ></div>
                    </div>

                    {/* Tagline */}
                    <p
                        className="text-xl font-light text-stone-600 mb-12 pl-4 border-l-2 border-stone-400 transition-all duration-1000"
                        style={{
                            opacity: isLoaded ? 1 : 0,
                            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                            transitionDelay: '500ms'
                        }}
                    >
                        Every stitch measured to perfection.
                    </p>

                    {/* Button */}
                    <button
                        className="group relative overflow-hidden transition-all duration-1000"
                        style={{
                            opacity: isLoaded ? 1 : 0,
                            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                            transitionDelay: '700ms'
                        }}
                    >
            <span className="inline-block py-3 px-6 bg-transparent border border-stone-900 text-stone-900 font-light tracking-widest transition-all duration-500 group-hover:bg-stone-900 group-hover:text-stone-50">
              EXPLORE COLLECTION
            </span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-900 transition-all duration-500 group-hover:w-full"></span>
                    </button>
                </div>
            </div>

            {/* Tailor details text */}
            <div
                className="absolute bottom-8 left-8 transition-all duration-1000"
                style={{
                    opacity: isLoaded ? 0.4 : 0,
                    transitionDelay: '3400ms'
                }}
            >
                <p className="text-xs tracking-widest text-stone-500 select-none">
                    MEASURED · TAILORED · PERFECTED
                </p>
            </div>

            {/* Centimeter mark (cm) labels */}
            <div
                className="absolute top-4 right-4 text-xs text-stone-500 font-light transition-all duration-1000"
                style={{
                    opacity: isLoaded ? 0.8 : 0,
                    transitionDelay: '3000ms'
                }}
            >
                cm
            </div>

            {/* Custom animations */}
            <style jsx global>{`
                @keyframes stitchAnimation {
                    0% { background-position-y: 0; }
                    100% { background-position-y: 16px; }
                }

                @keyframes rulerAppear {
                    0% { width: 0; }
                    100% { width: 75%; }
                }
            `}</style>
        </section>
    );
}