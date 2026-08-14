import IconButton from '@mui/material/IconButton'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { removeItemToCart, updateItemToCart } from '../../../State/Cart/Action';

const CartItem = ({item}) => {
  const dispatch = useDispatch();
  const handleUpdateCartItem = (num) => {
    const data = {data:{quantity:item.quantity+num}, cartItemId:item?.id};
    dispatch(updateItemToCart(data));
  }
  const handleRemoveCartItem = () => {
    dispatch(removeItemToCart(item.id));
  }
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
          <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
            <img src={item.product.imageUrl} alt="" className='w-full h-full object-cover object-top'/>
          </div> 
          <div className='ml-5 space-y-1'>
            <p className='font-semibold'>{item.product.title}</p>
            <p className='opacity-70'>size: {item.size}, Black</p>
            <p className='opacity-70 mt-2'>{item.product.brand}</p>
            <div className='flex space-x-5 items-center text-gray-900 pt-6'>
              <p className='font-semibold'> ₹ {item.product.discountPrice * item.quantity} </p>
              <p className='opacity-50 line-through'> ₹ {item.price}</p>
              <p className='text-green-500 font-semibold'>{item.product.discountPercent} % Off</p>

            </div>
          </div>
          
        </div>
        <div className='lg:flex items-center lg:space-x-10 pt-4'>
            <div className='flex items-center space-x-2'>
              <IconButton onClick={() => handleUpdateCartItem(-1)}  disabled = {item.quantity <=1}>
                <RemoveCircleIcon />

              </IconButton>
              <span className='py-1 px-7 border rounded-sm'>{item.quantity}</span>
                <IconButton sx={{color:"RGB(145 85 253)"}} onClick={() => handleUpdateCartItem(+1)} >
                <AddCircleIcon />

              </IconButton>
            </div>
            <div>
              <Button sx={{color:"RGB(145 85 253)"}} onClick={handleRemoveCartItem}>Remove</Button>
            </div>

          </div>

    </div>
  )
}

export default CartItem