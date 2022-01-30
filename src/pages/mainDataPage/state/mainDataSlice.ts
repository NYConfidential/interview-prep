import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../../../redux/store"
import api from "../../../api/api"

export interface IMainDataPageDataItem {
  userId: number
  id: number
  title?: string
  body?: string
}

export type IMainDataPageState = {
  status: string
  data?: IMainDataPageDataItem[]
  resultText: string
}

export const initialState: IMainDataPageState = {
  status: "",
  data: [
    {
      userId: 0,
      id: 0,
      title: "",
      body: "",
    },
  ],
  resultText: "",
}

export const fetchMainDataPageDataAsync = createAsyncThunk("mainDataPage/fetchData", async () => {
  return await api.fetchMainDataPageData()
})

export const mainDataSlice = createSlice({
  name: "mainData",
  initialState,
  reducers: {
    setMainDataPageData: (state, action: PayloadAction<IMainDataPageDataItem[] | undefined>) => {
      state.data = action.payload
    },

    setResultText: (state, action: PayloadAction<string>) => {
      state.resultText = action.payload
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMainDataPageDataAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchMainDataPageDataAsync.fulfilled, (state, action) => {
        state.status = "idle"
        state.data = action.payload
      })
  },
})

export const { setMainDataPageData, setResultText } = mainDataSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectMainDataPageData = (state: RootState) => {
  return state.mainDataPage.data
}

export const selectResultText = (state: RootState) => {
  return state.mainDataPage.resultText
}

export default mainDataSlice.reducer
