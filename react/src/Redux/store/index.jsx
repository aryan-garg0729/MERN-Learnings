import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/Userslice";

const store = configureStore({   //creating store
    reducer:{
        users:userSlice,
    }
})
export default store;