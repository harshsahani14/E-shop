import { createSlice } from "@reduxjs/toolkit";

let initialState = {

    value : 0
}

const ItemCountSlicer = createSlice(
    {
        name:"count",
        initialState,
        reducers :
        {

            increment : (state) =>{

                state.value = state.value + 1;
            },
            decrement : (state) =>{
                state.value = state.value - 1;
            }
        }
    }
);

export const {increment,decrement} = ItemCountSlicer.actions;
export default ItemCountSlicer.reducer;