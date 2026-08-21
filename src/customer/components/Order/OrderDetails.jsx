import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { getOrderById } from '../../../State/Order/Action'

const statusToStep = {
  PENDING: 0,
  PLACED: 0,
  CONFIRMED: 1,
  SHIPPED: 2,
  OUT_FOR_DELIVERY: 3,
  DELIVERED: 4,
  CANCELLED: 0,
}

const OrderDetails = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { order } = useSelector(store => store.order);

  useEffect(() => {
    if (orderId) {
      dispatch(getOrderById(orderId));
    }
  }, [orderId]);

  if (!order) {
    return <div className='px-5 lg:px-20 py-10'>Loading order...</div>;
  }

  const activeStep = statusToStep[order.orderStatus] ?? 0;

  return (
    <div className='px-5 lg:px-20'>
        <div>
            <h1 className='text-xl py-7 font-bold'>Delivery Address</h1>
            <AddressCard address={order.shippingAddress} />
        </div>

        <div className='py-20'>
            <OrderTracker activeStep={activeStep}/>
        </div>
        <div className='space-y-5'>
        {order.orderItems?.map((item) => 
        <div key={item.id} className='shadow-md rounded-md border p-5 flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
                <img 
                    className='w-[5rem] h-[5rem] object-cover object-top' 
                    src={item.product?.imageUrl} 
                    alt="" />
                <div className='space-y-2'>
                    <p className='font-semibold'>{item.product?.title}</p>
                    <p className='space-x-5 font-semibold opacity-50 text-xs'>
                        <span>Color: {item.product?.color}</span>
                        <span>Size: {item.size}</span>
                    </p>
                    <p>Seller: {item.product?.brand}</p>
                    <p>₹ {item.discountedPrice ?? item.price}</p>
                </div>
            </div>

            <div className='flex flex-col items-center text-purple-600 cursor-pointer'>
                <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 mr-10'/><span className='space-x-2'>Rate & Review</span>
            </div>
        </div>)}
        </div>
    </div>
  )
}

export default OrderDetails