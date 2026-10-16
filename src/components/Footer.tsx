import React from 'react';
import { MessageCircle, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { WHATSAPP_DISPLAY_PHONE } from '../data/products';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-[#0A0A0B] text-neutral-600 dark:text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand & Valley Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif italic text-xl font-bold text-amber-800 dark:text-amber-400">
                Kashmir
              </span>
              <span className="font-sans font-semibold tracking-wider uppercase text-sm text-neutral-900 dark:text-white">
                Arova
              </span>
            </div>

            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-sm">
              Artisanal purveyors of authentic Kashmiri Walnuts, Mamra Almonds, Grade A1 Pampore Mongra Saffron, Medina Dates, and Himalayan wellness botanical harvests.
            </p>

            <div className="space-y-1.5 pt-2 text-xs">
              <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 shrink-0" />
                <span>Pampore Karewas & Srinagar, Jammu & Kashmir 190001</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                <Mail className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 shrink-0" />
                <span>concierge@kashmirarova.com · kashmirarova.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Harvest Categories */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-white mb-4">
              Harvest
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#catalog" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Pampore Mongra Saffron
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Snow-White Walnut Halves
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Kashmiri Mamra Almonds
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Kagzi In-Shell Walnuts
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Medina Royal Dates
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Royal Kashmiri Kahwa
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust & Provenance */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-white mb-4">
              Standards
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#purity" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  GI-Tag Verification
                </a>
              </li>
              <li>
                <a href="#purity" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Zero Chemical Bleaching
                </a>
              </li>
              <li>
                <a href="#purity" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Laboratory Test Reports
                </a>
              </li>
              <li>
                <a href="#heritage" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  High-Altitude Soil Ecology
                </a>
              </li>
              <li>
                <a href="#heritage" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Cold-Preserved Freshness
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: WhatsApp Direct */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-white mb-4">
              WhatsApp Desk
            </h4>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3 leading-relaxed">
              Direct line to our Srinagar warehouse for custom orders and inquiries:
            </p>
            <a
              href={getGeneralWhatsAppUrl('Hi can I get more Info on your products.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-medium apple-btn mb-2"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{WHATSAPP_DISPLAY_PHONE}</span>
            </a>
            <div className="text-[11px] text-neutral-400">
              Hours: Mon – Sun, 9:00 AM – 9:00 PM IST
            </div>
          </div>
        </div>

        {/* Bottom Sub-Bar */}
        <div className="pt-8 border-t border-neutral-100 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-1.5">
            <span>© 2026 Kashmir Arova (kashmirarova.com). Handcrafted with pure Himalayan pride.</span>
          </div>

          <div className="flex items-center gap-4 text-neutral-500 dark:text-neutral-400">
            <span>Privacy</span>
            <span>·</span>
            <span>Terms of Harvest</span>
            <span>·</span>
            <span>FSSAI Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
