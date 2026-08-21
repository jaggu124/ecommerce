import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCustomers } from '../../State/Admin/Customer/Action';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Card, CardHeader } from '@mui/material';

const CustomersTable = () => {

  const dispatch = useDispatch();
  const { customers } = useSelector(store => store);

  useEffect(() => {
    dispatch(getCustomers());
  }, [])

  return (
    <div className='p-5'>
      <Card className='mt-2'>
        <CardHeader title="All Customers"></CardHeader>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Avatar</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Mobile</TableCell>
                <TableCell align="left">Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers?.customers?.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="left">
                    <Avatar>{item.firstName?.charAt(0)}</Avatar>
                  </TableCell>
                  <TableCell align='left'>
                    {item.firstName} {item.lastName}
                  </TableCell>
                  <TableCell align="left">{item.email}</TableCell>
                  <TableCell align="left">{item.mobile}</TableCell>
                  <TableCell align="left">{item.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  )
}

export default CustomersTable