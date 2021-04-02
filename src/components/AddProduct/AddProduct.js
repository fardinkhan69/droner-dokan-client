import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './AddProduct.css'
const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const [imgURL,setImgURL] = useState(null);
    const onSubmit = data => {
        const productData ={
            name : data.name,
            weight:data.weight,
            price:data.price,
            img: imgURL
        }
        const url = `https://pumpkin-cobbler-55118.herokuapp.com/addProduct`;

        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => console.log(res))
        console.log(productData)
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key','b4d26ff9fdc7ca22b41ee19941cfbede');
        imageData.append('image',event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImgURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

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
                              <Link style={{color:'#fff',textDecoration:'none'}} to='/manageproduct'><li>Manage Product</li></Link>
                              <Link style={{color:'#fff',textDecoration:'none'}} to='/addproduct'>  <li>Add Product</li></Link>
                                
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-8 p-5 bg-light">
                    <div className="row">
                        <div className="col mt-5">
                            <h3 className="text-left">Add Product</h3>
                        </div>
                    </div>
                    <div className="row mt-5 p-2">
                        <div className="col bg-white p-4">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row ">
                            <div className="col">
                                <label for="product-name" class="form-label">Product Name</label>
                                <input id="product-name" className="form-control p-2 my-2" type="text" placeholder="productName" name="name" ref={register} />
                                <label for="weight" class="form-label">weight of product</label>
                                <input id='weight' className="form-control my-2 p-2" type="text" placeholder="weight" name="weight" ref={register} />
                            </div>
                            <div className="col">
                                <label for="price" class="form-label">Input price</label>
                                <input id="price" className="form-control my-2 p-2" type="text" placeholder="price" name="price" ref={register} />
                                <label for="formFile" class="form-label">Upload product photo</label>
                                
                                <input id="formFile" className="form-control" type="file" placeholder="photo" name="photo" onChange={handleImageUpload} />
                            </div>
                        </div>
                        
                        

                        <input className="btn btn-primary w-50 mt-5" type="submit" />
                        </form>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default AddProduct;