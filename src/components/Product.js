import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
export const Product = () => {

    const products = useSelector((state) => state.allProducts.products);
    //const {id,title}=products[0]
    const renderList = products.map((product) =>{
        const {id,title,image, price,category}=product;
        return (
            <div key={id}>
                <Link to={`/product/${id}`}>
                <div className="card  mt-3 ms-2" style={{width: '200px'}}>
      <img src={image} className="card-img-top fake" alt="..." />
      <div className="card-body">
        <h4 className="card-title ">{title}</h4>
        <h6 className="card-text">{price}</h6>
        <h6 className="card-text ">{category}</h6>
              </div>
    </div></Link>
            </div>
        );
    })

  return ( <>
{renderList}
      </>);
};
