import React from 'react'
import Product from './Product'

const ProductFeed = ({products}) => {
  return (
    <div>
        {products.map(({id,title,price, description,category,image})=>
        <Product
            key={id}
            title={title}
            price={price}
            description = {description}
            category = {category}
            image = {image}

        />)}
    </div>
  )
}

export default ProductFeed