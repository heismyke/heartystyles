"use client"

import { useState, useEffect, Suspense } from 'react';
import { ChevronRight } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

// Create a separate component that uses useSearchParams
function CollectionsWithParams({ onCategoryChange }) {
    const searchParams = useSearchParams();

    useEffect(() => {
        // Check if there's a category parameter in the URL
        const categoryParam = searchParams.get('category');
        if (categoryParam) {
            onCategoryChange(categoryParam);
        }
    }, [searchParams, onCategoryChange]);

    return null; // This component doesn't render anything
}

export default function Collections() {
    // State for active collection and animation
    const [activeCollection, setActiveCollection] = useState("all");
    const [isAnimating, setIsAnimating] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [hoveredProduct, setHoveredProduct] = useState(null);

    // Collection categories with abstract visual indicators
    const collections = [
        { id: "all", name: "All Designs", symbol: "◇" },
        { id: "senator", name: "Senator Style", symbol: "○" },
        { id: "ankara", name: "Ankara", symbol: "△" },
        { id: "agbada", name: "Agbada Sets", symbol: "□" },
        { id: "native", name: "Native Wear", symbol: "⬦" }
    ];

    // Product database
    const allProducts = [
        // Senator Style products
        {
            id: 1,
            image: "heartyImage1.png", // Updated to correct path format
            title: "Classic Senator Set",
            category: "senator",
            price: "35,000",
            isNew: true
        },
        {
            id: 2,
            image: "/heartyImage2.png",
            title: "Premium Linen Senator",
            category: "senator",
            price: "40,000"
        },
        {
            id: 3,
            image: "/heartyImage1.png",
            title: "Modern Senator Style",
            category: "senator",
            price: "38,500"
        },

        // Ankara products
        {
            id: 4,
            image: "/heartyImage2.png",
            title: "Ankara Print Shirt",
            category: "ankara",
            price: "32,000",
            isNew: true
        },
        {
            id: 5,
            image: "/heartyImage3.png",
            title: "Contemporary Ankara Set",
            category: "ankara",
            price: "45,000"
        },
        {
            id: 6,
            image: "/heartyImage2.png",
            title: "Patterned Ankara Outfit",
            category: "ankara",
            price: "37,500"
        },

        // Agbada Sets
        {
            id: 7,
            image: "/heartyImage1.png",
            title: "Royal Agbada Set",
            category: "agbada",
            price: "65,000",
            isNew: true
        },
        {
            id: 8,
            image: "/heartyImage2.png",
            title: "Modern Agbada Collection",
            category: "agbada",
            price: "75,000"
        },

        // Native Wear
        {
            id: 9,
            image: "/heartyImage1.png",
            title: "Traditional Native Attire",
            category: "native",
            price: "42,000"
        },
        {
            id: 10,
            image: "/heartyImage2.png",
            title: "Premium Native Set",
            category: "native",
            price: "48,000",
            isNew: true
        },
        {
            id: 11,
            image: "/heartyImage1.png",
            title: "Contemporary Native Style",
            category: "native",
            price: "44,500"
        },
        {
            id: 12,
            image: "/heartyImage2.png",
            title: "Minimalist Native Design",
            category: "native",
            price: "39,000"
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle collection change with animation
    const handleCollectionChange = (collectionId) => {
        if (collectionId === activeCollection) return;

        // Validate that the collection exists
        if (collections.some(c => c.id === collectionId)) {
            setIsAnimating(true);
            setTimeout(() => {
                setActiveCollection(collectionId);
                setIsAnimating(false);

                // Update URL when changing collection (optional)
                const url = new URL(window.location);
                url.searchParams.set('category', collectionId);
                window.history.pushState({}, '', url);
            }, 300);
        }
    };

    // Filtered products based on active collection
    const filteredProducts = activeCollection === "all"
        ? allProducts
        : allProducts.filter(product => product.category === activeCollection);

    return (
        <section className="py-24 bg-stone-50 min-h-screen relative overflow-hidden">
            {/* Suspense boundary for useSearchParams */}
            <Suspense fallback={null}>
                <CollectionsWithParams onCategoryChange={handleCollectionChange} />
            </Suspense>

            {/* Abstract Background Elements */}
            <div
                className="absolute -right-40 top-20 w-80 h-80 border border-stone-200 opacity-30 rounded-full"
                style={{
                    transform: `translate(${scrollPosition * -0.02}px, ${scrollPosition * 0.01}px)`,
                    transition: 'transform 0.1s ease-out'
                }}
            ></div>
            <div
                className="absolute left-10 bottom-40 w-40 h-40 border border-stone-300 opacity-20 transform rotate-45"
                style={{
                    transform: `rotate(45deg) translate(${scrollPosition * 0.01}px, ${scrollPosition * -0.01}px)`,
                    transition: 'transform 0.1s ease-out'
                }}
            ></div>

            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-16 relative max-w-lg">
                    <span className="inline-block w-10 h-px bg-stone-400 absolute -left-16 top-5"></span>
                    <h2 className="text-3xl font-light tracking-wide text-stone-800">Collections</h2>
                    <p className="mt-4 text-stone-500 font-light">
                        Explore our curated selection of traditional and contemporary men's native attire,
                        crafted with precision and timeless elegance.
                    </p>
                </div>

                {/* Abstract Collection Navigation */}
                <div className="mb-16 relative">
                    <div className="flex flex-wrap items-center justify-start space-x-1 md:space-x-2 overflow-x-auto pb-4 no-scrollbar">
                        {collections.map((collection) => (
                            <button
                                key={collection.id}
                                onClick={() => handleCollectionChange(collection.id)}
                                className={`group flex items-center space-x-2 px-4 py-3 relative transition-all duration-300 ${
                                    activeCollection === collection.id
                                        ? 'text-stone-800'
                                        : 'text-stone-500 hover:text-stone-700'
                                }`}
                            >
                                {/* Abstract Symbol */}
                                <span className={`text-xs transition-all duration-300 ${
                                    activeCollection === collection.id
                                        ? 'text-stone-800'
                                        : 'text-stone-400 group-hover:text-stone-600'
                                }`}>
                  {collection.symbol}
                </span>

                                {/* Collection Name */}
                                <span className="text-sm tracking-wide font-light whitespace-nowrap">
                  {collection.name}
                </span>

                                {/* Active Indicator Line */}
                                <span
                                    className={`absolute bottom-0 left-0 h-px bg-stone-800 transition-all duration-500 ${
                                        activeCollection === collection.id ? 'w-full' : 'w-0'
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
                                        src={product.image} // Using placeholder image for demo
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                    />

                                    {/* Subtle backdrop gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-stone-800/20 to-transparent opacity-70"></div>

                                    {/* "New" Tag */}
                                    {product.isNew && (
                                        <div className="absolute top-3 left-3">
                      <span className="bg-stone-50 px-2 py-1 text-xs text-stone-800 font-light tracking-wider">
                        NEW
                      </span>
                                        </div>
                                    )}
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
                                        {collections.find(c => c.id === product.category)?.name || product.category}
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
                        <p className="text-stone-500 font-light">No products found in this collection.</p>
                    </div>
                )}
            </div>

            {/* Abstract Text Overlay */}
            <div className="absolute bottom-10 right-10 opacity-20 rotate-90 transform origin-right">
                <p className="text-xs tracking-widest text-stone-500 select-none">
                    CRAFTSMANSHIP · HERITAGE · STYLE
                </p>
            </div>
        </section>
    );
}