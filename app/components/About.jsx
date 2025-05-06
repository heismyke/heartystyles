"use client"


import { useState, useEffect } from 'react';

export default function About() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about-section');
            if (aboutSection) {
                const sectionPosition = aboutSection.getBoundingClientRect();
                const isVisible = sectionPosition.top < window.innerHeight * 0.75;
                setIsVisible(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once on load to check initial visibility
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="about-section" className="py-24 bg-stone-100 relative overflow-hidden">
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-stone-50 -rotate-45 transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-stone-200 transform translate-x-1/4 translate-y-1/2"></div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
                    {/* Image Column with subtle animation */}
                    <div className={`w-full lg:w-1/2 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 w-full h-full border border-stone-300"></div>
                            <img
                                src="machine.jpg"
                                alt="About Fafy's Finery"
                                className="w-full h-auto object-cover relative z-10"
                            />
                            <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-stone-200"></div>
                        </div>
                    </div>

                    {/* Text Column with staggered fade-in */}
                    <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
                        <div className="relative">
                            <span className="inline-block w-10 h-px bg-stone-400 absolute -left-16 top-5"></span>
                            <h2 className="text-3xl font-light tracking-wide text-stone-800 mb-12">Our story</h2>

                            <div className="space-y-6 font-light">
                                <p className="text-stone-700 leading-relaxed border-l-2 border-stone-300 pl-4">
                                    Fafy's Finery launched in 2019 with a singular vision: to redefine beauty as something
                                    fluid and ever-evolving, not fixed or predetermined.
                                </p>

                                <p className="text-stone-600 leading-relaxed">
                                    As an independent atelier, we've grown across Nigeria through an unwavering commitment
                                    to craftsmanship and trust. Each garment is a testament to our belief that true elegance
                                    lies in simplicity and thoughtful design.
                                </p>

                                <p className="text-stone-600 leading-relaxed">
                                    Our professional team of designers continuously studies evolving trends while honoring
                                    timeless principles of form and function. This balance creates pieces that transcend
                                    fleeting fashion moments.
                                </p>
                            </div>

                            {/* Signature line animation */}
                            <div className={`mt-8 overflow-hidden ${isVisible ? 'w-24' : 'w-0'} transition-all duration-1000 delay-700`}>
                                <div className="h-px bg-stone-400"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Abstract Text Overlay */}
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 rotate-90 origin-right opacity-30">
                <p className="text-xs tracking-widest text-stone-500 whitespace-nowrap select-none">
                    CRAFTED · WITH · INTENTION
                </p>
            </div>
        </section>
    );
}