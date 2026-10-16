import React from 'react';
import { Mountain, Droplets, Sun, Sparkles } from 'lucide-react';

export const HeritageStory: React.FC = () => {
  const pillars = [
    {
      icon: Mountain,
      title: 'Pristine 1,600m Altitude',
      description: 'The Himalayan plateau creates wide diurnal temperature swings, forcing the almond and walnut trees to concentrate protective essential fatty acids and aromatics.'
    },
    {
      icon: Droplets,
      title: 'Glacial Snowmelt Fed',
      description: 'No chemical municipal irrigation. Our orchards drink directly from pristine Pir Panjal snowmelt, imparting a signature sweetness and mineral clarity.'
    },
    {
      icon: Sun,
      title: 'Sun-Cured In Clean Air',
      description: 'Instead of rapid industrial kilns or sulfur bleaching chambers, all Kashmir Arova nuts and saffron threads are cured under mild Himalayan autumn sunshine.'
    },
    {
      icon: Sparkles,
      title: 'Zero Adulteration Seal',
      description: 'Every batch of Pampore Mongra Saffron is tested for Crocin coloring strength (>240 units) and packaged in sealed glass jars right in Srinagar.'
    }
  ];

  return (
    <section id="heritage" className="py-16 sm:py-24 border-t border-neutral-200/70 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-amber-800 dark:text-amber-400 mb-2">
            The Valley Origin
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Rooted in the Soil of Kashmir.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
            Centuries of Kashmiri agrarian mastery distilled into minimal, elegant jars and vacuum packs. We preserve nature exactly as it leaves the orchard.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 flex flex-col justify-between hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-400 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Quote Box */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-neutral-100/70 dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800 text-center max-w-4xl mx-auto">
          <p className="text-lg sm:text-2xl font-serif italic text-neutral-800 dark:text-neutral-200 leading-relaxed">
            "Real Kashmiri saffron does not scream with artificial scarlet dye. It whispers with a deep persistent crimson thread that yields an ethereal honeyed gold."
          </p>
          <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
            Kashmir Arova Quality Manifesto · Srinagar, Kashmir
          </div>
        </div>
      </div>
    </section>
  );
};
