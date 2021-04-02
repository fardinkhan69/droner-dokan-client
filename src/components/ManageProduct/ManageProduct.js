import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ManageProduct = () => {
    const [productItems, setProductItems] = useState([]);

    useEffect(() => {
        fetch(`https://pumpkin-cobbler-55118.herokuapp.com/allProducts`)
            .then(res => res.json())
            .then(data => {
                setProductItems(data)
            })
    }, []);

    const handleDelete = (event,id) =>{
        console.log(id);
        const deleteProduct = event.target.parentNode.parentNode;
        


        fetch(`https://pumpkin-cobbler-55118.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if(result){
                deleteProduct.style.display="none"
            }
        })
    }
    return (
        <div className="container-fluid addProductPage">
            <Header></Header>
            <div className="row">
                <div className="col-md-4 sidebar-bg">
                    <div className="sidebar">
                        <div className="row">
                            <div className="col">
                                <h2>Drone Er Dokan</h2>
                                <ul className="sidebar-menu">
                                    <li>Manage Product</li>
                                    <Link style={{ color: '#fff', textDecoration: 'none' }} to='/addproduct'>  <li>Add Product</li></Link>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 bg-light">

                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Product Name</th>
                                <th scope="col">Weight</th>
                                <th scope="col">Price</th>
                                <th scope="col">delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productItems.map(productData => <tr>
                                    
                                    <td>{productData.name}</td>
                                    <td>{productData.weight}</td>
                                    <td>$ {productData.price}</td>
                                    <th scope="row"><button className="btn btn-primary" onClick={(event)=>handleDelete(event,productData._id)}>delete</button></th>
                                </tr>)
                            }


                            {/* <tr>
                            <FontAwesomeIcon icon={faTrashAlt} />
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr> */}
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    );
};

export default ManageProduct;