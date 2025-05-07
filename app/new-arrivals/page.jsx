"use client"

import { useState, useEffect } from 'react';
import { ChevronRight, Star } from 'lucide-react';

export default function NewArrivals() {
    // State for animation and interaction
    const [scrollPosition, setScrollPosition] = useState(0);
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [isAnimating, setIsAnimating] = useState(false);

    // Filter categories
    const filters = [
        { id: "all", name: "All New", symbol: "◆" },
        { id: "this-week", name: "This Week", symbol: "○" },
        { id: "this-month", name: "This Month", symbol: "△" },
        { id: "featured", name: "Featured", symbol: "★" }
    ];

    // New arrivals product database
    const allNewArrivals = [
        {
            id: 1,
            image: "/heartyImage1.png",
            title: "Modern Senator Set - White",
            category: "senator",
            price: "42,000",
            arrivalDate: "2025-05-01", // This week
            isFeatured: true
        },
        {
            id: 2,
            image: "/heartyImage2.png",
            title: "Premium Linen Agbada",
            category: "agbada",
            price: "78,000",
            arrivalDate: "2025-05-03", // This week
            isFeatured: true
        },
        {
            id: 3,
            image: "/heartyImage3.png",
            title: "Contemporary Ankara Collection",
            category: "ankara",
            price: "45,500",
            arrivalDate: "2025-05-04", // This week
            isFeatured: false
        },
        {
            id: 4,
            image: "/heartyImage1.png",
            title: "Minimalist Native Suit",
            category: "native",
            price: "39,500",
            arrivalDate: "2025-04-20", // This month
            isFeatured: false
        },
        {
            id: 5,
            image: "/heartyImage2.png",
            title: "Royal Blue Senator",
            category: "senator",
            price: "43,000",
            arrivalDate: "2025-04-25", // This month
            isFeatured: true
        },
        {
            id: 6,
            image: "/heartyImage3.png",
            title: "Festival Edition Agbada",
            category: "agbada",
            price: "82,000",
            arrivalDate: "2025-04-28", // This month
            isFeatured: false
        },
        {
            id: 7,
            image: "/heartyImage1.png",
            title: "Heritage Ankara Pattern",
            category: "ankara",
            price: "38,000",
            arrivalDate: "2025-04-15", // This month
            isFeatured: true
        },
        {
            id: 8,
            image: "/heartyImage2.png",
            title: "Formal Native Collection",
            category: "native",
            price: "47,500",
            arrivalDate: "2025-04-18", // This month
            isFeatured: false
        }
    ];

    // Set up scroll listener
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle filter change with animation
    const handleFilterChange = (filterId) => {
        if (filterId === selectedFilter) return;

        setIsAnimating(true);
        setTimeout(() => {
            setSelectedFilter(filterId);
            setIsAnimating(false);
        }, 300);
    };

    // Filter products based on selected filter
    const filteredProducts = (() => {
        const today = new Date();
        const oneWeekAgo = new Date(today);
        oneWeekAgo.setDate(today.getDate() - 7);

        const oneMonthAgo = new Date(today);
        oneMonthAgo.setDate(today.getDate() - 30);

        switch(selectedFilter) {
            case "this-week":
                return allNewArrivals.filter(product => {
                    const arrivalDate = new Date(product.arrivalDate);
                    return arrivalDate >= oneWeekAgo;
                });
            case "this-month":
                return allNewArrivals.filter(product => {
                    const arrivalDate = new Date(product.arrivalDate);
                    return arrivalDate >= oneMonthAgo;
                });
            case "featured":
                return allNewArrivals.filter(product => product.isFeatured);
            case "all":
            default:
                return allNewArrivals;
        }
    })();

    return (
        <section className="py-24 bg-stone-50 min-h-screen relative overflow-hidden">
            {/* Abstract Background Elements */}
            <div
                className="absolute -left-40 top-40 w-96 h-96 border border-stone-200 opacity-20 rounded-full"
                style={{
                    transform: `translate(${scrollPosition * 0.02}px, ${scrollPosition * 0.01}px)`,
                    transition: 'transform 0.1s ease-out'
                }}
            ></div>
            <div
                className="absolute right-20 bottom-60 w-60 h-60 border border-stone-300 opacity-20 transform rotate-12"
                style={{
                    transform: `rotate(12deg) translate(${scrollPosition * -0.01}px, ${scrollPosition * -0.02}px)`,
                    transition: 'transform 0.1s ease-out'
                }}
            ></div>

            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-16 relative max-w-lg">
                    <span className="inline-block w-10 h-px bg-stone-400 absolute -left-16 top-5"></span>
                    <h2 className="text-3xl font-light tracking-wide text-stone-800">New Arrivals</h2>
                    <p className="mt-4 text-stone-500 font-light">
                        Discover our latest additions to the collection. Fresh designs that blend
                        traditional craftsmanship with contemporary aesthetics.
                    </p>
                </div>

                {/* Abstract Filter Navigation */}
                <div className="mb-16 relative">
                    <div className="flex flex-wrap items-center justify-start space-x-1 md:space-x-2 overflow-x-auto pb-4 no-scrollbar">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => handleFilterChange(filter.id)}
                                className={`group flex items-center space-x-2 px-4 py-3 relative transition-all duration-300 ${
                                    selectedFilter === filter.id
                                        ? 'text-stone-800'
                                        : 'text-stone-500 hover:text-stone-700'
                                }`}
                            >
                                {/* Abstract Symbol */}
                                <span className={`text-xs transition-all duration-300 ${
                                    selectedFilter === filter.id
                                        ? 'text-stone-800'
                                        : 'text-stone-400 group-hover:text-stone-600'
                                }`}>
                                    {filter.symbol}
                                </span>

                                {/* Filter Name */}
                                <span className="text-sm tracking-wide font-light whitespace-nowrap">
                                    {filter.name}
                                </span>

                                {/* Active Indicator Line */}
                                <span
                                    className={`absolute bottom-0 left-0 h-px bg-stone-800 transition-all duration-500 ${
                                        selectedFilter === filter.id ? 'w-full' : 'w-0'
                                    }`}
                                ></span>
                            </button>
                        ))}
                    </div>

                    {/* Abstract Line Separator */}
                    <div className="w-full h-px bg-stone-200 mt-2"></div>
                </div>

                {/* Products Grid with Animation */}
                <div
                    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 transition-opacity duration-300 ${
                        isAnimating ? 'opacity-0' : 'opacity-100'
                    }`}
                >
                    {filteredProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className="group relative"
                            onMouseEnter={() => setHoveredProduct(index)}
                            onMouseLeave={() => setHoveredProduct(null)}
                        >
                            {/* Product Image */}
                            <div className="overflow-hidden mb-6 relative">
                                <div className="aspect-[3/4] bg-stone-100 relative">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                    />

                                    {/* Subtle backdrop gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-800/20 to-transparent opacity-70"></div>

                                    {/* New Arrival Tag */}
                                    <div className="absolute top-3 left-3">
                                        <span className="bg-stone-50 px-2 py-1 text-xs text-stone-800 font-light tracking-wider">
                                            NEW
                                        </span>
                                    </div>

                                    {/* Featured Star (if applicable) */}
                                    {product.isFeatured && (
                                        <div className="absolute top-3 right-3">
                                            <Star size={16} className="text-stone-50 fill-stone-50" />
                                        </div>
                                    )}
                                </div>

                                {/* Arrival Date Badge */}
                                <div className="absolute bottom-16 left-3">
                                    <span className="bg-stone-800 bg-opacity-70 px-2 py-1 text-xs text-stone-50 font-light">
                                        {new Date(product.arrivalDate).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </div>

                                {/* Quick View Button on Hover */}
                                <div
                                    className={`absolute bottom-0 left-0 right-0 py-3 bg-white bg-opacity-90 transform transition-transform duration-300 ${
                                        hoveredProduct === index ? 'translate-y-0' : 'translate-y-full'
                                    }`}
                                >
                                    <button className="w-full flex items-center justify-center text-sm text-stone-800 font-light tracking-wide group">
                                        <span>Quick View</span>
                                        <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                                    </button>
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="relative">
                                <h3 className="text-stone-800 font-light text-base transition-all duration-300 group-hover:translate-x-1">
                                    {product.title}
                                </h3>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-stone-500 text-sm font-light capitalize">
                                        {product.category}
                                    </p>
                                    <p className="text-stone-800 font-light">₦{product.price}</p>
                                </div>

                                {/* Animated line on hover */}
                                <div className={`absolute -bottom-3 left-0 h-px bg-stone-400 transition-all duration-500 ${hoveredProduct === index ? 'w-full' : 'w-0'}`}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="py-20 text-center">
                        <p className="text-stone-500 font-light">No new arrivals found in this category.</p>
                    </div>
                )}
            </div>

            {/* Abstract Text Overlay */}
            <div className="absolute bottom-10 right-10 opacity-20 rotate-90 transform origin-right">
                <p className="text-xs tracking-widest text-stone-500 select-none">
                    FRESH · CONTEMPORARY · ELEGANT
                </p>
            </div>

            {/* Newsletter Section */}
            <div className="container mx-auto px-4 mt-24">
                <div className="max-w-2xl mx-auto text-center p-10 border border-stone-200 bg-stone-50">
                    <h3 className="text-xl font-light tracking-wide text-stone-800 mb-4">Be First to Know</h3>
                    <p className="text-stone-500 font-light mb-6">
                        Subscribe to our newsletter and be the first to receive updates on new arrivals and exclusive offers.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-2">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="px-4 py-2 border border-stone-300 bg-white w-full sm:w-72 text-sm focus:outline-none focus:border-stone-500"
                        />
                        <button className="px-6 py-2 bg-stone-800 text-stone-50 text-sm tracking-wide hover:bg-stone-700 transition-colors w-full sm:w-auto">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}