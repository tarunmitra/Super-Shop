import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = (props) => {
    const {name, price, imageURL, _id} = props.product
    return (
        <div>
            <div className="product-div-style shadow m-3">
            <div className="image-div text-center p-2">
                <img src={imageURL} alt="" />
                <h3>{name}</h3>
            </div>
            <hr />
            <div className="d-flex justify-content-around">
                <div>
                    <h3 className="text-warning">${price}</h3>
                </div>
                <div>
                    <Link to={"/product/"+_id}><button className="btn btn-success">Buy Now</button></Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Products;