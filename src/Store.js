import { configureStore } from "@reduxjs/toolkit";
import ItemsSlicer from "./Slices/ItemsSlicer";
import ItemCountSlicer from "./Slices/ItemCountSlicer";
import TotalAmtSlicer from "./Slices/TotalAmtSlicer";

export const store = configureStore({
  reducer: {
    items : ItemsSlicer,
    count : ItemCountSlicer,
    totalAmt : TotalAmtSlicer
  },
});
