import httpStatus from 'http-status';

import sendResponse from '../../utils/sendResponse';


import { orderServices } from './order.service';
import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';


const createOrder= catchAsync(async (req, res) => {

  const result = await orderServices.createOrderIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'order created successfully',
    data: result,
  });
});

const getAllOrders: RequestHandler = catchAsync(async (req, res) => {
   
  const result = await orderServices.getAllOrdersFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'order are retrieved successfully',
    data: result,
  });
});

const getSingleOrder = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await orderServices.getSingleOrderFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single order is retrieved successfully',
    data: result,
  });
});


export const orderController = {
getAllOrders,getSingleOrder,createOrder
};
