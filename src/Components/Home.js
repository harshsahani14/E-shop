import React from 'react'
import { products } from '../Data'
import Card from './Card'

const Home = () => {
  return (
    <div className=' w-[72%] grid grid-cols-4 gap-x-5  mx-auto mt-[65px] mb-[20px]'>
       {
        products.map( (data)=>
            (
                <Card data={data} key={data.id}></Card>
            )
        )
      }
    </div>
  )
}

export default Home
