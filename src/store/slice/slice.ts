import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Generator {
  password: string[],
  characterLength:number
}

const initialState: Generator = {
    password: [],
    characterLength:0
}

export const generatorSlice = createSlice({
  name: 'generator',
  initialState,
  reducers: {
    setPassword: (state,action) => {
      state.password.push(...action.payload)
    },
    setCharacterLength: (state, action) => {
      state.characterLength =action.payload
    },
    clearPassword: (state) => {
        state.password = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPassword, setCharacterLength, clearPassword } = generatorSlice.actions

export default generatorSlice.reducer