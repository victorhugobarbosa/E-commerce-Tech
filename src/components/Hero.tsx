'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        title: "Gaming Laptop",
        subtitle: "Legion Pro X",
        description: "Unleash ultimate power with the new Legion Pro X. RGB glory meets desktop-class performance.",
        price: "R$ 8.999",
        image: "/E-commerce-Tech/images/laptop.png",
        color: "from-purple-600 to-blue-600",
        accent: "text-purple-400"
    },
    {
        id: 2,
        title: "Noise Cancelling",
        subtitle: "NC Pro Max",
        description: "Immerse yourself in pure silence. The next generation of active noise cancellation is here.",
        price: "R$ 1.499",
        image: "/E-commerce-Tech/images/headphones.png",
        color: "from-blue-600 to-cyan-400",
        accent: "text-electric-blue"
    },
    {
        id: 3,
        title: "Smart Watch",
        subtitle: "Series X Ultra",
        description: "Your health, your life, on your wrist. The most advanced wearable technology ever built.",
        price: "R$ 2.299",
        image: "/E-commerce-Tech/images/watch.png",
        color: "from-cyan-500 to-green-400",
        accent: "text-cyan-400"
    }
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-[80vh] min-h-[600px] overflow-hidden bg-cyber-black border-b border-white/5">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${slides[current].color} opacity-10 blur-[100px]`} />

                    <div className="container mx-auto grid h-full gap-12 px-4 md:grid-cols-2 md:items-center relative z-10">
                        <div className="space-y-6 pl-4 md:pl-12">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`inline-block rounded-full bg-white/5 px-3 py-1 text-sm font-medium ${slides[current].accent} border border-white/10`}
                            >
                                New Release
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-5xl font-bold tracking-tight text-white md:text-7xl leading-tight"
                            >
                                {slides[current].title} <br />
                                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slides[current].color}`}>
                                    {slides[current].subtitle}
                                </span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-gray-300 max-w-md"
                            >
                                {slides[current].description}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex items-center gap-6"
                            >
                                <span className="text-4xl font-bold text-white">{slides[current].price}</span>
                                <button className={`rounded-full bg-gradient-to-r ${slides[current].color} px-8 py-4 font-bold text-white hover:opacity-90 transition-all hover:scale-105 shadow-lg`}>
                                    Buy Now
                                </button>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                            className="relative flex items-center justify-center"
                        >
                            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
                                <div className={`absolute inset-0 bg-gradient-to-r ${slides[current].color} opacity-30 blur-[60px] rounded-full animate-pulse`} />
                                <Image
                                    src={slides[current].image}
                                    alt={slides[current].title}
                                    fill
                                    className="object-contain drop-shadow-2xl z-10"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute bottom-8 right-8 flex gap-4 z-20">
                <button onClick={prevSlide} className="p-3 rounded-full bg-white/5 hover:bg-white/20 text-white transition-all border border-white/10">
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={nextSlide} className="p-3 rounded-full bg-white/5 hover:bg-white/20 text-white transition-all border border-white/10">
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-2 h-2 rounded-full transition-all ${current === index ? 'w-8 bg-electric-blue' : 'bg-gray-600'}`}
                    />
                ))}
            </div>
        </section>
    );
}
