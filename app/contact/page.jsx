"use client"

import { useState } from 'react';
import { Send, ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
        subject: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [activeFocus, setActiveFocus] = useState(null);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);

            // Reset form after successful submission
            setTimeout(() => {
                setFormState({
                    name: '',
                    email: '',
                    message: '',
                    subject: ''
                });
                setSubmitSuccess(false);
            }, 3000);
        }, 1500);
    };

    return (
        <div className="bg-stone-50 min-h-screen relative overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute top-40 right-0 w-96 h-96 rounded-full bg-stone-100 opacity-50 blur-3xl"></div>
            <div className="absolute bottom-0 left-10 w-64 h-64 rounded-full bg-stone-200 opacity-30 blur-2xl"></div>
            <div className="absolute top-20 left-20 w-40 h-40 border border-stone-300 opacity-20 transform rotate-45"></div>

            {/* Abstract Decorative Line */}
            <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-stone-300 to-transparent opacity-30"></div>

            <div className="container mx-auto px-4 py-24">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="mb-16 relative">
                        <span className="inline-block w-10 h-px bg-stone-400 absolute -left-16 top-5"></span>
                        <h1 className="text-4xl font-light tracking-wider text-stone-800">Contact</h1>
                        <p className="mt-4 text-stone-500 font-light max-w-lg">
                            We appreciate your interest in our collections. Feel free to reach out with any questions or inquiries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Contact Information */}
                        <div className="lg:col-span-1">
                            <div className="space-y-12">
                                <div className="relative">
                                    <span className="inline-block w-6 h-px bg-stone-300 absolute -left-8 top-3"></span>
                                    <h2 className="text-lg font-light text-stone-700 mb-6">Get In Touch</h2>

                                    {/* Contact Methods */}
                                    <div className="space-y-8">
                                        <div className="flex items-start space-x-4">
                                            <div className="p-2 bg-stone-100 rounded-full">
                                                <Mail size={16} className="text-stone-600" />
                                            </div>
                                            <div>
                                                <p className="text-stone-400 text-xs mb-1">Email</p>
                                                <a href="mailto:info@traditionalattire.com" className="text-stone-700 font-light hover:text-stone-900 transition-colors">
                                                    info@traditionalattire.com
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="p-2 bg-stone-100 rounded-full">
                                                <Phone size={16} className="text-stone-600" />
                                            </div>
                                            <div>
                                                <p className="text-stone-400 text-xs mb-1">Phone</p>
                                                <a href="tel:+2347037984051" className="text-stone-700 font-light hover:text-stone-900 transition-colors">
                                                    +234 7037984051
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="p-2 bg-stone-100 rounded-full">
                                                <MapPin size={16} className="text-stone-600" />
                                            </div>
                                            <div>
                                                <p className="text-stone-400 text-xs mb-1">Location</p>
                                                <p className="text-stone-700 font-light">
                                                    Port Harcourt, Rivers State<br />
                                                    Nigeria
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Operating Hours */}
                                <div className="relative pt-4">
                                    <span className="inline-block w-6 h-px bg-stone-300 absolute -left-8 top-7"></span>
                                    <h2 className="text-lg font-light text-stone-700 mb-6">Hours</h2>

                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <p className="text-stone-500 font-light">Monday - Friday</p>
                                            <p className="text-stone-700">9am - 6pm</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="text-stone-500 font-light">Saturday</p>
                                            <p className="text-stone-700">10am - 4pm</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="text-stone-500 font-light">Sunday</p>
                                            <p className="text-stone-700">Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <form onSubmit={handleSubmit} className="space-y-8 relative">
                                {/* Abstract decorative elements for form */}
                                <div className="absolute -right-8 -top-8 w-20 h-20 border border-stone-200 opacity-30"></div>
                                <div className="absolute -left-4 -bottom-4 w-12 h-12 border border-stone-300 opacity-20 transform rotate-45"></div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name Field */}
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            onFocus={() => setActiveFocus('name')}
                                            onBlur={() => setActiveFocus(null)}
                                            className="w-full bg-transparent border-b border-stone-200 py-3 px-2 outline-none text-stone-800 font-light transition-all duration-300 focus:border-stone-400"
                                            placeholder="Your Name"
                                            required
                                        />
                                        <div className={`absolute bottom-0 left-0 h-px bg-stone-600 transition-all duration-500 ${activeFocus === 'name' ? 'w-full' : 'w-0'}`}></div>
                                    </div>

                                    {/* Email Field */}
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            onFocus={() => setActiveFocus('email')}
                                            onBlur={() => setActiveFocus(null)}
                                            className="w-full bg-transparent border-b border-stone-200 py-3 px-2 outline-none text-stone-800 font-light transition-all duration-300 focus:border-stone-400"
                                            placeholder="Your Email"
                                            required
                                        />
                                        <div className={`absolute bottom-0 left-0 h-px bg-stone-600 transition-all duration-500 ${activeFocus === 'email' ? 'w-full' : 'w-0'}`}></div>
                                    </div>
                                </div>

                                {/* Subject Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        onFocus={() => setActiveFocus('subject')}
                                        onBlur={() => setActiveFocus(null)}
                                        className="w-full bg-transparent border-b border-stone-200 py-3 px-2 outline-none text-stone-800 font-light transition-all duration-300 focus:border-stone-400"
                                        placeholder="Subject"
                                    />
                                    <div className={`absolute bottom-0 left-0 h-px bg-stone-600 transition-all duration-500 ${activeFocus === 'subject' ? 'w-full' : 'w-0'}`}></div>
                                </div>

                                {/* Message Field */}
                                <div className="relative">
                  <textarea
                      name="message"
                      id="message"
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setActiveFocus('message')}
                      onBlur={() => setActiveFocus(null)}
                      rows="4"
                      className="w-full bg-transparent border-b border-stone-200 py-3 px-2 outline-none text-stone-800 font-light resize-none transition-all duration-300 focus:border-stone-400"
                      placeholder="Your Message"
                      required
                  ></textarea>
                                    <div className={`absolute bottom-0 left-0 h-px bg-stone-600 transition-all duration-500 ${activeFocus === 'message' ? 'w-full' : 'w-0'}`}></div>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`group relative inline-flex items-center bg-stone-800 text-stone-50 px-8 py-3 overflow-hidden transition-all duration-300 ${isSubmitting ? 'opacity-70' : 'hover:bg-stone-900'}`}
                                    >
                    <span className={`transition-all duration-300 ${isSubmitting ? 'opacity-0' : submitSuccess ? 'opacity-0' : 'opacity-100'}`}>
                      Send Message
                    </span>
                                        <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isSubmitting ? 'opacity-100' : 'opacity-0'}`}>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                                        <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${submitSuccess ? 'opacity-100' : 'opacity-0'}`}>
                      Message Sent
                    </span>
                                        <ArrowRight size={16} className={`ml-2 transform transition-transform duration-300 ${isSubmitting || submitSuccess ? 'opacity-0' : 'group-hover:translate-x-1'}`} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Abstract Text Overlay */}
            <div className="absolute bottom-10 right-10 opacity-20 rotate-90 transform origin-right">
                <p className="text-xs tracking-widest text-stone-500 select-none">
                    CONNECT · INQUIRE · COLLABORATE
                </p>
            </div>
        </div>
    );
}