export type ProductCategory = 
  | 'all'
  | 'saffron'
  | 'walnuts'
  | 'almonds'
  | 'dates'
  | 'wellness';

export interface WeightOption {
  label: string; // e.g. "1g", "5g", "250g", "500g", "1kg"
  weightInGrams: number;
  priceINR: number;
  originalPriceINR?: number;
  inStock: boolean;
}

export interface HarvestOrigin {
  region: string; // e.g. "Pampore, Kashmir Valley", "Kupwara High Orchards"
  altitude: string; // e.g. "1,600m MSL"
  harvestYear: string; // e.g. "Autumn 2026 Flush"
  giTagCertified: boolean;
  purityGrade: string; // e.g. "Grade A1 Super Mongra (Crocin > 240)"
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: ProductCategory;
  featured: boolean;
  image: string;
  description: string;
  tastingNotes: string[];
  harvestOrigin: HarvestOrigin;
  healthBenefits: string[];
  options: WeightOption[];
  rating: number;
  reviewCount: number;
  shelfLife: string;
  storageInstruction: string;
}

export interface CartItem {
  productId: string;
  productName: string;
  productImage: string;
  selectedOption: WeightOption;
  quantity: number;
}

export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  verifiedPurchase: boolean;
  rating: number;
  date: string;
  productName: string;
  comment: string;
}
