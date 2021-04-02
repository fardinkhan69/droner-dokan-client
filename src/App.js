import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ProductCard from './components/ProductCard/ProductCard';
import Login from './components/Login/Login';
import AddProduct from './components/AddProduct/AddProduct';
import Notfound from './components/Notfound/Notfound'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import ManageProduct from './components/ManageProduct/ManageProduct';

export const UserContext = createContext();


function App() {

   const [loggedInUser,setLoggedInUser]=useState({})
  return (
   <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      
   <Router>
     
     <Switch>
       <Route exact path="/">
          <Home></Home>
       </Route>
       <Route  path="/home">
          <Home></Home>
       </Route>
       <Route exact path="/addproduct">
          <AddProduct></AddProduct>
       </Route>
       <Route exact path="/login">
          <Login></Login>
       </Route>
       <Route exact path="/manageproduct">
          <ManageProduct></ManageProduct>
       </Route>
       <Route path="*">
          <Notfound></Notfound>
       </Route>

       

     </Switch>
      
      
      
    </Router>
    </UserContext.Provider>
  );
}

export default App;
