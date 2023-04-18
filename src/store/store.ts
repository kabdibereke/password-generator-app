import { configureStore } from '@reduxjs/toolkit'
import generatorReducer from './slice/slice'
export const store = configureStore({
  reducer: {
    counter: generatorReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch