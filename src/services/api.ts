import { products } from '../data/products';
import type { OrderPayload, OrderResponse, Product } from '../types';

/**
 * API qatlami. Hozircha local ma'lumot va demo javob qaytaradi.
 * Backend tayyor bo'lganda `.env` ichida VITE_API_URL ni belgilang —
 * shunda funksiyalar avtomatik REST API'ga murojaat qiladi.
 */
const API_URL = import.meta.env.VITE_API_URL as string | undefined;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...init,
  });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json() as Promise<T>;
}

export async function getProducts(): Promise<Product[]> {
  if (API_URL) return request<Product[]>('/products');
  return products;
}

export async function placeOrder(payload: OrderPayload): Promise<OrderResponse> {
  if (API_URL) {
    return request<OrderResponse>('/orders', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }
  await delay(900);
  return { id: `ELVA-${Date.now().toString().slice(-6)}`, status: 'received' };
}
