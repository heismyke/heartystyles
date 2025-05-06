"use client"

import { useState } from 'react';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = () => {
        if (email) {
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                setEmail('');
            }, 3000);
        }
    };

    return (
        <section className="py-24 bg-stone-50 relative overflow-hidden">
            {/* Abstract Shapes */}
            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full border border-stone-200"></div>
            <div className="absolute -right-10 top-10 w-40 h-40 border border-stone-300 rotate-45"></div>
            <div className="absolute right-1/4 bottom-1/3 w-24 h-24 bg-stone-100"></div>

            <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto relative">
                    {/* Minimal Header */}
                    <div className="mb-16 relative">
                        <span className="inline-block w-10 h-px bg-stone-400 absolute -left-16 top-5"></span>
                        <h2 className="text-3xl font-light tracking-wide text-stone-800">Become an insider</h2>
                        <p className="mt-4 text-stone-500 font-light max-w-md">
                            Subscribe for product releases, design insights, and exclusive content delivered with minimalist elegance.
                        </p>
                    </div>

                    {/* Minimal Input */}
                    <div className="mb-12 relative">
                        <div
                            className={`border-b transition-all duration-300 ${isFocused ? 'border-stone-800' : 'border-stone-300'}`}
                        >
                            <input
                                type="email"
                                placeholder=""
                                value={email}
                                onChange={handleEmailChange}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                className="w-full py-3 bg-transparent outline-none text-stone-800 font-light"
                            />
                            <label
                                className={`absolute left-0 transition-all duration-300 ${
                                    isFocused || email ? '-top-6 text-xs text-stone-500' : 'top-3 text-stone-400'
                                }`}
                            >
                                Your email address
                            </label>
                        </div>
                    </div>

                    {/* Minimal Button */}
                    <div className="flex justify-end">
                        <button
                            onClick={handleSubmit}
                            disabled={isSubmitted}
                            className={`relative overflow-hidden group ${isSubmitted ? 'opacity-50' : ''}`}
                        >
              <span className="inline-block py-2 px-4 font-light tracking-widest text-stone-800">
                {isSubmitted ? 'SUBSCRIBED' : 'SUBSCRIBE'}
              </span>
                            <span className="absolute bottom-0 left-0 w-full h-px bg-stone-800 transform origin-left transition-transform duration-300 group-hover:scale-x-100 scale-x-30"></span>
                        </button>
                    </div>

                    {/* Abstract Decorative Text */}
                    <div className="absolute -right-8 top-1/2 transform rotate-90 origin-left opacity-20">
                        <p className="text-xs tracking-widest text-stone-500 whitespace-nowrap select-none">
                            MINIMAL · ELEGANT · TIMELESS
                        </p>
                    </div>
                </div>
            </div>

            {/* Visual Indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-px">
                <div
                    className={`h-full bg-stone-800 transition-all duration-1000 ease-out ${
                        isSubmitted ? 'w-full' : 'w-0'
                    }`}
                ></div>
            </div>
        </section>
    );
}