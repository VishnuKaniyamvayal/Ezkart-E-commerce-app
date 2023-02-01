import React, { useState } from 'react'
import Image from 'next/image'
import {AiFillStar} from "react-icons/ai"
import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice'

let maxRating = 5
let minRating = 1


const Product = ({id,title,price, description,category,image}) => {
    const dispatch = useDispatch();


    const addItemsToBasket = ()=>{
        const Product = {
            id,title,price, description,category,image,hasPrime,rating
        }
        dispatch(addToBasket(Product))
    }
  
    const [rating] = useState(
        Math.floor(Math.random()* (maxRating - minRating + 1) + minRating)

    )
    const[hasPrime] = useState(Math.random() < 0.5)
  
    return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-4'>
        <p className='absolute right-0 italic text-xs pr-3 z-20'>{category}</p>
        <Image className='h-10'
        src={image}
        width={200}
        height={200}
        objectFit="contain"
        />
        <h4 className='my-4'>{title}</h4>
        <div className='flex'>{Array(rating).fill().map((_,i)=>
        <AiFillStar className='text-yellow-400'/>
        )}
        </div>
        <p className='text-xs my-2 line-clamp-2'>{description}</p>
        <p className='mb-4'>${price}</p>
        {hasPrime && <div className='flex items-center space-x-2'>
            <img className='w-12 ' src="https:/links.papareact.com/fdw" alt="" />
            <p className='text-xs text-gray-400'>Free Delivery</p>
            </div>}
        <button onClick={addItemsToBasket} className='mt-auto button'>Add to Basket</button>
    </div>
  )
}

export default Product