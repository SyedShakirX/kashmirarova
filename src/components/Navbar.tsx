import React, { useState } from 'react';
import { ShoppingBag, Sun, Moon, MessageCircle, Menu, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const { isDarkMode, toggleDarkMode, cartTotalCount, setIsCartOpen } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full transition-colors duration-300 bg-[#FAF9F6]/90 dark:bg-[#0A0A0B]/90 backdrop-blur-xl border-b border-black/[0.06] dark:border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="group flex items-center gap-2 text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 whitespace-nowrap shrink-0 apple-btn"
        >
          <span className="font-serif italic text-amber-700 dark:text-amber-400">Kashmir</span>
          <span className="font-sans font-semibold tracking-wider uppercase text-xs sm:text-sm text-neutral-800 dark:text-neutral-200">
            Arova
          </span>
        </a>

        {/* Zone 2: 4-5 Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs lg:text-sm font-medium text-neutral-600 dark:text-neutral-300">
          <a
            href="#catalog"
            className="hover:text-neutral-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Harvest Catalog
          </a>
          <a
            href="#purity"
            className="hover:text-neutral-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Purity Standards
          </a>
          <a
            href="#heritage"
            className="hover:text-neutral-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Valley Heritage
          </a>
          <a
            href="#concierge"
            className="hover:text-neutral-950 dark:hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            WhatsApp Concierge
          </a>
        </nav>

        {/* Zone 3: Actions (Dark Mode Switch, Shopping Bag, WhatsApp Quick Button) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Aesthetic Apple-style Dark Mode Switch */}
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle display theme"
            className="relative flex items-center p-1.5 sm:px-2.5 sm:py-1.5 text-xs font-medium rounded-full bg-neutral-200/60 hover:bg-neutral-200 dark:bg-neutral-800/80 dark:hover:bg-neutral-700/80 text-neutral-800 dark:text-neutral-200 border border-neutral-300/40 dark:border-neutral-700/60 apple-btn cursor-pointer transition-all"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <div className="flex items-center gap-1.5">
              {isDarkMode ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline text-[11px] font-normal tracking-wide text-neutral-300">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-neutral-700" />
                  <span className="hidden sm:inline text-[11px] font-normal tracking-wide text-neutral-700">Dark</span>
                </>
              )}
            </div>
          </button>

          {/* WhatsApp Direct Header Link */}
          <a
            href={getGeneralWhatsAppUrl('Hi can I get more Info on your products.')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Inquiry"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-emerald-50 hover:bg-emerald-100/90 text-emerald-800 dark:bg-emerald-950/50 dark:hover:bg-emerald-900/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 apple-btn whitespace-nowrap transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          {/* Cart Bag Icon */}
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="View shopping bag"
            className="relative p-2 rounded-full text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/60 transition-colors apple-btn cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartTotalCount > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-4 h-4 px-1 text-[10px] font-semibold text-white bg-neutral-900 dark:bg-amber-500 dark:text-neutral-950 rounded-full tabular-nums">
                {cartTotalCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-full text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/60 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-[#FAF9F6] dark:bg-[#0A0A0B] px-6 py-4 space-y-3">
          <a
            href="#catalog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200"
          >
            Harvest Catalog
          </a>
          <a
            href="#purity"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200"
          >
            Purity Standards
          </a>
          <a
            href="#heritage"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200"
          >
            Valley Heritage
          </a>
          <a
            href="#concierge"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200"
          >
            WhatsApp Concierge
          </a>
          <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
            <span className="text-xs text-neutral-500">Theme</span>
            <button
              onClick={toggleDarkMode}
              className="px-3 py-1 text-xs rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
