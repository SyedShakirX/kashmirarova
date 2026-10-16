import React, { useState } from 'react';
import { MessageCircle, ShoppingBag, Eye, Check } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product, ProductCategory, WeightOption } from '../types';
import { useApp } from '../context/AppContext';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

export const Catalog: React.FC = () => {
  const { addToCart, setSelectedProductForModal } = useApp();
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  
  // Track selected weight option for each product card
  const [selectedOptions, setSelectedOptions] = useState<Record<string, WeightOption>>(() => {
    const initial: Record<string, WeightOption> = {};
    PRODUCTS.forEach((p) => {
      initial[p.id] = p.options[0];
    });
    return initial;
  });

  const [addedEffect, setAddedEffect] = useState<Record<string, boolean>>({});

  const categories: { key: ProductCategory; label: string }[] = [
    { key: 'all', label: 'All Harvests' },
    { key: 'saffron', label: 'Mongra Saffron' },
    { key: 'walnuts', label: 'Kashmiri Walnuts' },
    { key: 'almonds', label: 'Mamra Almonds' },
    { key: 'dates', label: 'Medina Dates' },
    { key: 'wellness', label: 'Kahwa & Wellness' }
  ];

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const handleOptionSelect = (productId: string, option: WeightOption) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [productId]: option
    }));
  };

  const handleAddToCart = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const option = selectedOptions[product.id] || product.options[0];
    addToCart(product, option, 1);

    // Micro feedback
    setAddedEffect((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedEffect((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <section id="catalog" className="py-16 sm:py-24 border-t border-neutral-200/70 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-amber-800 dark:text-amber-400 mb-2">
              Authentic Valley Storefront
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              The Harvest Collection.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl">
              100% natural, unadulterated dry fruits, saffron, and Himalayan botanical extracts. Graded and packed in Srinagar.
            </p>
          </div>

          {/* Interactive Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-200/60 dark:bg-neutral-800/70 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap shrink-0 transition-all apple-btn cursor-pointer ${
                    isActive
                      ? 'bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white shadow-xs'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const currentOption = selectedOptions[product.id] || product.options[0];
            const isAdded = addedEffect[product.id];

            return (
              <div
                key={product.id}
                onClick={() => setSelectedProductForModal(product)}
                className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                {/* Product Image Slot */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-950">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Quick View Floating Hint */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/70 text-white backdrop-blur-sm">
                      <Eye className="w-3 h-3" /> Quick View
                    </span>
                  </div>

                  {/* Origin Badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white/90 dark:bg-neutral-950/90 text-neutral-800 dark:text-neutral-200 backdrop-blur-sm border border-black/5 dark:border-white/10">
                      {product.harvestOrigin.region.split(',')[0]}
                    </span>
                  </div>
                </div>

                {/* Product Details Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Quiet Metadata */}
                    <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-2">
                      <span className="capitalize">{product.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-amber-700 dark:text-amber-400 font-medium">★ {product.rating}</span>
                      <span aria-hidden="true">·</span>
                      <span>({product.reviewCount} reviews)</span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white leading-snug group-hover:text-amber-800 dark:group-hover:text-amber-300 transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2">
                      {product.subtitle}
                    </p>

                    {/* Weight / Pack Options Selector */}
                    <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/80">
                      <div className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 mb-2">
                        Select Packaging:
                      </div>
                      <div className="flex flex-wrap gap-1.5" onClick={(e) => e.stopPropagation()}>
                        {product.options.map((opt) => {
                          const isSelected = currentOption.label === opt.label;
                          return (
                            <button
                              key={opt.label}
                              type="button"
                              onClick={() => handleOptionSelect(product.id, opt)}
                              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all apple-btn cursor-pointer ${
                                isSelected
                                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                              }`}
                            >
                              {opt.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Price & Action Row */}
                  <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">Price</div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white tabular-nums">
                          ₹{currentOption.priceINR.toLocaleString('en-IN')}
                        </span>
                        {currentOption.originalPriceINR && (
                          <span className="text-xs text-neutral-400 line-through tabular-nums">
                            ₹{currentOption.originalPriceINR.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                      {/* Direct WhatsApp Order for this specific item */}
                      <a
                        href={getProductWhatsAppUrl(product, currentOption)}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Order this product via WhatsApp"
                        className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 apple-btn cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>

                      {/* Add to Bag */}
                      <button
                        type="button"
                        onClick={(e) => handleAddToCart(product, e)}
                        className={`px-3.5 py-2.5 rounded-xl text-xs font-medium apple-btn flex items-center gap-1.5 cursor-pointer transition-all ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" /> Added
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" /> Bag
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
