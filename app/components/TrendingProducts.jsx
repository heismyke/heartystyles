"use client"

import { useState, useEffect } from 'react';

export default function TrendingProducts() {
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Product data array with Nigerian Senator-style attire
    const products = [
        {
            id: 1,
            image: "heartyImage1.png",
            title: "Classic Senator Set",
            category: "Traditional",
            price: "35,000"
        },
        {
            id: 2,
            image: "heartyImage2.png",
            title: "Premium Ankara Senator",
            category: "Ankara",
            price: "42,000"
        },
        {
            id: 3,
            image: "heartyImage1.png",
            title: "Modern Native Two-Piece",
            category: "Contemporary",
            price: "38,500"
        },
        {
            id: 4,
            image: "heartyImage2.png",
            title: "Executive Senator Style",
            category: "Premium",
            price: "45,000"
        }
    ];

    return (
        <section className="py-24 bg-stone-50 relative overflow-hidden">
            {/* Abstract Shapes */}
            <div
                className="absolute -left-20 top-40 w-64 h-64 border border-stone-200 opacity-50"
                style={{
                    transform: `translate(${scrollPosition * 0.01}px, ${scrollPosition * -0.02}px)`,
                    transition: 'transform 0.1s ease-out'
                }}
            ></div>
            <div
                className="absolute right-10 bottom-20 w-32 h-32 rounded-full border border-stone-300 opacity-40"
                style={{
                    transform: `translate(${scrollPosition * -0.02}px, ${scrollPosition * 0.01}px)`,
                    transition: 'transform 0.1s ease-out'
                }}
            ></div>

            <div className="container mx-auto px-4">
                {/* Minimal Header */}
                <div className="mb-20 relative max-w-lg">
                    <span className="inline-block w-10 h-px bg-stone-400 absolute -left-16 top-5"></span>
                    <h2 className="text-3xl font-light tracking-wide text-stone-800">Nigerian Senator Style</h2>
                    <p className="mt-4 text-stone-500 font-light">
                        Timeless elegance in each stitch. Our Senator-style attire combines tradition with modern sophistication.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="group relative"
                            onMouseEnter={() => setHoveredProduct(index)}
                            onMouseLeave={() => setHoveredProduct(null)}
                        >
                            {/* Product Image */}
                            <div className="overflow-hidden mb-6 relative">
                                <div className="aspect-[3/4] bg-stone-100 relative">
                                    {/* Product Image */}
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                    />

                                    {/* Subtle backdrop gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-800/20 to-transparent opacity-70"></div>
                                </div>
                                <div className={`absolute inset-0 bg-stone-900 opacity-0 transition-opacity duration-500 ${hoveredProduct === index ? 'opacity-5' : ''}`}></div>
                            </div>

                            {/* Product Details */}
                            <div className="relative">
                                <h3 className="text-stone-800 font-light text-lg transition-all duration-300 group-hover:translate-x-2">
                                    {product.title}
                                </h3>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-stone-500 text-sm font-light">{product.category}</p>
                                    <p className="text-stone-800 font-light">₦{product.price}</p>
                                </div>

                                {/* Animated line on hover */}
                                <div className={`absolute -bottom-3 left-0 h-px bg-stone-400 transition-all duration-500 ${hoveredProduct === index ? 'w-full' : 'w-0'}`}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-16 text-center">
                    <a href="/collections" className="inline-block group relative px-8 py-3 overflow-hidden">
            <span className="relative z-10 text-stone-800 font-light tracking-widest text-sm">
              EXPLORE ALL DESIGNS
            </span>
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-stone-800 transition-all duration-500 group-hover:w-full"></span>
                    </a>
                </div>
            </div>

            {/* Abstract Text Overlay */}
            <div className="absolute bottom-8 left-8 opacity-30 overflow-hidden">
                <p className="text-xs tracking-widest text-stone-500 select-none">
                    TRADITIONAL · ELEGANT · TIMELESS
                </p>
            </div>
        </section>
    );
}