import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCart = ({ order }) => {
  const navigate = useNavigate();
  const firstItem = order?.orderItems?.[0];
  const isDelivered = order?.orderStatus === "DELIVERED";

  return (
    <div onClick={()=>navigate(`/account/order/${order.id}`)} className='p-5 shadow-lg shadow-black hover:shadow-2xl cursor-pointer'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>

            <Grid item size={{xs:6}}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src={firstItem?.product?.imageUrl} alt="" />
                    <div className='ml-5 space-y-2'>
                        <p>{firstItem?.product?.title}</p>
                        <p className='opacity-50 text-xs font-semibold'>size: {firstItem?.size}</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: {firstItem?.product?.color}</p>
                    </div>
                </div>
            </Grid>
            <Grid item size={{xs:2}}>
                <p>₹ {order?.totalPrice}</p>
            </Grid>

            <Grid item size={{xs:4}}>
                {isDelivered ? (
                    <div>
                        <p>
                            <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                            <span>Delivered</span>
                        </p>
                        <p>
                            <span className='text-xs'>Your Item has been Delivered</span>
                        </p>
                    </div>
                ) : (
                    <p>
                        <span className='text-xs capitalize'>{order?.orderStatus?.toLowerCase()}</span>
                    </p>
                )}
            </Grid>

        </Grid>
    </div>
  )
}

export default OrderCart