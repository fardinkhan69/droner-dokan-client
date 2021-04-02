import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ProductCard from '../ProductCard/ProductCard';
import './Home.css'

const Home = () => {

    const [productItems,setProductItems] = useState([]);

    useEffect(()=>{
        fetch(`https://pumpkin-cobbler-55118.herokuapp.com/allProducts`)
        .then(res => res.json())
        .then(data => {
           setProductItems(data)
        })
    },[])

    return (
        
        <div>
            <Header></Header>
            <div className="container home">
               <div className="search-bar col-md-6 mx-auto mt-5">
                    <div className="search-box">
                    <input id="searchField" type="text" class="form-control" placeholder="enter product name here" />
                    <button class="btn btn-success search-btn" onclick="searchApi()">Search</button>
                    </div>
               </div>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-3 g-4 mt-5">

                    {
                        productItems.map(productData => <ProductCard productData={productData}></ProductCard>)
                    }
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Home;