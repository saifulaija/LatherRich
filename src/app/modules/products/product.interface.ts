export type TProductSizeStok = {
  size: string;
  stok: number;
};

export type TProduct = {
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  reviews?: string;
  tag?: string;
  isDeleted: boolean;
  rating?: number;
  sellsQuantity?: number;
  discount?: number;
  sizeStok: TProductSizeStok[];
};
