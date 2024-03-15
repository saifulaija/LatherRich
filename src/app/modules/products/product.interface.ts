export type TProductSizeStok = {
  size: string;
  stock: number;
};

export type TProduct = {
  name: string;
  category: string;
  price: number;
  description: string;
  images: string[];
  model:string;
  material:string;
  reviews?: string;
  tag?: string;
  isDeleted?: boolean;
  rating?: number;
  sellsQuantity?: number;
  subCategory:string;
  discount?: number;
  sizeStok: TProductSizeStok[];
  selectedSize?:string
};


