import { Schema, model } from 'mongoose';
import { TProduct, TProductSizeStok } from './product.interface';

const productSizeSchema = new Schema<TProductSizeStok>({
  size: String,
  stock: Number,
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
    images: {
      type: [String],
      required: true,
    },
    reviews: {
      type: String,
    },
    subCategory: {
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
    sizeStok: [productSizeSchema],
    selectedSize:{
      type:String,
      default:'0'
    }
  },
  

  {
    timestamps: true,
  },
);

export const Product = model<TProduct>('Product', productSchema);
