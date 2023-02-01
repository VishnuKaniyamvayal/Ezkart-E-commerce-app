import React from 'react'
import Header from "../components/Header"
import Image from "next/image"
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'


const Basket = () => {
    const items = useSelector(selectItems)

    

  return (
    <div className='bg-gray-100'>
        <Header/>
        <main className='lg:flex-row max-w-screen-2xl bg-gray-100'>
            {/* left */}
            <div className='flex-grow m-5 shadow-sm'>
                <Image
                src='http://links.papareact.com/ikj'
                width={1050}
                height={200}
                objectFit="contain"
                />
                <div className='flex flex-col p-5 bg-white space-y-10'>
                    <h1 className='text-3xl border-b pb-4'>{items.length === 0 ? "Your shopping cart is Empty":"Your Shopping Basket"}</h1>
                </div>         
            </div> 
            
            {items.map((item,i)=><CheckoutProduct
                                        key={i}
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        description={item.description}
                                        category={item.category}
                                        hasPrime={item.hasPrime}
                                        rating={item.rating}
            
            />)}
            {/* right */}
            
            <div >

            </div>
        </main>
    </div>
  )
}

export default Basket