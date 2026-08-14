import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button } from '@mui/material'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../../../State/Order/Action'
import { useLocation } from 'react-router-dom'
import { createPayment } from '../../../State/Payment/Action'


const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector(store => store);
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id")
  useEffect (()=>{
    dispatch(getOrderById(orderId));
  },[orderId])

  const handlePayment = () => {
    dispatch(createPayment(orderId));
  }
  return (
    <div >
      <div className='p-5 shadow-lg rounded-md border mb-5'>
        <AddressCard address={order.order?.shippingAddress} />
      </div>

      <div className='lg:grid grid-cols-3 gap-5 relative'>
        <div className='col-span-2 space-y-4'>
          {order.order?.orderItems?.map((item, index) => <CartItem key={index} item={item}/>)}
        </div>

        <div className='sticky top-5 h-fit mt-5 lg:mt-0'>
          <div className='border rounded-md shadow-md p-5'>
            <p className='uppercase font-bold opacity-40 pb-4'>Price Details</p>
            <hr />
            <div className='space-y-3 font-semibold my-5'>
              <div className='flex justify-between text-black'>
                <span>Price ({order.order?.totalItems} item{order.order?.totalItems !== 1 ? 's' : ''})</span>
                <span>₹ {order.order?.totalPrice}</span>
              </div>

              <div className='flex justify-between'>
                <span>Discount</span>
                <span className='text-green-600'>- ₹ {order.order?.discount}</span>
              </div>

              <div className='flex justify-between'>
                <span>Delivery Charge</span>
                <span className='text-green-600'>Free</span>
              </div>

              <hr />

              <div className='flex justify-between font-bold pt-2'>
                <span>Total Amount</span>
                <span className='text-green-600'>₹ {order.order?.discountedPrice}</span>
              </div>
            </div>

            <Button
              variant='contained'
              className='w-full'
              sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
              onClick={handlePayment}>
              Proceed To Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary