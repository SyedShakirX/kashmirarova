import React, { useState } from 'react';
import { Check, X, Shield, ArrowRight, MessageCircle } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

interface ComparisonData {
  title: string;
  category: string;
  arovaName: string;
  marketName: string;
  metrics: {
    label: string;
    arovaValue: string;
    arovaNote: string;
    marketValue: string;
    marketNote: string;
  }[];
}

const COMPARISONS: ComparisonData[] = [
  {
    title: 'Mamra Almonds',
    category: 'Almonds',
    arovaName: 'Kashmir Arova Mamra',
    marketName: 'Commercial California Almonds',
    metrics: [
      {
        label: 'Natural Oil Content',
        arovaValue: '38% – 42%',
        arovaNote: 'Rich dense natural lipids, high therapeutic value',
        marketValue: '10% – 15%',
        marketNote: 'Drier, industrially pasteurized'
      },
      {
        label: 'Cultivation Method',
        arovaValue: 'Organic Heritage Trees',
        arovaNote: 'Unhybridized cold mountain rootstocks',
        marketValue: 'Mass Monoculture',
        marketNote: 'Heavy irrigation and chemical grafting'
      },
      {
        label: 'Pasteurization & PPO Gas',
        arovaValue: 'Zero Chemical Treatment',
        arovaNote: 'Sun-dried raw living enzymes preserved',
        marketValue: 'Propylene Oxide Treated',
        marketNote: 'Sterilized with gas for extended shelf life'
      },
      {
        label: 'Taste & Texture',
        arovaValue: 'Nutty, buttery, sweet crunch',
        arovaNote: 'No bitterness, skins peel effortlessly',
        marketValue: 'Flat, mildly woody',
        marketNote: 'Requires heavy roasting for flavor'
      }
    ]
  },
  {
    title: 'Mongra Saffron',
    category: 'Saffron',
    arovaName: 'Kashmir Arova Grade A1 Mongra',
    marketName: 'Standard Commercial / Lacha Saffron',
    metrics: [
      {
        label: 'Crocin (Coloring Strength)',
        arovaValue: '240 – 260 Units',
        arovaNote: 'Pure dark crimson tips, no yellow waste',
        marketValue: '110 – 160 Units',
        marketNote: 'Diluted with base style and yellow thread'
      },
      {
        label: 'Safranal (Natural Aroma)',
        arovaValue: 'Extremely High (Grade 1)',
        arovaNote: 'Potent floral hay aroma that lasts months',
        marketValue: 'Subtle or Synthetically Perfumed',
        marketNote: 'Loses aroma within weeks'
      },
      {
        label: 'Purity Water Test',
        arovaValue: '100% Authentic Release',
        arovaNote: 'Thread remains crimson as water turns golden',
        marketValue: 'Fails dye test',
        marketNote: 'Thread turns white; artificial dyes disperse'
      },
      {
        label: 'GI Tag Provenance',
        arovaValue: 'Pampore Certified',
        arovaNote: 'Traceable to specific Kashmiri harvest plots',
        marketValue: 'Unknown Mixed Origins',
        marketNote: 'Often blended with Iranian or adulterated stock'
      }
    ]
  },
  {
    title: 'Snow-White Walnuts',
    category: 'Walnuts',
    arovaName: 'Kashmir Arova Snow Giri & Kagzi',
    marketName: 'Commercial Supermarket Walnuts',
    metrics: [
      {
        label: 'Bleaching & Chemical Wash',
        arovaValue: 'Zero Chlorine / Zero Peroxide',
        arovaNote: 'Naturally golden-white kernels untouched by acids',
        marketValue: 'Acid & Chlorine Bleached',
        marketNote: 'Chemically brightened shells and kernels'
      },
      {
        label: 'Omega-3 (ALA) Freshness',
        arovaValue: 'Cold-Preserved Freshness',
        arovaNote: 'Sweet, buttery kernel with no rancid oils',
        marketValue: 'Aged Warehouse Inventory',
        marketNote: 'Often oxidized with bitter tannic aftertaste'
      },
      {
        label: 'Shell Thickness (Kagzi)',
        arovaValue: 'Soft Paper Shell',
        arovaNote: 'Crackable with gentle palm pressure',
        marketValue: 'Hard Stone Shell',
        marketNote: 'Requires heavy mechanical nutcrackers'
      }
    ]
  }
];

