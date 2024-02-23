import { Schema, model } from 'mongoose';
import { TProduct, TProductSizeStok } from './product.interface';

const productSizeSchema = new Schema<TProductSizeStok>({
  size: String,
  stok: Number,
});

const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    reviews: {
      type: String,
    },
    rating: {
      type: Number,
    },
    sellsQuantity: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
    },
   sizeStok : [productSizeSchema],
  },

  {
    timestamps: true,
  },
);

export const Product = model<TProduct>('Product', productSchema);
