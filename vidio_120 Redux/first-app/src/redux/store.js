import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./counter/counterSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
      },
})


/* 
template copy :- 
https://redux-toolkit.js.org/tutorials/quick-start
*/