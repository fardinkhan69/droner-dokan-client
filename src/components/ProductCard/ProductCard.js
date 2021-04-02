import React from 'react';
import './ProductCard.css'
const ProductCard = ({productData}) => {
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
                        <button class="btn btn-primary"><i class="fa fa-shopping-cart"></i> Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;