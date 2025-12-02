'use client';

import { useState, useEffect } from 'react';

export default function FlashSale() {
    const [timeLeft, setTimeLeft] = useState({
        days: 2,
        hours: 14,
        minutes: 35,
        seconds: 59,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                } else if (prev.days > 0) {
                    return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                } else {
                    clearInterval(timer);
                    return prev;
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (value: number) => value.toString().padStart(2, '0');

    return (
        <section className="relative overflow-hidden py-20">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-purple-600 opacity-90"></div>

            <div className="container mx-auto grid gap-12 px-4 md:grid-cols-2 md:items-center relative z-10">
                <div className="space-y-6 text-center md:text-left">
                    <span className="inline-block rounded-full bg-black/20 px-4 py-1 text-sm font-bold text-white backdrop-blur-md border border-white/10">
                        Limited Time Offer
                    </span>
                    <h2 className="text-5xl font-black tracking-tighter text-white md:text-7xl italic">
                        FLASH SALE
                    </h2>
                    <p className="text-2xl font-medium text-white/90">
                        Up to <span className="text-yellow-300 font-bold text-4xl">50% OFF</span> on Gaming Gear
                    </p>

                    <div className="flex justify-center md:justify-start gap-4 pt-4">
                        {[
                            { value: timeLeft.days, label: 'Days' },
                            { value: timeLeft.hours, label: 'Hours' },
                            { value: timeLeft.minutes, label: 'Mins' },
                            { value: timeLeft.seconds, label: 'Secs' },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center rounded-xl bg-black/20 px-4 py-3 backdrop-blur-md border border-white/10 min-w-[80px]">
                                <span className="text-3xl font-bold text-white font-mono">{formatTime(item.value)}</span>
                                <span className="text-xs font-medium text-white/70 uppercase tracking-wider">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center md:justify-end">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <button className="relative rounded-xl bg-white px-12 py-6 font-black text-2xl text-electric-blue hover:bg-gray-50 transition-all transform hover:-translate-y-1 shadow-2xl">
                            SHOP NOW
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
