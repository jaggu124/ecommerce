import { Box, Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createOrder } from '../../../State/Order/Action'
import { getUser } from '../../../State/Auth/Action'

const AddDeliveryForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { auth } = useSelector(store => store);

    useEffect(() => {
        const jwt = localStorage.getItem("jwt");
        if (jwt && !auth.user) {
            dispatch(getUser(jwt));
        }
    }, []);

    const savedAddresses = auth.user?.address || [];

    const handleSubmit = (e) => {
       e.preventDefault();
       const data = new FormData(e.currentTarget);
       const address = {
        firstName : data.get("firstname"),
        lasstName : data.get("lastname"),
        streetAddress : data.get("address"),
        city : data.get("city"),
        state : data.get("state"),
        zipCode : data.get("zip"),
        mobile : data.get("phoneNumber")
       }
       const orderData = {address, navigate};
       dispatch(createOrder(orderData));
    }

    const handleDeliverHere = (address) => {
       const orderData = {address, navigate};
       dispatch(createOrder(orderData));
    }

  return (
    <div>
        <Grid container spacing={4}>
            <Grid size={{ xs: 12, lg: 5 }} className='border rounded-md shadow-md h-[30.5rem] overflow-y-scroll'>
                {savedAddresses.length === 0 && (
                    <p className='p-5 text-gray-500'>No saved addresses yet — add one on the right.</p>
                )}
                {savedAddresses.map((item) => (
                    <div key={item.id} className='p-5 py-7 border-b cursor-pointer'>
                        <AddressCard address={item} />
                        <Button 
                            onClick={() => handleDeliverHere(item)}
                            sx={{mt:2, bgcolor:"RGB(145 85 253)"}} 
                            size='large' 
                            variant='contained'>
                            Deliver Here
                        </Button> 
                    </div>
                ))}
            </Grid>

            <Grid size={{ xs: 12, lg: 7 }}>
                <Box className='border rounded-md shadow-md p-5'>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField required id='firstname' name='firstname' label='First Name' fullWidth autoComplete='given-name' />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField required id='lastname' name='lastname' label='Last Name' fullWidth autoComplete='family-name' />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <TextField required id='address' name='address' label='Address' fullWidth autoComplete='street-address' multiline rows={4} />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField required id='city' name='city' label='City' fullWidth autoComplete='address-level2' />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField required id='state' name='state' label='State/Province/Region' fullWidth autoComplete='address-level1' />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField required id='zip' name='zip' label='Zip / Postal code' fullWidth autoComplete='postal-code' />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <TextField required id='phoneNumber' name='phoneNumber' label='Phone Number' fullWidth autoComplete='tel' />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <Button type='submit' sx={{ bgcolor: "RGB(145 85 253)" }} size='large' variant='contained' fullWidth>
                                    Deliver Here
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Grid>
        </Grid>
    </div>
  )
}

export default AddDeliveryForm