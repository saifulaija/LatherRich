import {  z } from 'zod';

const productSizeSchema = z.object({
  size: z.string(),
  stock: z.number(),
});

const imagesSchema = z.array(z.string());

const CreateProductValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is required',
    }),

    model: z.string(),
    material: z.string(),
    category: z.string({
      required_error: 'Category is required',
    }),
    price: z.number({
      required_error: 'price is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    images: imagesSchema,

    reviews: z.string().optional(),
    rating: z.number().optional(),
    sellsQuantity: z.number().optional(),
    discount: z.number().optional(),
    isDeleted: z.boolean().optional(),
    tag: z.string().optional(),
    sizeStok: z.array(productSizeSchema),
    selectedSize:z.string().optional(),
    subCategory:z.string()

  }),
});

export const ProductValidations = {
  CreateProductValidationSchema,
};
