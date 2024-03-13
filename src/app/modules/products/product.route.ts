import express from 'express';

import validateRequest from '../../middlewares/validateRequest';

import { ProductValidations } from './product.validation';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post(
  '/create-product',

  validateRequest(ProductValidations.CreateProductValidationSchema),
  ProductControllers.createProduct,
);

router.get(
    '/:category',
  
    ProductControllers.getAllProductsByCategory,
  );

router.get(
  '/get-single-product/:id',

  ProductControllers.getSingleProduct,
);

// router.patch(
//   '/:id',
//   auth(USER_ROLE.superAdmin, USER_ROLE.admin),
//   validateRequest(
//     AcademicFacultyValidation.updateAcademicFacultyValidationSchema,
//   ),
//   AcademicFacultyControllers.updateAcademicFaculty,
// );

router.get(
  '/',

  ProductControllers.getAllProdycts,
);


export const ProductsRoutes = router;
