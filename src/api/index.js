


import { configureStore  } from "@reduxjs/toolkit"


import visitorSlice from './tokenReducer.js'
import profileSlice from './profile.js'
import categorySlice from './category.js'


const store = configureStore({
    reducer:{
        token: visitorSlice,
        profile: profileSlice,
        category:categorySlice
    }
})


export default store