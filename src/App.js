import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation';
import Homepage from './customer/pages/Homepage/Homepage';
import Footer from './customer/components/Footer/Footer';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import CheckOut from './customer/components/CheckOut/CheckOut';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';
import AdminRouters from './Routers/AdminRouters';

function App() {
  return (
    <div className="">

      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
        <Route path='/admin/*' element={<AdminRouters/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
