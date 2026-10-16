import test from 'node:test';
import assert from 'node:assert/strict';
import { getGeneralWhatsAppUrl, getProductWhatsAppUrl, getCartWhatsAppUrl } from './whatsapp.ts';
import { Product, WeightOption, CartItem } from '../types.ts';

test('getGeneralWhatsAppUrl generates correct URL and message', () => {
  const url = getGeneralWhatsAppUrl('Hi can I get more Info on your products.');
  assert.equal(
    url,
    'https://wa.me/917006812676?text=Hi%20can%20I%20get%20more%20Info%20on%20your%20products.'
  );
});

test('getProductWhatsAppUrl includes product name and price', () => {
  const mockProduct: Product = {
    id: 'test-saffron',
    name: 'Pampore Mongra Saffron',
    subtitle: 'Grade A1',
    category: 'saffron',
    featured: true,
    image: '/test.jpg',
    description: 'Test desc',
    tastingNotes: ['floral'],
    harvestOrigin: {
      region: 'Pampore, Kashmir',
      altitude: '1600m',
      harvestYear: '2026',
      giTagCertified: true,
      purityGrade: 'A1'
    },
    healthBenefits: ['Antioxidant'],
    options: [{ label: '1g', weightInGrams: 1, priceINR: 490, inStock: true }],
    rating: 5,
    reviewCount: 10,
    shelfLife: '24M',
    storageInstruction: 'Cool'
  };

  const option: WeightOption = mockProduct.options[0];
  const url = getProductWhatsAppUrl(mockProduct, option);

  assert.ok(url.includes('917006812676'));
  assert.ok(url.includes('Pampore%20Mongra%20Saffron'));
  assert.ok(url.includes('490'));
});

test('getCartWhatsAppUrl formats multiple items correctly', () => {
  const cartItems: CartItem[] = [
    {
      productId: 'walnuts',
      productName: 'Kashmir Snow-White Walnut Halves',
      productImage: '/walnut.jpg',
      selectedOption: { label: '500g', weightInGrams: 500, priceINR: 980, inStock: true },
      quantity: 2
    }
  ];

  const url = getCartWhatsAppUrl(cartItems, 1960, 'Srinagar Express');
  assert.ok(url.includes('917006812676'));
  assert.ok(url.includes('Kashmir%20Snow-White%20Walnut%20Halves'));
  assert.ok(url.includes('1%2C960'));
});
