
import { z } from 'zod';

const productSizeSchema = z.object({
  size: z.string(),
  stock: z.number(),
});

 const CreateProductValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is required',
    }),
    category: z.string({
      required_error: 'Category is required',
    }),
    price: z.number({
      required_error: 'price is required',
    }),
    description: z.string({
      required_error: 'Description is required',
    }),
    image: z.string({
      required_error: 'Image is required',
    }),

    reviews: z.string().optional(),
    rating: z.number().optional(),
    sellsQuantity: z.number(),
    discount: z.number().optional(),
    isDeleted: z.boolean(),
    tag: z.string().optional(),
    size: z.array(productSizeSchema),
  }),
});

export const ProductValidations={
CreateProductValidationSchema
}
