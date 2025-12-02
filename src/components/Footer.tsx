import { Facebook, Twitter, Instagram, CreditCard, Wallet, Bitcoin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-cyber-black py-16 text-gray-400">
            <div className="container mx-auto grid gap-12 px-4 md:grid-cols-4">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold tracking-tighter text-white">
                        Tech<span className="text-electric-blue">Store</span>
                    </h3>
                    <p className="text-sm leading-relaxed">
                        Elevating your digital lifestyle with cutting-edge technology and premium gear.
                    </p>
                </div>

                <div>
                    <h4 className="mb-6 font-bold text-white uppercase tracking-wider text-sm">Support</h4>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:text-electric-blue transition-colors">Help Center</a></li>
                        <li><a href="#" className="hover:text-electric-blue transition-colors">Order Status</a></li>
                        <li><a href="#" className="hover:text-electric-blue transition-colors">Returns & Warranty</a></li>
                        <li><a href="#" className="hover:text-electric-blue transition-colors">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="mb-6 font-bold text-white uppercase tracking-wider text-sm">Connect</h4>
                    <div className="flex gap-4">
                        <a href="#" className="rounded-full bg-white/5 p-2 hover:bg-electric-blue hover:text-white transition-all">
                            <Facebook className="h-5 w-5" />
                        </a>
                        <a href="#" className="rounded-full bg-white/5 p-2 hover:bg-electric-blue hover:text-white transition-all">
                            <Twitter className="h-5 w-5" />
                        </a>
                        <a href="#" className="rounded-full bg-white/5 p-2 hover:bg-electric-blue hover:text-white transition-all">
                            <Instagram className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="mb-6 font-bold text-white uppercase tracking-wider text-sm">Secure Payment</h4>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex h-10 w-16 items-center justify-center rounded bg-white/5 border border-white/10">
                            <CreditCard className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex h-10 w-16 items-center justify-center rounded bg-white/5 border border-white/10">
                            <Wallet className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex h-10 w-16 items-center justify-center rounded bg-white/5 border border-white/10">
                            <Bitcoin className="h-6 w-6 text-white" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 border-t border-white/5 pt-8 text-center text-xs text-gray-600">
                <p>&copy; 2024 TechStore. All rights reserved. Designed for the Future.</p>
            </div>
        </footer>
    );
}
