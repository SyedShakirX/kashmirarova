import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getCartWhatsAppUrl, getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const CartDrawer: React.FC = () => {
  const { isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart, clearCart, cartTotalINR } = useApp();
  const [deliveryNotes, setDeliveryNotes] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isCartOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 1499;
  const shippingFee = cartTotalINR >= FREE_SHIPPING_THRESHOLD || cartTotalINR === 0 ? 0 : 120;
  const finalTotal = cartTotalINR + shippingFee;

  const handleCheckoutViaWhatsApp = () => {
    const url = getCartWhatsAppUrl(cart, finalTotal, deliveryNotes);
    window.open(url, '_blank');
  };

  const handleDirectOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const fakeOrderNum = `KA-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(fakeOrderNum);
    setOrderConfirmed(true);
  };

  const handleReset = () => {
    clearCart();
    setOrderConfirmed(false);
    setIsCartOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-[#121214] shadow-2xl flex flex-col border-l border-neutral-200 dark:border-neutral-800">
          {/* Header */}
          <div className="p-6 border-b border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
              <h2 className="text-base font-bold text-neutral-900 dark:text-white">
                Harvest Bag ({cart.reduce((a, b) => a + b.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          {orderConfirmed ? (
            <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">
                Order Received!
              </h3>
              <p className="text-xs text-neutral-500 mb-2">Reference ID: {orderNumber}</p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-xs mb-6">
                Our Srinagar packing unit is packaging your authentic harvest. Please message us on WhatsApp with your Order ID to get real-time tracking and instant dispatch confirmation.
              </p>

              <a
                href={getGeneralWhatsAppUrl(`Hi, I placed order ${orderNumber} on kashmirarova.com for ₹${finalTotal}. Please confirm dispatch.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 text-white text-xs font-semibold apple-btn flex items-center justify-center gap-2 mb-3 shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </a>

              <button
                onClick={handleReset}
                className="text-xs text-neutral-500 hover:underline cursor-pointer"
              >
                Done / Back to Store
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
              <ShoppingBag className="w-12 h-12 text-neutral-300 dark:text-neutral-700 mb-4" />
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-1">
                Your Bag is Empty
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-xs mb-6">
                Explore our pure Pampore saffron, sweet snow walnut halves, and high-oil Mamra almonds.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-medium apple-btn cursor-pointer"
              >
                Explore Catalog
              </button>
            </div>
          ) : (
            <>
              {/* Free delivery notice bar */}
              <div className="px-6 py-2.5 bg-neutral-50 dark:bg-neutral-900/80 border-b border-neutral-100 dark:border-neutral-800 text-[11px] text-neutral-600 dark:text-neutral-400 flex items-center justify-between">
                <span>Free Valley Express over ₹1,499</span>
                <span className="font-semibold text-amber-700 dark:text-amber-400">
                  {cartTotalINR >= FREE_SHIPPING_THRESHOLD
                    ? '✓ Free Shipping Unlocked'
                    : `Add ₹${(FREE_SHIPPING_THRESHOLD - cartTotalINR).toLocaleString('en-IN')} more`}
                </span>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 divide-y divide-neutral-100 dark:divide-neutral-800">
                {cart.map((item) => (
                  <div key={`${item.productId}-${item.selectedOption.label}`} className="pt-4 first:pt-0 flex gap-4">
                    <img
                      src={item.productImage}
                      alt={item.productName}
                      className="w-16 h-16 rounded-xl object-cover bg-neutral-100 dark:bg-neutral-900 shrink-0"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-semibold text-neutral-900 dark:text-white line-clamp-1">
                            {item.productName}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.productId, item.selectedOption.label)}
                            className="text-neutral-400 hover:text-red-500 transition-colors p-0.5 cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                          {item.selectedOption.label} · ₹{item.selectedOption.priceINR.toLocaleString('en-IN')} each
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Stepper */}
                        <div className="flex items-center border border-neutral-200 dark:border-neutral-700 rounded-md">
                          <button
                            onClick={() =>
                              updateQuantity(item.productId, item.selectedOption.label, item.quantity - 1)
                            }
                            className="px-2 py-0.5 text-xs text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-semibold tabular-nums text-neutral-900 dark:text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.productId, item.selectedOption.label, item.quantity + 1)
                            }
                            className="px-2 py-0.5 text-xs text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
                          >
                            +
                          </button>
                        </div>

                        <div className="text-xs font-bold text-neutral-900 dark:text-white tabular-nums">
                          ₹{(item.selectedOption.priceINR * item.quantity).toLocaleString('en-IN')}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery notes input */}
              <div className="p-4 bg-neutral-50 dark:bg-neutral-900/40 border-t border-neutral-100 dark:border-neutral-800">
                <label className="block text-[11px] font-medium text-neutral-600 dark:text-neutral-400 mb-1">
                  Delivery Address / Special Instructions (Optional):
                </label>
                <input
                  type="text"
                  value={deliveryNotes}
                  onChange={(e) => setDeliveryNotes(e.target.value)}
                  placeholder="e.g. Flat 402, Mumbai, pin 400050 or gift note"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-neutral-900 dark:focus:ring-white"
                />
              </div>

              {/* Subtotal & Action Footer */}
              <div className="p-6 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121214] space-y-3">
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-neutral-500">
                    <span>Subtotal</span>
                    <span className="tabular-nums">₹{cartTotalINR.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-neutral-500">
                    <span>Shipping</span>
                    <span className="tabular-nums">{shippingFee === 0 ? 'Free' : `₹${shippingFee}`}</span>
                  </div>
                  <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 flex justify-between font-bold text-sm text-neutral-900 dark:text-white">
                    <span>Total Amount</span>
                    <span className="tabular-nums">₹{finalTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Primary Button: Checkout via WhatsApp with full bill */}
                <button
                  onClick={handleCheckoutViaWhatsApp}
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold apple-btn flex items-center justify-center gap-2 shadow-xs cursor-pointer transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant Checkout on WhatsApp</span>
                </button>

                {/* Secondary Button: Direct Order generation */}
                <button
                  onClick={handleDirectOrder}
                  className="w-full py-3 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-950 text-xs font-semibold apple-btn flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <span>Place Direct Order (COD / UPI)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[10px] text-neutral-400 text-center">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>100% Genuine GI Kashmir Seal · Zero Artificial Preservatives</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
