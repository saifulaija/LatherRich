import { Order } from './order.model';

import { TOrder } from './order.interface';

const createOrderIntoDB = async (payload: TOrder) => {
  const result = await Order.create(payload);
  return result;
};

const getAllOrdersFromDB = async () => {
  const result = await Order.find().sort({ createdAt: -1 });

  return result;
};

const getSingleOrderFromDB = async (id: string) => {
  const result = await Order.findById(id);
  return result;
};
const getSingleOrderByOrderNumberFromDB = async (id: string) => {
  const result = await Order.findOne({ orderNumber: id });
  return result;
};

const updateOrderIntoDB = async (id: string, payload: Partial<TOrder>) => {
  const result = await Order.findOneAndUpdate(
    { _id: id }, // Use _id instead of id for MongoDB's unique identifier
    {
      deliveryStatus: payload.deliveryStatus, // Assuming deliveryStatus is the field to be updated
    },
    { new: true },
  );

  return result;
};

export const orderServices = {
  getAllOrdersFromDB,
  getSingleOrderFromDB,
  createOrderIntoDB,
  updateOrderIntoDB,
  getSingleOrderByOrderNumberFromDB,
};
