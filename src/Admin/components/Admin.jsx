import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import InboxIcon from '@mui/icons-material/Inbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dashboard from './Dashboard';
import CreateProductForm from './CreateProductForm';
import ProdutcsTable from './ProdutcsTable';
import OrdersTable from './OrdersTable';
import CustomerTable from './CustomerTable';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AddBoxIcon from '@mui/icons-material/AddBox';

const menu = [
    {name: "Dashboard", path:"/admin", icon:<DashboardIcon/>},
    {name: "Products", path:"/admin/products", icon:<Inventory2Icon/>},
    {name: "Customers", path:"/admin/customers", icon:<PeopleAltIcon/>},
    {name: "Orders", path:"/admin/orders", icon:<ReceiptLongIcon/>},
    {name: "AddProduct", path:"/admin/product/create", icon:<AddBoxIcon/>},
    {name: "", path:""}


]
const Admin = () => {
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const navigate = useNavigate();

    const drawer = (
        <Box
            sx={{
                overflow:"auto",
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-between",
                height: "100%"
            }}
        >
            {/* {isLarge && <Toolbar/>} */}
            <List>
                {menu.map((item,index)=><ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                    <ListItemButton>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText>{item.name}</ListItemText>
                    </ListItemButton>
                </ListItem>)}
            </List>

            <List>
                <ListItem  disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon/>
                        </ListItemIcon>
                        <ListItemText>Account</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>

        </Box>
        
    )
  return (
  
        <div className='relative flex h-[100vh]'>
            <CssBaseline/>
            <div className=' shadow-lg shadow-grey-600 w-[15%] border border-r-gray-300 h-full fixed top-0'>
                {drawer}
            </div>

          <div className='w-[85%] h-full ml-[15%]'>
                <Routes>
                    <Route path='/' element={<Dashboard/>}></Route>
                    <Route path='/product/create' element={<CreateProductForm/>}></Route>
                    <Route path='/products' element={<ProdutcsTable/>}></Route>
                    <Route path='/orders' element={<OrdersTable/>}></Route>
                    <Route path='/customers' element={<CustomerTable/>}></Route>
                </Routes>
            </div>
          
        </div>

        
  
  )
}

export default Admin