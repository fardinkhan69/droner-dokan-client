import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Cheackout = () => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [order,setOrder] =useState({});

    const {id} = useParams();
    const url = `http://localhost:5055/cheackout/${id}` ;
    // console.log(url)
    // console.log(id)
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setOrder(data)
        })
    },[])

    const handleSubmit = () =>{
        const orderInfo = {
            email : loggedInUser.email,
            personName : loggedInUser.name,
            name: order.name,
            price: order.price,
            weight:order.weight,
            orderDate : new Date()
           
        }

        fetch(`http://localhost:5055/orderdone`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
        .then(res => {
            console.log(res)
        })
        
        console.log(orderInfo)
    }

    return (
        <div>
            <Header></Header>
            <h2 className="text-center">cheack out</h2>
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{order.name}</td>
                            <td>{order.weight}</td>
                            <td>$ {order.price}</td>
                        </tr>
                        
                    </tbody>
                    
                </table>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-6 mt-5">
                            <button onClick={handleSubmit} className="btn btn-primary">Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Cheackout;