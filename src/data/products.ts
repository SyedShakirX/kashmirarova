import { Product, CustomerReview } from '../types';
import heroImg from '../assets/images/hero_kashmir_arova_1792167896299.jpg';
import saffronImg from '../assets/images/product_saffron_mongra_1792167896656.jpg';
import walnutImg from '../assets/images/product_kashmiri_walnuts_1792167897118.jpg';
import almondImg from '../assets/images/product_mamra_almonds_1792167897496.jpg';
import datesImg from '../assets/images/product_royal_dates_1792167898062.jpg';

export const HERO_IMAGE = heroImg;
export const WHATSAPP_PHONE = '917006812676';
export const WHATSAPP_DISPLAY_PHONE = '+91 70068 12676';
export const DEFAULT_WHATSAPP_MESSAGE = 'Hi can I get more Info on your products.';

export const PRODUCTS: Product[] = [
  {
    id: 'kashmiri-mongra-saffron',
    name: 'Pampore Mongra Saffron',
    subtitle: 'Grade A1 GI-Tagged Pure Crimson Stigmata',
    category: 'saffron',
    featured: true,
    image: saffronImg,
    description: 'Directly sourced from the sun-drenched plateau of Pampore, known historically as the Saffron Town of Kashmir. Only the top deep-crimson tips (Mongra) are hand-separated without any yellow style residue, yielding an extraordinary Crocin coloring strength exceeding 240+ units.',
    tastingNotes: ['Intense floral honey aroma', 'Warm hay and golden earth', 'Deep persistent amber release'],
    harvestOrigin: {
      region: 'Pampore Karewas, Kashmir',
      altitude: '1,630m MSL',
      harvestYear: 'Autumn 2026 Flush',
      giTagCertified: true,
      purityGrade: 'Grade A1 Super Mongra (Zero Style)'
    },
    healthBenefits: [
      'Natural mood enhancer and cognitive clarity support',
      'Rich in antioxidant crocin, safranal and picrocrocin',
      'Revered Ayurvedic elixir for radiant skin glow'
    ],
    options: [
      { label: '1 Gram', weightInGrams: 1, priceINR: 490, originalPriceINR: 590, inStock: true },
      { label: '2 Grams', weightInGrams: 2, priceINR: 940, originalPriceINR: 1140, inStock: true },
      { label: '5 Grams Collector Jar', weightInGrams: 5, priceINR: 2250, originalPriceINR: 2750, inStock: true },
      { label: '10 Grams Artisanal Tin', weightInGrams: 10, priceINR: 4200, originalPriceINR: 5200, inStock: true }
    ],
    rating: 4.96,
    reviewCount: 142,
    shelfLife: '24 Months when kept airtight in cool dark storage',
    storageInstruction: 'Store in airtight glass container away from direct sunlight and heat.'
  },
  {
    id: 'kashmiri-snow-walnut-giri',
    name: 'Kashmir Snow-White Walnut Halves (Giri)',
    subtitle: 'Cold-Pressed Naturally Sweet Kernel Halves',
    category: 'walnuts',
    featured: true,
    image: walnutImg,
    description: 'Hand-cracked intact half kernels (Akhrot Giri) harvested from old-growth wild walnut trees in Kupwara and Shopian. Unlike commercial bleached walnuts, our kernels are 100% unbleached, buttery-sweet, with zero bitter aftertaste and exceptionally high omega-3 fatty acid concentration.',
    tastingNotes: ['Creamy velvet sweetness', 'Delicate milky crunch', 'Zero bitterness or tannic astringency'],
    harvestOrigin: {
      region: 'Kupwara & Shopian Valley, Kashmir',
      altitude: '1,920m MSL',
      harvestYear: 'Current Harvest',
      giTagCertified: true,
      purityGrade: 'Extra Light Snow-White Grade A Halves'
    },
    healthBenefits: [
      'Highest plant-based Omega-3 (ALA) for neuroprotection',
      'Supports cardiovascular wellness and endothelial health',
      'Natural melatonin source promoting restful sleep'
    ],
    options: [
      { label: '250g Vacuum Pack', weightInGrams: 250, priceINR: 520, originalPriceINR: 620, inStock: true },
      { label: '500g Fresh Seal', weightInGrams: 500, priceINR: 980, originalPriceINR: 1180, inStock: true },
      { label: '1 Kg Family Reserve', weightInGrams: 1000, priceINR: 1890, originalPriceINR: 2290, inStock: true }
    ],
    rating: 4.94,
    reviewCount: 98,
    shelfLife: '12 Months in airtight refrigerated storage',
    storageInstruction: 'Keep chilled in airtight zipper pouch to preserve natural delicate walnut oils.'
  },
  {
    id: 'kashmiri-mamra-almonds',
    name: 'Kashmiri Mamra Almonds (High Oil)',
    subtitle: 'Unpasteurized Heritage Crop with ~42% Natural Oil',
    category: 'almonds',
    featured: true,
    image: almondImg,
    description: 'The undisputed royalty of almonds. Kashmiri Mamra grows without chemical hybridization or artificial irrigation. Characterized by its concave boat shape and furrowed surface, it packs up to 42% natural almond oil—over three times that of standard California almonds.',
    tastingNotes: ['Dense satisfying crunch', 'Rich almond milk sweetness', 'Intense nutty aromatic oils'],
    harvestOrigin: {
      region: 'Pulwama & Badgam Valleys',
      altitude: '1,580m MSL',
      harvestYear: 'Current Autumn Harvest',
      giTagCertified: true,
      purityGrade: 'Pure Kashmiri Mamra (Nonpareil Unhybridized)'
    },
    healthBenefits: [
      'Over 3x higher healthy monounsaturated oil profile',
      'Ayurvedic Medhya Rasayana for memory & intellect enhancement',
      'High natural Vitamin E for cellular defense'
    ],
    options: [
      { label: '250g Pouch', weightInGrams: 250, priceINR: 890, originalPriceINR: 1050, inStock: true },
      { label: '500g Pouch', weightInGrams: 500, priceINR: 1720, originalPriceINR: 2050, inStock: true },
      { label: '1 Kg Heritage Box', weightInGrams: 1000, priceINR: 3350, originalPriceINR: 3950, inStock: true }
    ],
    rating: 4.98,
    reviewCount: 167,
    shelfLife: '12 Months',
    storageInstruction: 'Store in a cool, dry pantry or refrigerator.'
  },
  {
    id: 'royal-medjool-ajwa-dates',
    name: 'Royal Medjool & Medina Ajwa Dates',
    subtitle: 'Hand-Selected Jumbo Succulent Dates',
    category: 'dates',
    featured: true,
    image: datesImg,
    description: 'Curated royal dates with caramel melt-in-mouth texture, translucent amber flesh, and natural syrupy notes. Selected kernel by kernel to ensure zero dry fibers, maximum moisture balance, and sublime clean sweetness.',
    tastingNotes: ['Rich butterscotch and wild caramel', 'Plump tender bite', 'Natural honeyed finish'],
    harvestOrigin: {
      region: 'Medina & Oasis Groves',
      altitude: 'Pristine Oasis Soil',
      harvestYear: 'Prime Current Season',
      giTagCertified: false,
      purityGrade: 'Jumbo Royal Select (Grade A)'
    },
    healthBenefits: [
      'Instant wholesome low-GI sustained energy release',
      'Abundant in dietary fiber and essential minerals (potassium, magnesium)',
      'Natural wholesome replacement for refined sugars'
    ],
    options: [
      { label: '500g Luxury Box', weightInGrams: 500, priceINR: 650, originalPriceINR: 780, inStock: true },
      { label: '1 Kg Royal Box', weightInGrams: 1000, priceINR: 1250, originalPriceINR: 1500, inStock: true }
    ],
    rating: 4.92,
    reviewCount: 84,
    shelfLife: '9 Months',
    storageInstruction: 'Store in refrigerator to maintain cool chewy texture.'
  },
  {
    id: 'kashmiri-kagzi-walnuts-inshell',
    name: 'Kashmiri Kagzi Walnuts (In-Shell)',
    subtitle: 'Paper-Thin Shell Easily Crackable with Bare Hands',
    category: 'walnuts',
    featured: false,
    image: walnutImg,
    description: 'Kagzi literally translates to paper-like. The outer shell is so delicately thin that you can crack two walnuts together gently in the palm of your hand. Because the kernel remains sealed within nature’s own capsule until you crack it, it retains peak freshness and sweet natural walnut oils.',
    tastingNotes: ['Fresh orchard crunch', 'Mild sweet walnut milk', 'Clean earthy finish'],
    harvestOrigin: {
      region: 'Ganderbal & Kupwara Foothills',
      altitude: '1,800m MSL',
      harvestYear: 'Current Harvest',
      giTagCertified: true,
      purityGrade: 'Soft Paper Shell (Kagzi Akhrot)'
    },
    healthBenefits: [
      'Shell-protected antioxidants preserved in virgin state',
      'Heart-protective polyunsaturated fats',
      'High dietary plant sterols'
    ],
    options: [
      { label: '500g Mesh Bag', weightInGrams: 500, priceINR: 480, originalPriceINR: 580, inStock: true },
      { label: '1 Kg Artisanal Jute Bag', weightInGrams: 1000, priceINR: 890, originalPriceINR: 1090, inStock: true },
      { label: '2 Kg Bulk Harvest Sack', weightInGrams: 2000, priceINR: 1690, originalPriceINR: 2090, inStock: true }
    ],
    rating: 4.89,
    reviewCount: 63,
    shelfLife: '18 Months in Shell',
    storageInstruction: 'Store in ventilated cool area away from humidity.'
  },
  {
    id: 'shahi-kashmiri-kahwa',
    name: 'Royal Kashmiri Saffron Kahwa Tea',
    subtitle: 'Whole Green Leaf Infused with Saffron, Green Cardamom & Cinnamon',
    category: 'wellness',
    featured: false,
    image: heroImg,
    description: 'A thousand-year-old Kashmiri royal blend. Prepared with handpicked green tea leaves from the valley foothills, crushed green cardamom pods, cinnamon barks, Kashmiri rose petals, and genuine strands of Pampore Mongra saffron. Best brewed warm with slivered Mamra almonds.',
    tastingNotes: ['Soothing warming spices', 'Subtle saffron perfume', 'Silky gentle green tea tannins'],
    harvestOrigin: {
      region: 'Srinagar Old Heritage Recipes',
      altitude: '1,600m MSL',
      harvestYear: 'Small Batch Artisan Crafted',
      giTagCertified: true,
      purityGrade: 'Pure Whole Leaf Herbal Infusion'
    },
    healthBenefits: [
      'Digestive comfort and thermal warming for body',
      'Immune support with raw whole valley spices',
      'Zero artificial aroma or synthetic colorings'
    ],
    options: [
      { label: '100g Tin (Makes 40 cups)', weightInGrams: 100, priceINR: 420, originalPriceINR: 500, inStock: true },
      { label: '250g Gift Tin', weightInGrams: 250, priceINR: 920, originalPriceINR: 1100, inStock: true }
    ],
    rating: 4.95,
    reviewCount: 112,
    shelfLife: '18 Months',
    storageInstruction: 'Airtight dry container to retain precious essential spice oils.'
  },
  {
    id: 'himalayan-pure-shilajit',
    name: 'Himalayan Organic Resin Shilajit',
    subtitle: 'Purified Gold Grade with >78% Fulvic Acid',
    category: 'wellness',
    featured: false,
    image: saffronImg,
    description: 'Harvested from sheer Himalayan rock faces above 16,000 feet. Purified strictly using traditional Surya Tapi (sun-curing) method over 45 days. Lab certified for over 78% fulvic acid, humic minerals, and zero heavy metal contaminants.',
    tastingNotes: ['Deep mineral bitumen notes', 'Earthy smoky depth', 'Intense natural potency'],
    harvestOrigin: {
      region: 'Higher Altitude Ladakh & Pir Panjal',
      altitude: '4,800m MSL',
      harvestYear: 'Peak Altitude Summer Seep',
      giTagCertified: false,
      purityGrade: 'Gold Grade Soft Resin (Lab Tested)'
    },
    healthBenefits: [
      'Cellular ATP energy and stamina revitalization',
      'Bio-available micronutrients and trace minerals',
      'Supports healthy recovery and vital endurance'
    ],
    options: [
      { label: '20g Glass Jar + Brass Spoon', weightInGrams: 20, priceINR: 1150, originalPriceINR: 1400, inStock: true },
      { label: '50g Master Jar', weightInGrams: 50, priceINR: 2450, originalPriceINR: 2950, inStock: true }
    ],
    rating: 4.97,
    reviewCount: 75,
    shelfLife: '36 Months',
    storageInstruction: 'Store in room temperature. Keep tightly sealed.'
  }
];

