
import { Order } from './order.model';


import { TOrder } from './order.interface';



const createOrderIntoDB = async (payload: TOrder) => {
    console.log('product', payload)
    const result = await Order.create(payload);
    return result;
  };

const getAllOrdersFromDB = async () => {
  const result = await Order.find();
  return result;
};


const getSingleOrderFromDB = async (id: string) => {
 
  const result = await Order.findOne({orderNumber:id});
  return result;
};

export const orderServices = {
 
  getAllOrdersFromDB,
  getSingleOrderFromDB,
  createOrderIntoDB
};
