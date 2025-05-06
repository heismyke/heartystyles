"use client"

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-stone-50 py-24 relative overflow-hidden">
            {/* Abstract Shapes */}
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full border border-stone-200 opacity-30 transform translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute top-10 left-10 w-20 h-20 bg-stone-100"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 rotate-45 border border-stone-300 opacity-40"></div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <a href="/" className="inline-block">
                            <img
                                src="/api/placeholder/64/64"
                                alt="Hearty Styles Logo"
                                className="w-16 h-16 object-contain"
                            />
                        </a>
                        <h1 className="text-2xl font-light tracking-wider text-stone-800">
                            HEARTY<span className="text-stone-500 font-extralight">STYLES</span>
                        </h1>
                        <p className="text-stone-500 font-light max-w-xs">
                            Minimal, elegant, and timeless native attire for men, crafted with precision and delivered with care.
                        </p>
                    </div>

                    {/* Help Column */}
                    <div>
                        <h5 className="text-sm font-normal tracking-wide text-stone-800 mb-8 relative">
                            <span className="absolute -bottom-2 left-0 w-8 h-px bg-stone-400"></span>
                            HELP
                        </h5>
                        <ul className="space-y-4">
                            {[
                                "Delivery & Returns",
                                "Frequently Asked Questions",
                                "Privacy Policy",
                                "Size Guide",
                                "Custom Orders",
                                "Terms & Conditions"
                            ].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-stone-600 hover:text-stone-900 font-light text-sm transition-colors duration-300 relative group"
                                    >
                                        {item}
                                        <span className="absolute left-0 bottom-0 w-0 h-px bg-stone-800 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h5 className="text-sm font-normal tracking-wide text-stone-800 mb-8 relative">
                            <span className="absolute -bottom-2 left-0 w-8 h-px bg-stone-400"></span>
                            CONTACT
                        </h5>
                        <ul className="space-y-4 mb-10">
                            <li className="text-stone-600 font-light text-sm flex items-start">
                                <span className="inline-block w-4 h-px bg-stone-400 mt-3 mr-3"></span>
                                Nigeria, Port Harcourt
                            </li>
                            <li className="text-stone-600 font-light text-sm flex items-start">
                                <span className="inline-block w-4 h-px bg-stone-400 mt-3 mr-3"></span>
                                +234 - 7037984051
                            </li>
                            <li className="text-stone-600 font-light text-sm flex items-start">
                                <span className="inline-block w-4 h-px bg-stone-400 mt-3 mr-3"></span>
                                <a
                                    href="mailto:hello@heartystyles.com"
                                    className="relative group"
                                >
                                    hello@heartystyles.com
                                    <span className="absolute left-0 bottom-0 w-0 h-px bg-stone-800 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        </ul>

                        {/* Social Media Links */}
                        <div className="flex space-x-6">
                            {['FB', 'IG', 'TW'].map((social, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="w-8 h-8 flex items-center justify-center border border-stone-300 hover:border-stone-800 transition-colors duration-300 group"
                                >
                                    <span className="sr-only">{social === 'FB' ? 'Facebook' : social === 'IG' ? 'Instagram' : 'Twitter'}</span>
                                    <div className="text-xs text-stone-500 group-hover:text-stone-800 transition-colors duration-300">{social}</div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-20 pt-8 border-t border-stone-200">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-xs text-stone-500 font-light mb-4 md:mb-0">
                            &copy; {currentYear} Hearty Styles. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            {["Privacy", "Terms", "Shipping"].map((item, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="text-xs text-stone-500 hover:text-stone-800 transition-colors duration-300"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Abstract Text Overlay */}
            <div className="absolute top-16 right-12 opacity-20">
                <p className="text-xs tracking-widest text-stone-500 rotate-90 select-none">
                    NATIVE · ELEGANCE
                </p>
            </div>
        </footer>
    );
}