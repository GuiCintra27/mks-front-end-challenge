export interface CartModel {
  isActive: boolean;
  products: {
    id: number;
    name: string;
    photo: string;
    price: number;
    quantity: number;
  }[];
}