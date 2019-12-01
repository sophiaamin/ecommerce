import React from "react";
import {Link} from 'react-router-dom';

function ProductCard(props){
    return(
        <div>
            <img className="productImg" src={props.image} alt="product image"></img>
            <h3 key={props.sku}>
            <Link to={`/shop/${props.sku}`}>{props.name}</Link>
            </h3>
            <h6>{props.salePrice}</h6>
        </div>
    );
}

export default ProductCard;