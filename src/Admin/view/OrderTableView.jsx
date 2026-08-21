import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { confirmOrder, deleteOrder, deliverOrder, getOrders, shipOrder } from '../../State/Admin/Order/Action';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Avatar, AvatarGroup, Button, Card, CardHeader} from '@mui/material';

const OrderTableView = () => {

  const [anchorEl, setAnchorEl] = React.useState([]);
  const open = Boolean(anchorEl);

  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorEl(newAnchorElArray);
  }
  
  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = null;
    setAnchorEl(newAnchorElArray);
  };

  const dispatch = useDispatch();
  const { adminOrder } = useSelector(store => store);

  useEffect(() => {
    dispatch(getOrders());
  }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deleted])

  const handleShipped = (orderId) => {
    dispatch(shipOrder(orderId));
    handleClose()
  }

  const handleConfirmed = (orderId) => {
    dispatch(confirmOrder(orderId));
    handleClose()
  }

  const handleDelivered = (orderId) => {
    dispatch(deliverOrder(orderId));
    handleClose()
  }

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
    handleClose()
  }

  return (
    <div className='p-10'>
      <Card className='mt-2'>
     <CardHeader title="Recent Orders"></CardHeader>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Id</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {adminOrder.orders?.map((item, index) => (
              <TableRow
                key={item.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">
                  <AvatarGroup max={2} sx={{justifyContent : "start"}}>
                    {item.orderItems.map((orderItem) => <Avatar src= {orderItem.product.imageUrl}>

                    </Avatar>)}
                  </AvatarGroup>
                </TableCell>
                <TableCell align='left'>
                  {item.orderItems.map((orderItem) => <p> {orderItem.product.title} </p>)}
                </TableCell>
                
                <TableCell align="left">{item.id}</TableCell>
                <TableCell align="left">{item.totalPrice}</TableCell>
                <TableCell align="left"><span className={`text-white px-5 py-2 rounded ${item.orderStatus === "CONFIRMED" ? "bg-[#369236]" 
                  : item.orderStatus === "SHIPPED" ? "bg-[#4141FF]": 
                  item.orderStatus === "PLACED" ? "bg-[#02B290]": item.orderStatus === "PENDING" ? "bg-[grey]" : "bg-[#025720]"}`}>{item.orderStatus}</span></TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </TableContainer>
      
      </Card> </div>
  )
}

export default OrderTableView