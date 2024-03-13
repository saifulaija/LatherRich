import { Types } from 'mongoose';

export type TProductOrder = {
  productId: Types.ObjectId;
  selectedQuantity: number;
  image: string;
  price: number;
};

export type TOrder = {
  buyerName: string;
  buyerEmail: string;
  address: string;
  mobile: number;
  additionalInfo: string;
  totalPrice: number;
  paymentSystem: string;
  orderNumber: string;
  orderDate: string;
  deliveryStatus?: string;
  orderProduct: TProductOrder[];
};
