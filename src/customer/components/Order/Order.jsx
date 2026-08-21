import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderCart from './OrderCart'
import { getUsersOrders } from '../../../State/Order/Action'

const orderStatus = [
    {label: "On the Way", value:"on_the_way"},
    {label: "Delivered", value:"delivered"},
    {label: "Cancelled", value:"cancelled"},
    {label: "Return", value:"return"},
]

const Order = () => {
  const dispatch = useDispatch()
  const { order } = useSelector(store => store)

  useEffect(() => {
    dispatch(getUsersOrders())
  }, [dispatch])

  return (
    <div className='px-5 lg:px-20'>
        <Grid container sx={{justifyContent:"space-between"}}>
            <Grid item size={{xs:2.5}}>
                <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
                    <h1 className='font-bold text-lg'> Filter </h1>
                    <div className='space-y-4 mt-10'>
                        <h1 className='font-semibold '>Order Status</h1>
                        {orderStatus.map((option) => <div key={option.value} className='flex items-center '>
                            <input defaultValue={option.value} type="checkbox" className='h-4 w-4 border-gray-300
                             text-indigo-600 focus:ring-indigo-500'/>
                            <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>{option.label}</label>
                        </div>)}
                    </div>
                </div>
            </Grid>
            <Grid item size={{xs:9}}>
                <div className='space-y-5'>
                    {order.orders?.length
                        ? order.orders.map((o) => <OrderCart key={o.id} order={o} />)
                        : <p className='text-gray-500'>No orders yet.</p>}
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Order