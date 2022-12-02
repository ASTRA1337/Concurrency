import React from 'react'
import Products from '../components/Products'
import {productData} from '../components/Products/ProductsData'


const ProductsPage = () => {
  return (
    <>
        
        <Products heading="Products" data={productData} />
    </>
  )
}

export default ProductsPage