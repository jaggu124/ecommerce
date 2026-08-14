import React from 'react'

const AddressCard = ({address}) => {
   if (!address) return null;

   return (
    <div>
        <p className='font-semibold'>{address.firstName} {address.lasstName}</p>
        <p className='text-gray-600'>{address.streetAddress}</p>
        <p className='text-gray-600'>{address.city} {address.state} {address.zipCode}</p>
        <p className='font-semibold mt-2'>Phone Number</p>
        <p className='text-gray-600'>{address.mobile}</p>
    </div>
  )
}

export default AddressCard