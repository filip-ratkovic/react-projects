import React from 'react'
import data from '../../data'
import ProductCard from '../../components/productCard/ProductCard';
import './products.css'


const Products = () => {
  const products = data;
  return (
    <div className='product-main'>
      {products.map((product)=> {
       return (
          <ProductCard product={product} key = {product.id}/>
        )
      })}
    </div>
  )
}

export default Products