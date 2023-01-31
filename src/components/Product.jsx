import React, { useState } from 'react'
import Image from 'next/image'
import {AiFillStar} from "react-icons/ai"

let maxRating = 5
let minRating = 1


const Product = ({id,title,price, description,category,image}) => {
  
    const [rating] = useState(
        Math.floor(Math.random()* (maxRating - minRating + 1) + minRating)
    )
  
    return (
    <div>
        <p>{category}</p>
        <Image
        src={image}
        width={200}
        height={200}
        objectFit="contain"
        />
        <h4>{title}</h4>
        <div className='flex'>{Array(rating).fill().map((_,i)=>
        <AiFillStar />
        )}
        </div>
        <p>{description}</p>
        
    </div>
  )
}

export default Product