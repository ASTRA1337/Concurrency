import React from 'react'
import {ProductsContainer, Icon, ProductsHeading, ProductsWrapper, ProductCard, 
        ProductImg, ProductInfo, ProuductTitle, ProductDesc, ProductPrice, ProductButton} from './ProductsElements'

const Products = ({heading, data}) => {
  return (
    <>
    <ProductsContainer>
        <Icon to="/">Concurrency</Icon>
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductsWrapper>
            {data.map((product, index) =>{
                return(
                    <ProductCard key={index}>
                        <ProductImg src={product.img} alt={product.alt} />
                        <ProductInfo>
                            <ProuductTitle>{product.name}</ProuductTitle>
                            <ProductDesc>{product.desc}</ProductDesc>
                            <ProductPrice>{product.price}</ProductPrice>
                            <ProductButton>{product.button}</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                )
            })}
        </ProductsWrapper>
    </ProductsContainer>
    </>
  )
}

export default Products