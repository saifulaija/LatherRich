import { Order } from './order.model';

import { TOrder } from './order.interface';

const createOrderIntoDB = async (payload: TOrder) => {
  console.log('product', payload);
  const result = await Order.create(payload);
  return result;
};

const getAllOrdersFromDB = async () => {
  const result = await Order.find();
  return result;
};

const getSingleOrderFromDB = async (id: string) => {
  console.log(id);

  const result = await Order.findOne({ orderNumber: id });
  return result;
};

// const updateOrderIntoDB = async (id: string, payload: Partial<TOrder>) => {
//   console.log(payload, id);

//   const result = await Order.findOneAndUpdate(
//     { id },
//     {
//       deliveryStatus: payload,
//     },
//     { new: true },
//   );

//   return result;
// };


const updateOrderIntoDB = async (id: string, payload: Partial<TOrder>) => {
  console.log(payload, id);

  const result = await Order.findOneAndUpdate(
    { _id: id }, // Use _id instead of id for MongoDB's unique identifier
    {
      deliveryStatus: payload.deliveryStatus, // Assuming deliveryStatus is the field to be updated
    },
    { new: true }
  );

  return result;
};

export const orderServices = {
  getAllOrdersFromDB,
  getSingleOrderFromDB,
  createOrderIntoDB,
  updateOrderIntoDB,
};
