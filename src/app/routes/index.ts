import { Router } from 'express';

import { AuthRoutes } from '../modules/Auth/auth.route';

import { UserRoutes } from '../modules/User/user.route';
import { ProductsRoutes } from '../modules/products/product.route';
import { orderRoute } from '../modules/order/order.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },

  {
    path: '/auth',
    route: AuthRoutes,
  },

  {
    path: '/products',
    route: ProductsRoutes,
  },
  {
    path: '/order',
    route: orderRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
