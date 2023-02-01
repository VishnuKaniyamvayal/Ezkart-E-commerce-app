import React from 'react'
import Image from 'next/image'
import { AiFillStar } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { removeFromBasket } from '../slices/basketSlice'


const CheckoutProduct = ({id,title,image,price, description,category,hasPrime,rating}) => {
  
    const dispatch = useDispatch();

    const removeItemFromBasket = ()=>{
        
        dispatch(removeFromBasket({id}))
    }
  
    return (


    <div className='grid grid-cols-5 bg-white p-4'>
        <Image className='m-3'
            src={image}
            height={200}
            width={200}
            objectFit="contain"
        />  
        <div className='col-span-3 m-4'>
            <p>{title}</p>
            <div className='flex'>{Array(rating).fill().map((_,i)=>
                <AiFillStar className='text-yellow-400'/>
                                                            )}
            </div>
            <p className='my-5 line-clamp-3 text-xs'>{description}</p>
            {hasPrime && <div className='flex items-center space-x-2'>
            <img className='w-12 ' src="https:/links.papareact.com/fdw" alt="" />
            <p className='text-xs text-gray-400'>Free Delivery</p>
            </div>}
            <p className='text-md'>{`$ ${price}`}</p>
        </div>
        <div className='flex flex-col space-y-4 justify-self-end my-auto items-center'>
            
            <button onClick={()=>{removeItemFromBasket()}} className='button'>Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct