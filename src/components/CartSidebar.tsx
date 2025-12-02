'use client';

import { X, Trash2, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface CartItem {
    id: number;
    name: string;
    price: string;
    image: string;
}

interface CartSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: CartItem[];
    onRemoveItem: (id: number) => void;
}

export default function CartSidebar({ isOpen, onClose, cartItems, onRemoveItem }: CartSidebarProps) {
    const total = cartItems.reduce((acc, item) => {
        const price = parseFloat(item.price.replace('R$ ', '').replace('.', ''));
        return acc + price;
    }, 0);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 z-50 h-full w-full max-w-md border-l border-white/10 bg-cyber-black shadow-2xl sm:w-[400px]"
                    >
                        <div className="flex h-full flex-col">
                            <div className="flex items-center justify-between border-b border-white/10 p-6">
                                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                    <ShoppingBag className="text-electric-blue" />
                                    Your Cart
                                </h2>
                                <button
                                    onClick={onClose}
                                    className="rounded-full p-2 text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6">
                                {cartItems.length === 0 ? (
                                    <div className="flex h-full flex-col items-center justify-center text-center text-gray-500">
                                        <ShoppingBag className="mb-4 h-16 w-16 opacity-20" />
                                        <p className="text-lg">Your cart is empty</p>
                                        <button onClick={onClose} className="mt-4 text-electric-blue hover:underline">
                                            Start Shopping
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        {cartItems.map((item, index) => (
                                            <motion.div
                                                key={`${item.id}-${index}`}
                                                layout
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-3"
                                            >
                                                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-800">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-medium text-white">{item.name}</h3>
                                                    <p className="text-electric-blue font-bold">{item.price}</p>
                                                </div>
                                                <button
                                                    onClick={() => onRemoveItem(item.id)}
                                                    className="rounded-full p-2 text-gray-500 hover:bg-red-500/10 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="border-t border-white/10 bg-cyber-gray p-6">
                                <div className="mb-4 flex items-center justify-between text-lg font-bold text-white">
                                    <span>Total</span>
                                    <span>R$ {total.toLocaleString('pt-BR')}</span>
                                </div>
                                <button
                                    disabled={cartItems.length === 0}
                                    className="w-full rounded-xl bg-electric-blue py-4 font-bold text-white shadow-lg shadow-electric-blue/25 hover:bg-blue-600 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Checkout Now
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
