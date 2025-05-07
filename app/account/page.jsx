"use client"

import { useState, useEffect } from 'react';

export default function AccountPage() {
    const [activeTab, setActiveTab] = useState('profile');
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    // State for user data to make it editable
    const [userData, setUserData] = useState({
        name: "Sarah Johnson",
        email: "sarah@example.com",
        phone: "+234 812 345 6789",
        address: "",
        measurements: {
            bust: "92",
            waist: "76",
            hip: "98",
            shoulder: "38",
            armLength: "62",
            inseam: "84"
        },
        orders: [
            { id: "ORD-2025042", date: "April 15, 2025", status: "Delivered", items: 2, total: "75,000" },
            { id: "ORD-2025038", date: "March 28, 2025", status: "Processing", items: 1, total: "35,000" },
            { id: "ORD-2025021", date: "February 10, 2025", status: "Delivered", items: 3, total: "124,000" }
        ],
        wishlist: [
            { id: 1, name: "Modella Fit Dress", price: "35,000", image: "photograph3.jpg" },
            { id: 2, name: "Evening Gown with Cape", price: "55,000", image: "wishlist1.jpg" }
        ]
    });

    // Password state
    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    // Notification settings state
    const [notificationSettings, setNotificationSettings] = useState({
        newDesigns: true,
        orderUpdates: true,
        specialOffers: false
    });

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

    // Tab change handler
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    // Input change handlers
    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleMeasurementChange = (key, value) => {
        setUserData(prev => ({
            ...prev,
            measurements: {
                ...prev.measurements,
                [key]: value
            }
        }));
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswordData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const toggleNotification = (setting) => {
        setNotificationSettings(prev => ({
            ...prev,
            [setting]: !prev[setting]
        }));
    };

    // Form submission handlers
    const handleProfileSubmit = (e) => {
        e.preventDefault();
        // Add API call to save profile data
        console.log("Saving profile data:", userData);
        // Show success message or handle errors
    };

    const handleMeasurementsSubmit = (e) => {
        e.preventDefault();
        // Add API call to save measurements data
        console.log("Saving measurements:", userData.measurements);
        // Show success message or handle errors
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        // Add validation and API call to update password
        console.log("Updating password");
        // Reset fields after submission
        setPasswordData({
            currentPassword: "",
            newPassword: "",
            confirmPassword: ""
        });
    };

    const handleSettingsSubmit = (e) => {
        e.preventDefault();
        // Add API call to save notification settings
        console.log("Saving notification settings:", notificationSettings);
        // Show success message or handle errors
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
                            Your Account
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
                    {/* Left Side - Navigation & User Info */}
                    <div
                        className="w-full lg:w-1/4 transition-all duration-1000"
                        style={{
                            opacity: isPageLoaded ? 1 : 0,
                            transform: isPageLoaded ? 'translateX(0)' : 'translateX(-20px)',
                            transitionDelay: '500ms'
                        }}
                    >
                        {/* User Card */}
                        <div className="mb-12 p-6 border border-stone-200 bg-white">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center text-stone-500">
                                    {userData.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 className="font-light text-lg text-stone-800">{userData.name}</h3>
                                    <p className="text-stone-500 text-sm">{userData.email}</p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-stone-100 mb-6"></div>

                            <div className="text-sm text-stone-600">
                                <p className="flex justify-between py-1">
                                    <span className="text-stone-500">Member since</span>
                                    <span>January 2023</span>
                                </p>
                                <p className="flex justify-between py-1">
                                    <span className="text-stone-500">Orders</span>
                                    <span>{userData.orders.length}</span>
                                </p>
                            </div>
                        </div>

                        {/* Navigation Tabs */}
                        <nav className="mb-8">
                            <ul className="space-y-3">
                                {[
                                    { id: 'profile', label: 'Profile' },
                                    { id: 'measurements', label: 'My Measurements' },
                                    { id: 'orders', label: 'Order History' },
                                    { id: 'wishlist', label: 'Wishlist' },
                                    { id: 'settings', label: 'Account Settings' }
                                ].map((tab) => (
                                    <li key={tab.id}>
                                        <button
                                            className={`w-full text-left py-3 px-4 font-light transition-all duration-300 relative group
                        ${activeTab === tab.id ? 'text-stone-900 bg-white border-l-2 border-stone-800' : 'text-stone-600 hover:text-stone-800'}`}
                                            onClick={() => handleTabChange(tab.id)}
                                        >
                                            {tab.label}
                                            {activeTab !== tab.id && (
                                                <span className="absolute left-0 bottom-0 w-0 h-px bg-stone-400 transition-all duration-300 group-hover:w-full"></span>
                                            )}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Logout Button */}
                        <button className="text-stone-500 text-sm font-light flex items-center group">
                            <span className="mr-2">Logout</span>
                            <span className="h-px w-4 bg-stone-400 transition-all duration-300 group-hover:w-6"></span>
                        </button>
                    </div>

                    {/* Right Side - Content Area */}
                    <div
                        className="w-full lg:w-3/4 transition-all duration-1000"
                        style={{
                            opacity: isPageLoaded ? 1 : 0,
                            transform: isPageLoaded ? 'translateX(0)' : 'translateX(20px)',
                            transitionDelay: '700ms'
                        }}
                    >
                        {/* Profile Tab */}
                        {activeTab === 'profile' && (
                            <div className="bg-white border border-stone-200 p-8">
                                <h2 className="text-xl font-light mb-6 pb-2 border-b border-stone-100">Profile Information</h2>

                                <form onSubmit={handleProfileSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                        <div>
                                            <label className="block text-stone-500 text-sm mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={userData.name}
                                                onChange={handleProfileChange}
                                                className="w-full py-2 px-0 bg-transparent border-b border-stone-200 focus:border-stone-800 outline-none transition-colors duration-300"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-stone-500 text-sm mb-1">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={userData.email}
                                                onChange={handleProfileChange}
                                                className="w-full py-2 px-0 bg-transparent border-b border-stone-200 focus:border-stone-800 outline-none transition-colors duration-300"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-stone-500 text-sm mb-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={userData.phone}
                                                onChange={handleProfileChange}
                                                className="w-full py-2 px-0 bg-transparent border-b border-stone-200 focus:border-stone-800 outline-none transition-colors duration-300"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-stone-500 text-sm mb-1">Delivery Address</label>
                                            <input
                                                type="text"
                                                name="address"
                                                value={userData.address}
                                                onChange={handleProfileChange}
                                                placeholder="Add your delivery address"
                                                className="w-full py-2 px-0 bg-transparent border-b border-stone-200 focus:border-stone-800 outline-none transition-colors duration-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-12 flex justify-end">
                                        <button type="submit" className="group relative overflow-hidden">
                      <span className="inline-block py-2 px-6 bg-transparent border border-stone-800 text-stone-800 font-light tracking-widest transition-all duration-500 group-hover:bg-stone-800 group-hover:text-stone-50">
                        SAVE CHANGES
                      </span>
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-800 transition-all duration-500 group-hover:w-full"></span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {/* Measurements Tab */}
                        {activeTab === 'measurements' && (
                            <div className="bg-white border border-stone-200 p-8">
                                <h2 className="text-xl font-light mb-6 pb-2 border-b border-stone-100">Your Measurements</h2>

                                {/* Ruler decoration */}
                                <div className="relative h-1 w-full mb-12">
                                    <div className="absolute left-0 top-0 w-full h-px bg-stone-300"></div>
                                    {[...Array(21)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="absolute top-0 w-px bg-stone-300"
                                            style={{
                                                left: `${i * 5}%`,
                                                height: i % 5 === 0 ? 6 : 3
                                            }}
                                        ></div>
                                    ))}
                                </div>

                                <form onSubmit={handleMeasurementsSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        {Object.entries(userData.measurements).map(([key, value]) => (
                                            <div key={key} className="relative">
                                                <div className="flex justify-between items-end mb-1">
                                                    <label className="block text-stone-500 text-sm capitalize">
                                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                                    </label>
                                                    <span className="text-xs text-stone-400">cm</span>
                                                </div>
                                                <input
                                                    type="text"
                                                    value={value}
                                                    onChange={(e) => handleMeasurementChange(key, e.target.value)}
                                                    className="w-full py-2 px-0 text-lg font-light bg-transparent border-b border-stone-200 focus:border-stone-800 outline-none transition-colors duration-300"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-12 text-center text-stone-500 text-sm font-light">
                                        <p>Last updated: April 23, 2025</p>
                                    </div>

                                    <div className="mt-6 flex justify-end">
                                        <button type="submit" className="group relative overflow-hidden">
                      <span className="inline-block py-2 px-6 bg-transparent border border-stone-800 text-stone-800 font-light tracking-widest transition-all duration-500 group-hover:bg-stone-800 group-hover:text-stone-50">
                        UPDATE MEASUREMENTS
                      </span>
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-800 transition-all duration-500 group-hover:w-full"></span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {/* Orders Tab */}
                        {activeTab === 'orders' && (
                            <div className="bg-white border border-stone-200 p-8">
                                <h2 className="text-xl font-light mb-6 pb-2 border-b border-stone-100">Order History</h2>

                                <div className="space-y-6">
                                    {userData.orders.map((order) => (
                                        <div key={order.id} className="border-b border-stone-100 pb-6 last:border-0">
                                            <div className="flex flex-col md:flex-row justify-between mb-3">
                                                <div>
                                                    <h3 className="text-stone-800 font-light">{order.id}</h3>
                                                    <p className="text-stone-500 text-sm">{order.date}</p>
                                                </div>
                                                <div className="flex items-center mt-2 md:mt-0">
                          <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                              order.status === 'Delivered' ? 'bg-green-500' :
                                  order.status === 'Processing' ? 'bg-amber-500' : 'bg-stone-500'
                          }`}></span>
                                                    <span className="text-sm">{order.status}</span>
                                                </div>
                                            </div>

                                            <div className="flex justify-between text-sm">
                                                <p className="text-stone-500">{order.items} {order.items > 1 ? 'items' : 'item'}</p>
                                                <p className="font-medium">₦{order.total}</p>
                                            </div>

                                            <div className="mt-4">
                                                <button className="text-stone-500 text-sm font-light flex items-center group">
                                                    <span className="mr-2">View Details</span>
                                                    <span className="h-px w-4 bg-stone-400 transition-all duration-300 group-hover:w-6"></span>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Wishlist Tab */}
                        {activeTab === 'wishlist' && (
                            <div className="bg-white border border-stone-200 p-8">
                                <h2 className="text-xl font-light mb-6 pb-2 border-b border-stone-100">Your Wishlist</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {userData.wishlist.map((item) => (
                                        <div key={item.id} className="flex border border-stone-100 group">
                                            <div className="w-1/3 overflow-hidden">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="w-2/3 p-4 flex flex-col justify-between">
                                                <div>
                                                    <h3 className="text-stone-800 font-light mb-1">{item.name}</h3>
                                                    <p className="text-stone-900">₦{item.price}</p>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <button className="text-stone-500 text-sm font-light flex items-center group">
                                                        <span className="mr-2">Add to Cart</span>
                                                        <span className="h-px w-4 bg-stone-400 transition-all duration-300 group-hover:w-6"></span>
                                                    </button>
                                                    <button className="text-stone-400 text-sm">Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {userData.wishlist.length === 0 && (
                                    <div className="text-center py-12">
                                        <p className="text-stone-500 mb-4">Your wishlist is empty</p>
                                        <button className="group relative overflow-hidden">
                      <span className="inline-block py-2 px-6 bg-transparent border border-stone-800 text-stone-800 font-light tracking-widest transition-all duration-500 group-hover:bg-stone-800 group-hover:text-stone-50">
                        EXPLORE COLLECTION
                      </span>
                                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-800 transition-all duration-500 group-hover:w-full"></span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Settings Tab */}
                        {activeTab === 'settings' && (
                            <div className="bg-white border border-stone-200 p-8">
                                <h2 className="text-xl font-light mb-6 pb-2 border-b border-stone-100">Account Settings</h2>

                                <div className="space-y-8">
                                    {/* Password Section */}
                                    <form onSubmit={handlePasswordSubmit}>
                                        <h3 className="text-lg font-light mb-4">Password</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                            <div>
                                                <label className="block text-stone-500 text-sm mb-1">Current Password</label>
                                                <input
                                                    type="password"
                                                    name="currentPassword"
                                                    value={passwordData.currentPassword}
                                                    onChange={handlePasswordChange}
                                                    placeholder="••••••••"
                                                    className="w-full py-2 px-0 bg-transparent border-b border-stone-200 focus:border-stone-800 outline-none transition-colors duration-300"
                                                />
                                            </div>

                                            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                                <div>
                                                    <label className="block text-stone-500 text-sm mb-1">New Password</label>
                                                    <input
                                                        type="password"
                                                        name="newPassword"
                                                        value={passwordData.newPassword}
                                                        onChange={handlePasswordChange}
                                                        placeholder="••••••••"
                                                        className="w-full py-2 px-0 bg-transparent border-b border-stone-200 focus:border-stone-800 outline-none transition-colors duration-300"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-stone-500 text-sm mb-1">Confirm New Password</label>
                                                    <input
                                                        type="password"
                                                        name="confirmPassword"
                                                        value={passwordData.confirmPassword}
                                                        onChange={handlePasswordChange}
                                                        placeholder="••••••••"
                                                        className="w-full py-2 px-0 bg-transparent border-b border-stone-200 focus:border-stone-800 outline-none transition-colors duration-300"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                    {/* Notifications Section */}
                                    <form onSubmit={handleSettingsSubmit}>
                                        <h3 className="text-lg font-light mb-4">Notifications</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center">
                                                <div
                                                    className="relative w-10 h-5 rounded-full bg-stone-200 mr-3 cursor-pointer"
                                                    onClick={() => toggleNotification('newDesigns')}
                                                >
                                                    <div className={`absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-white transition-all duration-300 ${notificationSettings.newDesigns ? 'translate-x-5 bg-stone-800' : ''}`}></div>
                                                </div>
                                                <span className="text-sm text-stone-700">Email notifications for new designs</span>
                                            </div>

                                            <div className="flex items-center">
                                                <div
                                                    className="relative w-10 h-5 rounded-full bg-stone-200 mr-3 cursor-pointer"
                                                    onClick={() => toggleNotification('orderUpdates')}
                                                >
                                                    <div className={`absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-white transition-all duration-300 ${notificationSettings.orderUpdates ? 'translate-x-5 bg-stone-800' : ''}`}></div>
                                                </div>
                                                <span className="text-sm text-stone-700">Order updates via email</span>
                                            </div>

                                            <div className="flex items-center">
                                                <div
                                                    className="relative w-10 h-5 rounded-full bg-stone-200 mr-3 cursor-pointer"
                                                    onClick={() => toggleNotification('specialOffers')}
                                                >
                                                    <div className={`absolute left-0.5 top-0.5 w-4 h-4 rounded-full bg-white transition-all duration-300 ${notificationSettings.specialOffers ? 'translate-x-5 bg-stone-800' : ''}`}></div>
                                                </div>
                                                <span className="text-sm text-stone-700">Special offers and promotions</span>
                                            </div>
                                        </div>

                                        <div className="mt-12 flex justify-end">
                                            <button type="submit" className="group relative overflow-hidden">
                        <span className="inline-block py-2 px-6 bg-transparent border border-stone-800 text-stone-800 font-light tracking-widest transition-all duration-500 group-hover:bg-stone-800 group-hover:text-stone-50">
                          SAVE SETTINGS
                        </span>
                                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-stone-800 transition-all duration-500 group-hover:w-full"></span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Abstract Text Overlay */}
            <div className="absolute bottom-12 right-12 opacity-30">
                <p className="text-xs tracking-widest text-stone-500 rotate-90 select-none">
                    PERSONALIZED · TAILORED · EXPERIENCE
                </p>
            </div>
        </section>
    );
}