"use client"

import { useState, useEffect } from 'react';
import { User, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';

export default function MinimalNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleCategory = () => {
        setCategoryOpen(!categoryOpen);
    };

    // Updated categories to match the collections in CollectionsPage
    const categories = [
        { name: "All Designs", href: "/collections?category=all" },
        { name: "Senator Style", href: "/collections?category=senator" },
        { name: "Ankara", href: "/collections?category=ankara" },
        { name: "Agbada Sets", href: "/collections?category=agbada" },
        { name: "Native Wear", href: "/collections?category=native" }
    ];

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-stone-50 py-5'}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center group">
                        <span className="font-light text-xl tracking-wider text-stone-800">
                            HEARTY<span className="text-stone-500 font-extralight">STYLES</span>
                        </span>
                        <div className="ml-1 h-5 w-px bg-stone-300 mx-2"></div>
                        <span className="text-xs tracking-widest text-stone-500 font-light transform transition-transform duration-300 group-hover:translate-x-1">
                            NATIVE ATTIRE
                        </span>
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? (
                            <X size={22} className="text-stone-700" />
                        ) : (
                            <Menu size={22} className="text-stone-700" />
                        )}
                    </button>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center space-x-10">
                        <a href="/" className="text-stone-700 hover:text-stone-900 text-sm tracking-wide font-light border-b border-transparent hover:border-stone-300 transition-all duration-300 pb-1">HOME</a>

                        {/* Categories Dropdown - Now links to Collections page */}
                        <div className="relative group">
                            <a
                                href="/collections"
                                className="flex items-center text-stone-700 hover:text-stone-900 text-sm tracking-wide font-light border-b border-transparent group-hover:border-stone-300 transition-all duration-300 pb-1"
                            >
                                COLLECTIONS
                                <ChevronDown size={16} className="ml-1 transform group-hover:rotate-180 transition-transform duration-300" />
                            </a>

                            <div className="absolute left-0 mt-1 w-60 bg-white shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <div className="py-2 px-1">
                                    {categories.map((category) => (
                                        <a
                                            key={category.name}
                                            href={category.href}
                                            className="block px-4 py-2 text-sm text-stone-700 hover:bg-stone-50 hover:text-stone-900 font-light transition-colors"
                                        >
                                            {category.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <a href="/new-arrivals" className="text-stone-700 hover:text-stone-900 text-sm tracking-wide font-light border-b border-transparent hover:border-stone-300 transition-all duration-300 pb-1">NEW ARRIVALS</a>
                        <a href="/contact" className="text-stone-700 hover:text-stone-900 text-sm tracking-wide font-light border-b border-transparent hover:border-stone-300 transition-all duration-300 pb-1">CONTACT</a>
                    </div>

                    {/* Icons */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <a href="/account" className="text-stone-700 hover:text-stone-900 transition-colors duration-300">
                            <User size={20} strokeWidth={1.5} />
                        </a>
                        <a href="/cart" className="relative text-stone-700 hover:text-stone-900 transition-colors duration-300">
                            <ShoppingBag size={20} strokeWidth={1.5} />
                            <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-stone-800 flex items-center justify-center text-white text-xs">0</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Updated with Collection links */}
            <div
                className={`lg:hidden bg-white border-t border-stone-100 overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col space-y-4">
                        <a href="/" className="text-stone-700 hover:text-stone-900 py-2 font-light tracking-wide">HOME</a>

                        {/* Mobile Categories */}
                        <div>
                            <button
                                className="flex items-center justify-between w-full text-stone-700 hover:text-stone-900 py-2 font-light tracking-wide"
                                onClick={toggleCategory}
                            >
                                <span>COLLECTIONS</span>
                                <ChevronDown
                                    size={16}
                                    className={`transform transition-transform duration-300 ${categoryOpen ? 'rotate-180' : ''}`}
                                />
                            </button>

                            <div className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ${
                                categoryOpen ? 'max-h-screen py-2' : 'max-h-0'
                            }`}>
                                {categories.map((category) => (
                                    <a
                                        key={category.name}
                                        href={category.href}
                                        className="block py-1 text-stone-600 hover:text-stone-900 font-light transition-colors text-sm"
                                    >
                                        {category.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <a href="/new-arrivals" className="text-stone-700 hover:text-stone-900 py-2 font-light tracking-wide">NEW ARRIVALS</a>
                        <a href="/contact" className="text-stone-700 hover:text-stone-900 py-2 font-light tracking-wide">CONTACT</a>

                        <div className="flex items-center space-x-8 pt-4 border-t border-stone-100">
                            <a href="/account" className="text-stone-700 hover:text-stone-900 py-2 flex items-center">
                                <User size={18} strokeWidth={1.5} />
                                <span className="ml-2 font-light">Account</span>
                            </a>
                            <a href="/cart" className="text-stone-700 hover:text-stone-900 py-2 flex items-center">
                                <ShoppingBag size={18} strokeWidth={1.5} />
                                <span className="ml-2 font-light">Cart (0)</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}