export const REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Dr. Tariq M.',
    location: 'Srinagar / New Delhi',
    verifiedPurchase: true,
    rating: 5,
    date: '2 weeks ago',
    productName: 'Pampore Mongra Saffron',
    comment: 'Having grown up in Kashmir, I know real saffron when I smell it. The moment you place a single thread of this Mongra in warm milk, it blooms into a brilliant gold without turning reddish-orange prematurely. True Grade A1 purity.'
  },
  {
    id: 'rev-2',
    author: 'Ananya Deshmukh',
    location: 'Mumbai',
    verifiedPurchase: true,
    rating: 5,
    date: '1 month ago',
    productName: 'Kashmiri Mamra Almonds',
    comment: 'The oil content is extraordinary compared to the dry California almonds in supermarkets. When soaked overnight, the skins peel effortlessly and the nutty sweetness is unbelievable.'
  },
  {
    id: 'rev-3',
    author: 'Vikramaditya Sengupta',
    location: 'Bengaluru',
    verifiedPurchase: true,
    rating: 5,
    date: '3 weeks ago',
    productName: 'Kashmir Snow-White Walnut Halves',
    comment: 'Not a single bitter or rancid piece in the 1kg pack. They arrive crisp, milky-white, and fragrant. The WhatsApp ordering process was smooth and delivery was prompt.'
  }
];
