import { ArrowDown, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { HERO_IMAGE } from '../data/products';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Top Kicker */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[11px] sm:text-xs font-medium tracking-widest uppercase text-amber-800 dark:text-amber-400 mb-4 sm:mb-6">
            <span>Direct from Kashmir Valley</span>
            <span aria-hidden="true" className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Est. Authentic Provenance</span>
            <span aria-hidden="true">·</span>
            <span>kashmirarova.com</span>
          </div>

          {/* Primary Apple-style Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-6 text-balance leading-[1.08]">
            Pure Himalayan harvest.
            <br />
            <span className="font-serif italic font-normal text-neutral-600 dark:text-neutral-300">
              Untouched by compromise.
            </span>
          </h1>

          {/* Clean Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl font-light mb-8 sm:mb-10 text-balance leading-relaxed">
            Grade A1 Pampore Mongra Saffron, sweet unbleached Snow-White Walnuts, high-oil Mamra Almonds, and Medina Royal Dates. Harvested at high altitude, packaged pure.
          </p>

          {/* Tactile Apple-grade Button Row */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="#catalog"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-950 text-sm font-medium apple-btn shadow-sm flex items-center justify-center gap-2"
            >
              <span>Explore The Harvest</span>
              <ArrowDown className="w-4 h-4 text-neutral-400 dark:text-neutral-600" />
            </a>

            {/* Crucial WhatsApp Button with Exact Prompt Message */}
            <a
              href={getGeneralWhatsAppUrl('Hi can I get more Info on your products.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-neutral-50 dark:bg-neutral-900 dark:hover:bg-neutral-800/90 text-neutral-900 dark:text-neutral-100 text-sm font-medium apple-btn border border-neutral-200 dark:border-neutral-800 shadow-sm flex items-center justify-center gap-2.5 group"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-emerald-500/20" />
              <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-transform group-hover:scale-110" />
              <span>WhatsApp Concierge</span>
            </a>
          </div>

          {/* Quiet Trust Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-neutral-500 dark:text-neutral-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300" />
              100% GI-Tagged Kashmiri Origin
            </span>
            <span aria-hidden="true">·</span>
            <span>Non-Bleached & Non-Irradiated</span>
            <span aria-hidden="true">·</span>
            <span>Dispatch Across India & Worldwide</span>
          </div>
        </div>

        {/* Hero Photographic Visual Showcase */}
        <div className="mt-12 sm:mt-16 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800/80 shadow-xl bg-neutral-100 dark:bg-neutral-900">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <img
              src={HERO_IMAGE}
              alt="Pure Kashmiri Saffron jar with Snow Walnuts and Mamra Almonds against majestic Himalayan snow mountains"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
            />
          </div>

          {/* Elegant Floating Scrim & Apple-Style Caption Card */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto max-w-md p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border border-neutral-200/60 dark:border-neutral-800/80 shadow-lg">
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span className="text-xs font-semibold text-neutral-900 dark:text-white tracking-wide uppercase">
                Autumn 2026 Flush Collection
              </span>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Every saffron filament, walnut kernel, and Mamra almond is hand-sorted in Kashmir before sealed dispatch. Direct from grower to your table.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
