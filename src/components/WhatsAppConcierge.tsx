import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, Phone, Clock, Gift, Truck } from 'lucide-react';
import { WHATSAPP_DISPLAY_PHONE, DEFAULT_WHATSAPP_MESSAGE } from '../data/products';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const WhatsAppConcierge: React.FC = () => {
  const [customMsg, setCustomMsg] = useState(DEFAULT_WHATSAPP_MESSAGE);

  const perks = [
    {
      icon: Gift,
      title: 'Bespoke Gift Boxes',
      desc: 'Handcrafted walnut wood gift boxes for weddings, corporate gifting & Diwali.'
    },
    {
      icon: Truck,
      title: 'Pan-India & Global Express',
      desc: 'Dispatched directly from Srinagar via priority air courier.'
    },
    {
      icon: Clock,
      title: 'Instant Expert Response',
      desc: 'Speak directly with our harvest team for grading questions & purity tests.'
    }
  ];

  return (
    <section id="concierge" className="py-16 sm:py-24 bg-neutral-900 text-white relative overflow-hidden">
      {/* Subtle background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Concierge Info */}
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Direct WhatsApp Concierge Desk
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight text-white mb-6">
              Connect with our harvest desk in Srinagar.
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed mb-8 max-w-xl">
              Have specific questions about walnut grades, saffron batch testing, bulk wholesale orders, or custom festive hampers? We're available on WhatsApp at{' '}
              <span className="font-semibold text-white underline decoration-emerald-500 underline-offset-4">
                {WHATSAPP_DISPLAY_PHONE}
              </span>
              .
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-neutral-800">
              {perks.map((perk, idx) => {
                const Icon = perk.icon;
                return (
                  <div key={idx} className="space-y-1.5">
                    <Icon className="w-5 h-5 text-emerald-400" />
                    <div className="text-xs font-semibold text-white">{perk.title}</div>
                    <div className="text-[11px] text-neutral-400 leading-snug">{perk.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Trigger Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-neutral-950/80 p-6 sm:p-8 border border-neutral-800 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Kashmir Arova Concierge</div>
                  <div className="text-xs text-emerald-400 flex items-center gap-1.5">
                    <Phone className="w-3 h-3" />
                    <span>{WHATSAPP_DISPLAY_PHONE}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-2">
                    Message to send on WhatsApp:
                  </label>
                  <textarea
                    rows={3}
                    value={customMsg}
                    onChange={(e) => setCustomMsg(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                  />
                  <div className="text-[11px] text-neutral-400 mt-1">
                    Pre-filled with your inquiry prompt.
                  </div>
                </div>

                <a
                  href={getGeneralWhatsAppUrl(customMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 text-xs font-bold apple-btn flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message on WhatsApp</span>
                </a>

                <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 text-center pt-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Redirects securely to WhatsApp ({WHATSAPP_DISPLAY_PHONE})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FloatingWhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={getGeneralWhatsAppUrl('Hi can I get more Info on your products.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Inquiry"
        className="group relative flex items-center gap-3 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 apple-btn cursor-pointer border border-emerald-400/30 backdrop-blur-md"
      >
        <MessageCircle className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
        <span className="text-xs font-semibold tracking-wide pr-1">
          WhatsApp Us
        </span>
        
        {/* Subtle hover tooltip preview */}
        <span className="absolute -top-10 right-0 hidden sm:group-hover:block whitespace-nowrap px-3 py-1 bg-black/80 text-white text-[10px] rounded-lg shadow-md pointer-events-none">
          70068 12676 · "Hi can I get more Info..."
        </span>
      </a>
    </div>
  );
};
