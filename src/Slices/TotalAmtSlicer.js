import { createSlice } from "@reduxjs/toolkit";

let initialState = {

    totalAmount : 0, 
}

const TotaAmtSlicer = createSlice(

    {
        name : "totalAmt",
        initialState,

        reducers : {

            addition : (state,value)=>{
                let amount = value.payload
                state.totalAmount = state.totalAmount + amount; 
            },
            subtraction : (state,value) =>{
                let amount = value.payload
                state.totalAmount = state.totalAmount - amount;
            }
        }
    }
)

export const {addition,subtraction} = TotaAmtSlicer.actions;
export default TotaAmtSlicer.reducer;