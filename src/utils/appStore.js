import { configureStore } from "@reduxjs/toolkit";
import sliceCart from "./sliceCart";

const appStore=configureStore({
    reducer:{
        cart:sliceCart,
    }
})

export default appStore;