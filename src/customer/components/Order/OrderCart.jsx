import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCart = () => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-lg shadow-black hover:shadow-2xl'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>

            <Grid item size={{xs:6}}>
                <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://wrogn.com/cdn/shop/files/1_389124e1-2d33-4480-a0dc-6118ddbcc13f.webp?v=1774332211&width=360" alt="" />
                    <div className='ml-5 space-y-2'>
                        <p className=''>Men Slim Mid Rise Black Jeans </p>
                        <p className='opacity-50 text-xs font-semibold'>size: L</p>
                        <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                    </div>
                </div>

            </Grid>
            <Grid item size={{xs:2}}>
                <p>₹ 1099</p>
            </Grid>

            <Grid item size={{xs:4}}>
                {true && 
                <div>
                    <p>
                    <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                    <span>
                        Delivered on Aug 15
                    </span>
                    <p>
                    <span className='text-xs'>
                        Your Item has been Delivered
                    </span>
                    </p>
                </p>
                </div>}
                { false && <p>
                    <span>
                      Expected Deliver on Aug 15
                    </span>
                </p>}

            </Grid>

        </Grid>
    </div>
  )
}

export default OrderCart