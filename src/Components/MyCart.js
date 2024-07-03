import React from 'react'
import { useSelector } from 'react-redux'
import MyCart_Card from './MyCart_Card';
import { Link, useNavigate } from 'react-router-dom';


const MyCart = () => {

  let navigate = useNavigate()
  const products = useSelector( (state) => state.items.products)
  const itemCount = useSelector( (state) => state.count.value);
  const totalAmt = useSelector( (state) => state.totalAmt.totalAmount);

  let amount = Math.round( totalAmt * 100) /100;
  return (

    <div>
      {
        products.length == 0 
        ? 
        (<div className=' flex flex-col gap-5 justify-center items-center mt-[275px]'>
          <p className=' text-[22px] font-bold'>Your Cart is Empty !</p>

            <button onClick= { ()=> navigate("/")}className=' w-[11%] h-[50px] rounded-md font-bold text-white text-[16px] flex justify-center items-center bg-green-600 border-2 border-green-600 hover:bg-white hover:text-green-600 duration-700 uppercase '  >Shop Now</button>
          
        </div>
        ) 
        : 
        
        (<div className=' flex ml-[240px] mt-[60px] w-[75%] gap-[115px]  mb-[45px]'>

          <div className=' flex flex-col w-[58%] gap-14  '>
            {

              
              products.map( (product,index)=>
                
                <MyCart_Card product = {product} key={product.id} index={index}></MyCart_Card>
              )
            }
          </div>
    
          <div className=' flex flex-col mt-[35px] mr-[10px] max-h-[500px]  w-[300px]'>
    
            <p className=' text-green-800 text-[20px] font-semibold'>YOUR CART</p>
            <p className=' text-green-700 text-[43px] font-bold mt-[-10px] '>SUMMARY</p>
    
            <div className=' mt-[10px]'><span className=' font-[650] text-[20px] text-gray-700'>Total Items:</span> <span className='  text-[20px] text-gray-700'>{itemCount}</span></div>
    
            <div className=' mt-[30px]'> <span className=' font-[650] text-[20px] text-gray-700'>Total Amount:</span> <span className=' text-[20px] font-bold'> ${amount}</span></div>
    
            <button className=' w-[100%] h-[50px] rounded-md font-bold text-white text-[19px] flex justify-center items-center bg-green-700 border-2 border-green-700 hover:bg-white hover:text-green-700 duration-700 mt-[20px]'>CheckOut Now</button>
          </div>
    
    
    
         
        </div>)
      }
    </div>
    
  )
}

export default MyCart
