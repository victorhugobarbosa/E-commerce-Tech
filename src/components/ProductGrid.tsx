'use client';

import { Star, ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Product {
    id: number;
    name: string;
    price: string;
    rating: number;
    image: string;
    category: string;
}

interface ProductGridProps {
    products: Product[];
    onAddToCart: (product: Product) => void;
}

export default function ProductGrid({ products, onAddToCart }: ProductGridProps) {
    return (
        <section className="py-20 bg-cyber-black min-h-screen">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold text-white">Trending Now</h2>
                    <span className="text-gray-400 text-sm">{products.length} products found</span>
                </div>

                <motion.div
                    layout
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                    <AnimatePresence>
                        {products.map((product) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                key={product.id}
                                whileHover={{ y: -10 }}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-cyber-gray p-4 transition-all hover:border-electric-blue/50 hover:shadow-lg hover:shadow-electric-blue/10"
                            >
                                <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-gray-800 to-black mb-4 flex items-center justify-center relative overflow-hidden group-hover:bg-gray-800 transition-colors">
                                    <div className="absolute inset-0 bg-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1 text-yellow-500">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-3 w-3 ${i < product.rating ? 'fill-current' : 'text-gray-600 fill-gray-600'}`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{product.category}</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white group-hover:text-electric-blue transition-colors truncate">
                                        {product.name}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-white">{product.price}</span>
                                        <button
                                            onClick={() => onAddToCart(product)}
                                            className="rounded-full bg-white/5 p-3 text-white hover:bg-electric-blue transition-colors group-hover:bg-electric-blue active:scale-95"
                                        >
                                            <ShoppingCart className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {products.length === 0 && (
                    <div className="py-20 text-center text-gray-500">
                        <p className="text-xl">No products found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
