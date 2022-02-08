import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setProducts } from '../redux/action/productAction';
import { Product } from './Product';

export const ProductList = () => {


    const products = useSelector((state) => state);
    const dispatch = useDispatch()
    //console.log(products);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((response)=> {
            dispatch(setProducts(response.data))
        })

    },[])
console.log(products);
  return (

<div className="d-flex flex-wrap" >
    <Product />
</div>
  );
};
