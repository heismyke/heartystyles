"use client"

import { useState, useEffect } from 'react';

export default function CartPage() {
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    // Sample cart data
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Tailored Linen Blazer",
            price: "42,000",
            size: "M",
            color: "Stone",
            quantity: 1,
            image: "blazer.jpg"
        },
        {
            id: 2,
            name: "High-Waisted Palazzo Pants",
            price: "35,000",
            size: "S",
            color: "Charcoal",
            quantity: 1,
            image: "pants.jpg"
        }
    ]);

    const [couponCode, setCouponCode] = useState("");
    const [shippingOption, setShippingOption] = useState("standard");

    // Calculated totals
    const subtotal = cartItems.reduce((total, item) => {
        // Convert price from string format "42,000" to number 42000
        const price = parseInt(item.price.replace(/,/g, ""), 10);
        return total + (price * item.quantity);
    }, 0);

    const shippingCost = shippingOption === "express" ? 5000 : 2500;
    const total = subtotal + shippingCost;

    // Format number as currency with comma separators
    const formatCurrency = (amount) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Set loaded state after component mounts to trigger animations
        setTimeout(() => {
            setIsPageLoaded(true);
        }, 100);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Cart item quantity handlers
    const increaseQuantity = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decreaseQuantity = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handleCouponChange = (e) => {
        setCouponCode(e.target.value);
    };

    const applyCoupon = (e) => {
        e.preventDefault();
        // Add coupon logic here
        console.log("Applying coupon:", couponCode);
        setCouponCode("");
    };

    const handleShippingChange = (option) => {
        setShippingOption(option);
    };

    const proceedToCheckout = () => {
        // Add checkout logic here
        console.log("Proceeding to checkout");
    };

    return (
        <section className="bg-stone-50 min-h-screen pt-24 pb-32 relative overflow-hidden">
            {/* Abstract Shapes */}
            <div
                className="absolute top-0 left-0 w-72 h-72 bg-stone-100"
                style={{
                    transform: `translate(${scrollPosition * -0.02}px, ${scrollPosition * 0.01}px)`,
                    transition: 'transform 0.1s ease-out',
                    opacity: 0.7
                }}
            ></div>

            <div
                className="absolute bottom-20 right-20 w-64 h-64 rounded-full border border-stone-200"
                style={{
                    transform: `translate(${scrollPosition * 0.01}px, ${scrollPosition * -0.02}px)`,
                    transition: 'transform 0.1s ease-out',
                    opacity: 0.5
                }}
            ></div>

            <div
                className="absolute top-40 right-10 w-16 h-16 rotate-45 border border-stone-300"
                style={{
                    opacity: 0.3
                }}
            ></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Page Title with measuring line */}
                <div className="mb-16">
                    <div className="overflow-hidden relative">
                        <h1
                            className="text-3xl font-light tracking-wide text-stone-800 transition-all duration-1000"
                            style={{
                                opacity: isPageLoaded ? 1 : 0,
                                transform: isPageLoaded ? 'translateY(0)' : 'translateY(20px)'
                            }}
                        >
                            Your Cart
                        </h1>
                        <div
                            className="h-px bg-stone-800 transition-all duration-1500 ease-out"
                            style={{
                                width: isPageLoaded ? '60px' : '0',
                                transitionDelay: '300ms'
                            }}
                        ></div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Side - Cart Items */}
                    <div
                        className="w-full lg:w-2/3 transition-all duration-1000"
                        style={{
                            opacity: isPageLoaded ? 1 : 0,
                            transform: isPageLoaded ? 'translateX(0)' : 'translateX(-20px)',
                            transitionDelay: '500ms'
                        }}
                    >
                        {/* Cart Items */}
                        <div className="bg-white border border-stone-200 p-8 mb-8">
                            <h2 className="text-xl font-light mb-6 pb-2 border-b border-stone-100">
                                Items ({cartItems.reduce((total, item) => total + item.quantity, 0)})
                            </h2>

                            {cartItems.length === 0 ? (
                                <div className="text-center py-12">
                                    <p className="text-stone-500 mb-4">Your cart is empty</p>
                                    <button className="group relative overflow-hidden">
                    <span className="inline-block py-2 px-6 bg-transparent border border-stone-800 text-stone-800 font-light tracking-widest transition-all duration-500 group-hover:bg-stone-800 group-hover:text-stone-50">
                      CONTINUE SHOPPING
                    </span>
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-800 transition-all duration-500 group-hover:w-full"></span>
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-8">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="flex flex-col sm:flex-row border-b border-stone-100 pb-8 last:border-0 last:pb-0">
                                            <div className="w-full sm:w-1/4 mb-4 sm:mb-0">
                                                <div className="aspect-square bg-stone-100 overflow-hidden">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                                    />
                                                </div>
                                            </div>

                                            <div className="w-full sm:w-3/4 sm:pl-8 flex flex-col">
                                                <div className="flex flex-col sm:flex-row justify-between mb-4">
                                                    <div>
                                                        <h3 className="text-stone-800 font-light mb-1">{item.name}</h3>
                                                        <div className="flex text-sm text-stone-500 mb-2">
                                                            <span className="mr-4">Size: {item.size}</span>
                                                            <span>Color: {item.color}</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-stone-900 font-medium">₦{item.price}</p>
                                                    </div>
                                                </div>

                                                <div className="mt-auto flex flex-wrap items-center justify-between">
                                                    <div className="flex items-center border border-stone-200 h-8 mb-2 sm:mb-0">
                                                        <button
                                                            onClick={() => decreaseQuantity(item.id)}
                                                            className="w-8 h-full flex items-center justify-center text-stone-400 hover:text-stone-800 transition-colors"
                                                            aria-label="Decrease quantity"
                                                        >
                                                            −
                                                        </button>
                                                        <span className="w-8 h-full flex items-center justify-center text-sm">
                              {item.quantity}
                            </span>
                                                        <button
                                                            onClick={() => increaseQuantity(item.id)}
                                                            className="w-8 h-full flex items-center justify-center text-stone-400 hover:text-stone-800 transition-colors"
                                                            aria-label="Increase quantity"
                                                        >
                                                            +
                                                        </button>
                                                    </div>

                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-stone-400 text-sm hover:text-stone-800 transition-colors"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Continue Shopping */}
                        <div className="flex justify-between items-center">
                            <button className="text-stone-500 text-sm font-light flex items-center group">
                                <span className="mr-2">Continue Shopping</span>
                                <span className="h-px w-4 bg-stone-400 transition-all duration-300 group-hover:w-6"></span>
                            </button>

                            <button
                                onClick={() => setCartItems([])}
                                className="text-stone-500 text-sm font-light"
                            >
                                Clear Cart
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Order Summary */}
                    <div
                        className="w-full lg:w-1/3 transition-all duration-1000"
                        style={{
                            opacity: isPageLoaded ? 1 : 0,
                            transform: isPageLoaded ? 'translateX(0)' : 'translateX(20px)',
                            transitionDelay: '700ms'
                        }}
                    >
                        <div className="bg-white border border-stone-200 p-8 sticky top-24">
                            <h2 className="text-xl font-light mb-8 pb-2 border-b border-stone-100">Order Summary</h2>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between">
                                    <span className="text-stone-500">Subtotal</span>
                                    <span>₦{formatCurrency(subtotal)}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-stone-500">Shipping</span>
                                    <span>₦{formatCurrency(shippingCost)}</span>
                                </div>

                                {/* Shipping Options */}
                                <div className="pt-2">
                                    <p className="text-sm text-stone-500 mb-3">Shipping Options</p>
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <div
                                                className="relative w-4 h-4 rounded-full border border-stone-300 mr-3 cursor-pointer"
                                                onClick={() => handleShippingChange("standard")}
                                            >
                                                {shippingOption === "standard" && (
                                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-stone-800"></div>
                                                )}
                                            </div>
                                            <span className="text-sm">Standard Delivery (₦2,500)</span>
                                        </div>

                                        <div className="flex items-center">
                                            <div
                                                className="relative w-4 h-4 rounded-full border border-stone-300 mr-3 cursor-pointer"
                                                onClick={() => handleShippingChange("express")}
                                            >
                                                {shippingOption === "express" && (
                                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-stone-800"></div>
                                                )}
                                            </div>
                                            <span className="text-sm">Express Delivery (₦5,000)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Coupon Code */}
                            <div className="mb-8">
                                <form onSubmit={applyCoupon} className="flex items-center">
                                    <input
                                        type="text"
                                        value={couponCode}
                                        onChange={handleCouponChange}
                                        placeholder="Coupon code"
                                        className="flex-1 py-2 px-0 bg-transparent border-b border-stone-200 focus:border-stone-800 outline-none text-sm transition-colors duration-300"
                                    />
                                    <button
                                        type="submit"
                                        className="ml-4 text-stone-500 text-sm font-light hover:text-stone-800 transition-colors"
                                    >
                                        Apply
                                    </button>
                                </form>
                            </div>

                            {/* Total */}
                            <div className="flex justify-between items-center text-lg font-light mb-8 pt-4 border-t border-stone-100">
                                <span>Total</span>
                                <span className="font-medium">₦{formatCurrency(total)}</span>
                            </div>

                            <button
                                onClick={proceedToCheckout}
                                className="w-full py-3 bg-stone-800 text-stone-50 font-light tracking-widest transition-all duration-300 hover:bg-stone-900"
                                disabled={cartItems.length === 0}
                            >
                                CHECKOUT
                            </button>

                            <div className="mt-6 flex justify-center">
                                <div className="flex items-center text-xs text-stone-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <span>Secure Checkout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Abstract Text Overlay */}
            <div className="absolute bottom-12 right-12 opacity-30">
                <p className="text-xs tracking-widest text-stone-500 rotate-90 select-none">
                    CURATED · QUALITY · ESSENTIALS
                </p>
            </div>
        </section>
    );
}