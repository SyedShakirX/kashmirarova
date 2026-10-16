import React, { useState, useEffect } from 'react';
import { X, Check, MessageCircle, ShoppingBag, MapPin, Award, ShieldCheck, HeartPulse } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { WeightOption } from '../types';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

export const ProductDetailModal: React.FC = () => {
  const { selectedProductForModal, setSelectedProductForModal, addToCart } = useApp();
  const [selectedOption, setSelectedOption] = useState<WeightOption | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [addedEffect, setAddedEffect] = useState(false);

  useEffect(() => {
    if (selectedProductForModal && selectedProductForModal.options.length > 0) {
      setSelectedOption(selectedProductForModal.options[0]);
      setQuantity(1);
      setAddedEffect(false);
    }
  }, [selectedProductForModal]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProductForModal(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setSelectedProductForModal]);

  if (!selectedProductForModal || !selectedOption) return null;

  const product = selectedProductForModal;

  const handleAddToCart = () => {
    addToCart(product, selectedOption, quantity);
    setAddedEffect(true);
    setTimeout(() => {
      setAddedEffect(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity"
        onClick={() => setSelectedProductForModal(null)}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#121214] rounded-3xl shadow-2xl border border-neutral-200/80 dark:border-neutral-800 z-10 flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={() => setSelectedProductForModal(null)}
          aria-label="Close product view"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-colors apple-btn cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Column: Product Photo & Provenance Tag */}
        <div className="md:w-1/2 relative bg-neutral-100 dark:bg-neutral-950 min-h-[300px] md:min-h-full">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border border-neutral-200/50 dark:border-neutral-800/80">
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-800 dark:text-neutral-200">
              <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>{product.harvestOrigin.region}</span>
              <span className="text-neutral-400">·</span>
              <span className="text-neutral-500 font-normal">{product.harvestOrigin.altitude}</span>
            </div>
            <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1">
              Harvest: {product.harvestOrigin.harvestYear}
            </div>
          </div>
        </div>

        {/* Right Column: Specification & Purchase Engine */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Header info */}
            <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-2">
              <span className="capitalize">{product.category}</span>
              <span aria-hidden="true">·</span>
              {product.harvestOrigin.giTagCertified && (
                <span className="text-emerald-700 dark:text-emerald-400 flex items-center gap-1 font-medium">
                  <Award className="w-3 h-3" /> GI Tag Certified
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
              {product.name}
            </h3>
            <p className="mt-1 text-xs text-amber-800 dark:text-amber-400 font-medium">
              {product.harvestOrigin.purityGrade}
            </p>

            <p className="mt-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Tasting Notes */}
            <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
                Aroma & Tasting Profile
              </div>
              <div className="flex flex-wrap gap-1.5">
                {product.tastingNotes.map((note) => (
                  <span
                    key={note}
                    className="px-2.5 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Health Benefits */}
            <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2 flex items-center gap-1.5">
                <HeartPulse className="w-3.5 h-3.5 text-amber-600" /> Botanical Benefits
              </div>
              <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-300 font-light">
                {product.healthBenefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-0.5">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Packaging options */}
            <div className="mt-5 pt-4 border-t border-neutral-100 dark:border-neutral-800">
              <div className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Select Packaging Size:
              </div>
              <div className="flex flex-wrap gap-2">
                {product.options.map((opt) => {
                  const isSelected = selectedOption.label === opt.label;
                  return (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => setSelectedOption(opt)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all apple-btn cursor-pointer ${
                        isSelected
                          ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm'
                          : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mt-4 flex items-center gap-3">
              <span className="text-xs text-neutral-500">Quantity:</span>
              <div className="flex items-center border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-2.5 py-1 text-sm text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  -
                </button>
                <span className="px-3 py-1 text-xs font-semibold tabular-nums text-neutral-900 dark:text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-2.5 py-1 text-sm text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Buy & WhatsApp Section */}
          <div className="mt-8 pt-5 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex items-baseline justify-between mb-4">
              <div>
                <span className="text-xs text-neutral-500">Total Price:</span>
                <div className="text-2xl font-bold text-neutral-900 dark:text-white tabular-nums">
                  ₹{(selectedOption.priceINR * quantity).toLocaleString('en-IN')}
                </div>
              </div>
              <div className="text-right text-[11px] text-neutral-400">
                <span>Free Valley Express delivery over ₹1,499</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              {/* WhatsApp direct order */}
              <a
                href={getProductWhatsAppUrl(product, selectedOption)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium apple-btn flex items-center justify-center gap-2 shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order via WhatsApp</span>
              </a>

              {/* Add to bag */}
              <button
                type="button"
                onClick={handleAddToCart}
                className={`flex-1 py-3 px-4 rounded-xl text-xs font-medium apple-btn flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  addedEffect
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900'
                    : 'bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900'
                }`}
              >
                {addedEffect ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" /> Added to Bag
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" /> Add to Bag
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