export const PurityComparison: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeComparison = COMPARISONS[selectedIdx];

  return (
    <section id="purity" className="py-16 sm:py-24 bg-neutral-100/60 dark:bg-neutral-900/40 border-t border-neutral-200/70 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-800 dark:text-amber-400 mb-2">
            The Botanical Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Compare The Difference.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-light">
            Commercial markets compromise on oil extraction, chemical bleaching, and synthetic dying. See how Kashmir Arova produces compare.
          </p>

          {/* Interactive Toggle Pills */}
          <div className="mt-6 inline-flex p-1 bg-white dark:bg-neutral-800/80 rounded-xl border border-neutral-200 dark:border-neutral-700/60 shadow-xs">
            {COMPARISONS.map((comp, idx) => (
              <button
                key={comp.title}
                onClick={() => setSelectedIdx(idx)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all apple-btn cursor-pointer ${
                  selectedIdx === idx
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                }`}
              >
                {comp.title}
              </button>
            ))}
          </div>
        </div>

        {/* Apple-style Comparison Matrix */}
        <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-sm overflow-hidden">
          {/* Header row */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-neutral-200 dark:border-neutral-800">
            <div className="md:col-span-4 p-5 sm:p-6 bg-neutral-50/50 dark:bg-neutral-950/40 flex items-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Purity Parameter
              </span>
            </div>
            <div className="md:col-span-4 p-5 sm:p-6 bg-amber-50/40 dark:bg-amber-950/20 border-t md:border-t-0 md:border-l border-neutral-200 dark:border-neutral-800 flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0" />
              <div>
                <div className="text-sm font-bold text-neutral-900 dark:text-white">
                  {activeComparison.arovaName}
                </div>
                <div className="text-[11px] text-amber-800 dark:text-amber-400 font-medium">
                  Direct Valley Harvest
                </div>
              </div>
            </div>
            <div className="md:col-span-4 p-5 sm:p-6 bg-neutral-50/20 dark:bg-neutral-950/20 border-t md:border-t-0 md:border-l border-neutral-200 dark:border-neutral-800 flex items-center">
              <div>
                <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  {activeComparison.marketName}
                </div>
                <div className="text-[11px] text-neutral-400">
                  Mass Market Commercial Standard
                </div>
              </div>
            </div>
          </div>

          {/* Metric rows */}
          <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
            {activeComparison.metrics.map((m, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-12 text-sm">
                <div className="md:col-span-4 p-5 sm:p-6 font-medium text-neutral-800 dark:text-neutral-200 flex items-center">
                  {m.label}
                </div>

                {/* Kashmir Arova Column */}
                <div className="md:col-span-4 p-5 sm:p-6 bg-amber-50/10 dark:bg-amber-950/10 md:border-l border-neutral-200 dark:border-neutral-800 flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900 dark:text-white">
                      {m.arovaValue}
                    </div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                      {m.arovaNote}
                    </div>
                  </div>
                </div>

                {/* Commercial Market Column */}
                <div className="md:col-span-4 p-5 sm:p-6 md:border-l border-neutral-200 dark:border-neutral-800 flex items-start gap-3">
                  <div className="p-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-400 mt-0.5 shrink-0">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-medium text-neutral-500 dark:text-neutral-400">
                      {m.marketValue}
                    </div>
                    <div className="text-xs text-neutral-400 mt-0.5">
                      {m.marketNote}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Callout */}
          <div className="p-6 bg-neutral-50 dark:bg-neutral-950/60 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-neutral-500 dark:text-neutral-400 text-center sm:text-left">
              Need lab test certificates or bulk sample verification? Connect directly with our Srinagar quality team.
            </div>
            <a
              href={getGeneralWhatsAppUrl('Hi can I get more Info on your products.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 text-xs font-medium apple-btn flex items-center gap-2 shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 dark:text-emerald-600" />
              <span>Ask on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
