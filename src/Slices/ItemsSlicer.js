import { createSlice } from "@reduxjs/toolkit";

let initialState = {

    products : []

}

const ItemsSlicer = createSlice({

    name:'items',
    initialState,

    reducers : {

        insertion : (state,item) => {
            let actualProduct = item.payload;
            state.products = [...state.products,actualProduct]
        },
        deletion : (state,item) =>{
            let actualProduct = item.payload
            state.products = state.products.filter( (product) => product.id != actualProduct.id)
        }

    }

}
)

export const { insertion , deletion } = ItemsSlicer.actions;
export default ItemsSlicer.reducer;
