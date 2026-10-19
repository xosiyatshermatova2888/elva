export type Category = 'coffee' | 'croissant' | 'dessert' | 'breakfast' | 'drinks';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  featured?: boolean;
  tag?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderPayload {
  items: { productId: string; name: string; quantity: number; price: number }[];
  total: number;
  createdAt: string;
}

export interface OrderResponse {
  id: string;
  status: 'received';
}
