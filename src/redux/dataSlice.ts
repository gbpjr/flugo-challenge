import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type DataType = {
  time: string[]
  temperature_2m: number[]
  wind_speed_10m: number[]
}

const initialState: DataType = {
  time: [],
  temperature_2m: [],
  wind_speed_10m: []
}

const tasksSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    updateData: (_state, { payload }: PayloadAction<DataType>) => {
      return payload
    }
  }
})

export const { updateData } = tasksSlice.actions

export default tasksSlice.reducer