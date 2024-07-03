import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from 'react-redux';


const NavBar = () => {

  let itemCount = useSelector( (state)=> state.count.value);

  return (
    <div className=' w-[100%] h-[80px] bg-slate-900'>

        <div className=' mx-auto w-[72%] flex justify-between items-center'> 

            <Link to={'/'}>
            <div className=' flex flex-row gap-3 mt-[17px] items-center'>
            <FaShoppingBag className=' size-11 text-green-700 '/>
            <p className=' text-green-700 text-2xl font-mono font-bold mt-1'>E-Shop</p>
            </div>
            </Link>

            <div className=' flex gap-5 translate-y-2 relative'>

                <Link to={'/'} className=' text-white font-sans text-[17px] tracking-wide'>Home</Link>
                <Link to={'/mycart'}>  
                

                <FaCartShopping className=' text-white size-6 mt-[1.5px] z-0'>
                
                </FaCartShopping>
                {
                    itemCount !== 0 ? (<div className=' size-5 bg-green-600 rounded-full text-white flex justify-center items-center text-[13px] font-medium pb-[1px] z-10 absolute bottom-[0.65rem] right-[-6px] animate-bounce '>{itemCount}</div>) : (<div className=' '></div>)
                }  
                </Link>

                
            </div>
        </div>
      
    </div>
  )
}

export default NavBar
