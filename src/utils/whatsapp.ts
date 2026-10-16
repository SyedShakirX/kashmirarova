import { CartItem, Product, WeightOption } from '../types';
import { WHATSAPP_PHONE, DEFAULT_WHATSAPP_MESSAGE } from '../data/products';

export function getGeneralWhatsAppUrl(message?: string): string {
  const text = message || DEFAULT_WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

export function getProductWhatsAppUrl(product: Product, option: WeightOption): string {
  const text = `Hi, I am interested in purchasing from kashmirarova.com:\n\n*Product:* ${product.name}\n*Option:* ${option.label}\n*Price:* ₹${option.priceINR.toLocaleString('en-IN')}\n*Origin:* ${product.harvestOrigin.region}\n\nPlease share availability and delivery timeframe.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

export function getCartWhatsAppUrl(cartItems: CartItem[], totalINR: number, customerNotes?: string): string {
  let text = `*New Order Inquiry via kashmirarova.com*\n\nHello Kashmir Arova Concierge,\nI would like to order the following items:\n\n`;

  cartItems.forEach((item, index) => {
    const itemTotal = item.selectedOption.priceINR * item.quantity;
    text += `${index + 1}. *${item.productName}*\n   Size: ${item.selectedOption.label} × ${item.quantity}\n   Subtotal: ₹${itemTotal.toLocaleString('en-IN')}\n\n`;
  });

  text += `*Total Order Value:* ₹${totalINR.toLocaleString('en-IN')}\n\n`;
  
  if (customerNotes && customerNotes.trim().length > 0) {
    text += `*Notes / Delivery Address:* ${customerNotes}\n\n`;
  }

  text += `Please confirm my order and share payment instructions (UPI / Bank Transfer / Cash on Delivery). Thank you!`;

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}
