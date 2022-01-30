import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../../redux/store"
//import api from '../../../api/api'
import { reduce } from "lodash"

export interface ITask {
  id: string
  taskName: string
  type: string
  defaultInput?: any
}

export type IHomePageState = {
  status: string
  tasks: ITask[]
}

const initialState: IHomePageState = {
  status: "",
  tasks: [],
}

export const fetchHomePageTasksAsync = createAsyncThunk("homePage/fetchTasks", async () => {
  return await new Promise((resolve) => {
    resolve("foo")
  }).then((value) => value)
})

export const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setHomePageTasks: (state: IHomePageState, action: PayloadAction<ITask[]>) => {
      state.tasks = action.payload
    },
  },
})

export const { setHomePageTasks } = homePageSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectHomePageTasks = (state: RootState): Record<string, ITask> => {
  const result = reduce(
    state.homePage.tasks,
    (acc: Record<string, ITask>, element: ITask) => {
      acc[element.id] = element
      return acc
    },
    {},
  )

  return result
}

export default homePageSlice.reducer
