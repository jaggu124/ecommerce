import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const deliveryAddress = {
  firstName: 'raam',
  lastName: 'Shah',
  address: 'mumbai, gokuldham market, new shivam building, 400001',
  city: 'mumbai',
  state: 'mahrastra',
  pincode: '400001',
  phoneNumber: '9038429384'
}

const OrderDetails = () => {
  return (
    <div className='px-5 lg:px-20'>
        <div>
            <h1 className='text-xl py-7 font-bold'>Delivery Address</h1>
            <AddressCard address={deliveryAddress} />
        </div>

        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>
        <div className='space-y-5'>
        {[1,1,1,1].map((item) => 
        <div className='shadow-md rounded-md border p-5 flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
                <img 
                    className='w-[5rem] h-[5rem] object-cover object-top' 
                    src="https://wrogn.com/cdn/shop/files/1_389124e1-2d33-4480-a0dc-6118ddbcc13f.webp?v=1774332211&width=360" 
                    alt="" />
                <div className='space-y-2'>
                    <p className='font-semibold'>Men Slim Mid Rise Black Jeans</p>
                    <p className='space-x-5 font-semibold opacity-50 text-xs'>
                        <span>Color: Black</span>
                        <span>Size: L</span>
                    </p>
                    <p>Seller: Pepe Jeans</p>
                    <p>₹ 1099</p>
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