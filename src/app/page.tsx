'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CategoryChips from '@/components/CategoryChips';
import ProductGrid from '@/components/ProductGrid';
import FlashSale from '@/components/FlashSale';
import Footer from '@/components/Footer';
import CartSidebar from '@/components/CartSidebar';

// Mock Data
const allProducts = [
  { id: 1, name: 'Legion Pro X', price: 'R$ 8.999', rating: 5, category: 'Laptops', image: '/E-commerce-Tech/images/laptop.png' },
  { id: 2, name: 'NC Pro Max', price: 'R$ 1.499', rating: 5, category: 'Audio', image: '/E-commerce-Tech/images/headphones.png' },
  { id: 3, name: 'Series X Ultra', price: 'R$ 2.299', rating: 5, category: 'Wearables', image: '/E-commerce-Tech/images/watch.png' },
  { id: 4, name: 'Cyber Mouse', price: 'R$ 499', rating: 4, category: 'Gaming', image: '/E-commerce-Tech/images/laptop.png' }, // Placeholder until rate limit resets
  { id: 5, name: 'Mech Keyboard', price: 'R$ 899', rating: 5, category: 'Gaming', image: '/E-commerce-Tech/images/keyboard.png' },
  { id: 6, name: 'VR Vision Pro', price: 'R$ 3.499', rating: 5, category: 'Gaming', image: '/E-commerce-Tech/images/vr_headset.png' },
  { id: 7, name: 'Galaxy Tab S9', price: 'R$ 4.999', rating: 4, category: 'Laptops', image: '/E-commerce-Tech/images/laptop_v2.png' },
  { id: 8, name: 'Studio Buds', price: 'R$ 999', rating: 4, category: 'Audio', image: '/E-commerce-Tech/images/headphones.png' },
  { id: 9, name: 'FitBand Pro', price: 'R$ 399', rating: 4, category: 'Wearables', image: '/E-commerce-Tech/images/watch_v2.png' },
];

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleAddToCart = (product: any) => {
    setCartItems([...cartItems, product]);
    setIsCartOpen(true);
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-cyber-black text-white selection:bg-electric-blue selection:text-white">
      <Navbar
        cartCount={cartItems.length}
        onCartClick={() => setIsCartOpen(true)}
      />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
      />

      <Hero />

      <CategoryChips
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <ProductGrid
        products={filteredProducts}
        onAddToCart={handleAddToCart}
      />

      <FlashSale />
      <Footer />
    </main>
  );
}
