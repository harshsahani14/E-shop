import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertion, deletion } from "../Slices/ItemsSlicer";
import { decrement, increment } from "../Slices/ItemCountSlicer";
import { addition, subtraction } from "../Slices/TotalAmtSlicer";

import toast from "react-hot-toast";

const Card = ({ data }) => {
    
  let dispatcher = useDispatch();

  let products = useSelector( (state) => state.items.products)
  // let products = [];

  // for (let i = 0; i < result.length; i++) {
    
  //   products = [...products,result[i].payload];
  // }

  console.log(products)

  
  function clickHandler1() {
    // setAdded(!added);
    dispatcher(insertion(data));
    dispatcher(increment());
    dispatcher(addition(data.price));
    toast.success(<p className=" text-[17.5px]">Item added to cart</p>)
  }

  function clickHandler2() {
    // setAdded(!added);
    dispatcher(deletion(data));
    dispatcher(decrement());
    dispatcher(subtraction(data.price))
    toast.error(<p className=" text-[17.5px] "> Item removed from cart</p>)
  }

  return (
    <div className=" max-w-[300px] h-[370px]  border-solid border-2 rounded-lg  mb-[30px] shadow-xl hover:scale-[105%] duration-150 hover:shadow-2xl flex flex-col items-center py-[12px] gap-y-[16px] pt-[18px]   ">
      <h1 className=" text-green-700 text-[18px] w-[80%] font-[650] mx-auto ">
        {" "}
        {data.title.substring(0, 17)}...
      </h1>

      <p className=" text-[11px] w-[80%] opacity-50 ">
        {" "}
        {data.description.substring(0, 51)}...
      </p>
      <img src={data.image} className=" max-w-[230px]  h-[175px]"></img>

      <div className=" flex flex-row mt-[15px] w-[80%] justify-between items-center">
        <p className=" text-green-600 font-bold text-[17px]">${data.price}</p>

        {  
        products.includes(data) ? (
          <button
            className=" h-[30px] w-[116px] text-[#00172dcb] border-solid border-[2px] rounded-2xl border-[#00172dcb] text-[13px] font-bold hover:bg-[#00172dcb] hover:text-white duration-150 hover:border-[0px] "
            onClick={clickHandler2}
          >
            REMOVE ITEM
          </button>
        ) : (
          <button
            className="h-[30px] w-[115px] text-[#00172dcb] border-solid border-[2px] rounded-2xl border-[#00172dcb] text-[13px] font-bold hover:bg-[#00172dcb] hover:text-white duration-150 hover:border-[0px]"
            onClick={clickHandler1}
          >
            ADD TO CART
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
