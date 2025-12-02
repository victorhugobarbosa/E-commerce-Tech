import { Search, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

interface NavbarProps {
    cartCount: number;
    onCartClick: () => void;
}

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-cyber-black/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                    Tech<span className="text-electric-blue">Store</span>
                </Link>

                {/* Search Bar (Visual) */}
                <div className="hidden md:flex items-center relative w-1/3">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="w-full rounded-full border border-white/10 bg-cyber-gray px-4 py-2 pl-10 text-sm text-white focus:border-electric-blue focus:outline-none focus:ring-1 focus:ring-electric-blue transition-all"
                    />
                    <Search className="absolute left-3 h-4 w-4 text-gray-400" />
                </div>

                {/* Cart */}
                <button
                    onClick={onCartClick}
                    className="relative rounded-full p-2 hover:bg-white/5 transition-colors group"
                >
                    <ShoppingCart className="h-6 w-6 text-white group-hover:text-electric-blue transition-colors" />
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-electric-blue text-xs font-bold text-white shadow-lg shadow-electric-blue/50">
                        {cartCount}
                    </span>
                </button>
            </div>
        </nav>
    );
}
