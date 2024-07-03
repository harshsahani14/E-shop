import React from 'react'
import { FaTrash } from "react-icons/fa";
import { MdOutlineSort } from "react-icons/md";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { deletion } from '../Slices/ItemsSlicer';
import { useDispatch } from 'react-redux';

import { decrement } from '../Slices/ItemCountSlicer';
import { subtraction } from '../Slices/TotalAmtSlicer';
import toast from 'react-hot-toast';

const MyCart_Card = ({product,index}) => {

    let dispathcer = useDispatch();

    function clickHandler(){

        dispathcer(deletion(product))
        dispathcer(decrement())
        dispathcer(subtraction(product.price))
        toast.error(<p className=" text-[17.5px] "> Item removed from cart</p>)
       
    }

    
    
  return (

    <div className=' flex flex-col  gap-y-5 '>

        {

            index > 0 ? (<div className=' w-[725px] bg-black h-[1.6px] -translate-x-7 -translate-y-4 '></div>) : (<div className=' hidden'></div>)
        
        }    

        <div className=' w-[700px] flex flex-row gap-x-14 '>

            <div>
                <img src={product.image} className=' max-h-[270px] w-[280px]'></img>
            </div>

            <div className=' flex flex-col w-[100%] gap-y-5'> 

                <p className=' text-[21.5px] font-[650] text-gray-700'> {product.title}</p>
                <p className=' text-[17px] text-gray-700'> {product.description.substring(0,81)}...</p>

                <div className=' flex flex-row justify-between w-[100%] jus'>
                    <p className=' font-bold text-[19px] text-green-600'>${product.price}</p>

                    <button className=' flex justify-center items-center  w-[45px] h-[45px] rounded-full bg-red-200 text-red-800 hover:bg-red-400 hover:text-white duration-300' onClick={clickHandler}>
                        <FaTrash className=' size-4' />
                        {/* <div className='flex flex-col '>
                            <div className='w-[0.5rem] h-[0.15rem] bg-red-800 rounded-sm '></div>
                            <div className='w-[0.42rem] h-[0.15rem] bg-red-800 rounded-sm'></div>
                            <div className=' w-[0.26rem] h-[0.15rem] bg-red-800 rounded-sm'></div>
                            
                        </div> */}
                        
                        <MdOutlineSignalCellularAlt className='  scale-x-[-1] rotate-90'/>
                        

                        
                    </button>
                </div>


            </div>
        
        </div>

    </div>
  )
}

export default MyCart_Card
