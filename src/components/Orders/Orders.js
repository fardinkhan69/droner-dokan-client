import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Orders = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const [order,setOrder] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5055/orderedProducts?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
           setOrder(data)
        })
    },[])
    return (
        <div>
            <Header></Header>
            <div className="container">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">weight</th>
                        <th scope="col">order date</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        order.map(order => <tr>
                            <th scope="row">#</th>
                            <td>{order.name}</td>
                            <td>{order.weight}</td>
                            <td>{new Date(order.orderDate).toDateString('dd/MM/yyyy')}</td>
                            <td>$ {order.price}</td>
                            
                        </tr>)
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default Orders;