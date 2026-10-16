import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import { REVIEWS } from '../data/products';

export const Reviews: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-t border-neutral-200/70 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-800 dark:text-amber-400 mb-2">
            Connoisseur Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Tested & Trusted Across Homes.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light">
            Read authentic feedback from families, chefs, and herbal practitioners who insist on genuine Kashmiri origin.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 flex flex-col justify-between shadow-xs"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-light mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Product */}
              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-neutral-900 dark:text-white">
                    {rev.author}
                  </div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    {rev.location}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] font-medium text-amber-800 dark:text-amber-400">
                    {rev.productName}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified Harvest</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
