/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Catalog } from './components/Catalog';
import { PurityComparison } from './components/PurityComparison';
import { HeritageStory } from './components/HeritageStory';
import { Reviews } from './components/Reviews';
import { WhatsAppConcierge, FloatingWhatsAppButton } from './components/WhatsAppConcierge';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-[#FAF9F6] text-neutral-900 dark:bg-[#0A0A0B] dark:text-neutral-100 transition-colors duration-300 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-900 dark:selection:text-amber-200">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero />
          <Catalog />
          <PurityComparison />
          <HeritageStory />
          <Reviews />
          <WhatsAppConcierge />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Overlays & Drawers */}
        <ProductDetailModal />
        <CartDrawer />

        {/* Floating WhatsApp Quick Action Button */}
        <FloatingWhatsAppButton />
      </div>
    </AppProvider>
  );
}
