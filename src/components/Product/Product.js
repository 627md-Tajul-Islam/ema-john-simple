import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
//console.log(props);

return (
<div className="product">
<div>
	<img src={props.product?.img} alt=""/>
</div>
<div>
      <h4 className="product-name">{props.product?.name}</h4>
      <p>By: {props.product?.seller}</p>
      <p>Price:${props.product?.price}</p>
      <p>Only {props.product?.stock} available-Order Now</p>
      <button className="main-button" onClick={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
</div>
</div>
	);
};

export default Product;