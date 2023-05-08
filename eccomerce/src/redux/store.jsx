import { configureStore } from '@reduxjs/toolkit'
import bazarRedcuer from './bazarSlice'


// https://redux-toolkit.js.org/tutorials/quick-start
export const store = configureStore({
  reducer: {
    bazar: bazarRedcuer
  },
})