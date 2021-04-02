import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css'
const ProductCard = ({productData}) => {

    const [orderedProduct,setOrderedProduct] = useState({});

    const handleBuyNow = (id) =>{

        const orderProdcut = {
            name:productData.name,
            price : productData.price,
            weight : productData.weight,
            img: productData.img
        }
        setOrderedProduct(orderProdcut)
        console.log(id)
        console.log(productUrl)
    }
    const productUrl = `/cheackout/${productData._id}`;

    return (
        <div class="col mt-5">
            <div class="card full-card h-100 product_card shadow">
                <img src={productData.img}
                    class="card-img-top bg-light img-thumbnail img-fluid product_img" alt="..." />
                <div class="card-body">
                    <h3 class="card-title">{productData.name}</h3>

                </div>
                <div class="card-footer shoe_card_fotter row">
                    <div class="col-6">
                        <h3 class="orange_highlight">$ {productData.price}</h3>
                    </div>
                    
                    <div class="col-6">
                        <Link to={productUrl}> <button onClick={()=>handleBuyNow(productData._id)} class="btn btn-primary"><i class="fa fa-shopping-cart"></i> Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;