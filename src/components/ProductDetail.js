import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setectedProduct } from '../redux/action/productAction';

export const ProductDetail = () => {
    let products = useSelector((state) => state.product);
    const {description,title,image, price,category}=products;
    const {productId} = useParams()
    const dispatch = useDispatch()
    console.log(products);

    useEffect(()=>{

        axios.get(`https://fakestoreapi.com/products/${productId}`)
        .then(response =>{
            dispatch(setectedProduct(response.data))

        })
    },[dispatch,productId])

  return (

<div className="card  mt-3 ms-2" style={{width: '600px'}}>
      <img src={image} className="card-img-top fake" alt="..." />
      <div className="card-body">
        <h4 className="card-title ">{title}</h4>
        <h6 className="card-text">{price}</h6>
        <h6 className="card-text ">{category}</h6>
              </div>
</div>
  );
};
