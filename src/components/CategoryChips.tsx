interface CategoryChipsProps {
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
}

export default function CategoryChips({ selectedCategory, onSelectCategory }: CategoryChipsProps) {
    const categories = ['All', 'Laptops', 'Smartphones', 'Audio', 'Wearables', 'Gaming', 'Accessories'];

    return (
        <section className="py-10 border-b border-white/5 bg-cyber-black">
            <div className="container mx-auto px-4">
                <h2 className="mb-6 text-xl font-semibold text-white">Browse by Category</h2>
                <div className="flex gap-4 overflow-x-auto p-4 scrollbar-hide">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => onSelectCategory(category)}
                            className={`rounded-full border px-6 py-3 text-sm font-medium transition-all whitespace-nowrap ${selectedCategory === category
                                ? 'bg-electric-blue border-electric-blue text-white'
                                : 'bg-cyber-gray border-white/10 text-gray-400 hover:border-electric-blue hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
