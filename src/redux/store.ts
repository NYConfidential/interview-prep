import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import homePageReducer from "../pages/homePage/state/homePageSlice"
import mainDataPageReducer from "../../src/pages/mainDataPage/state/mainDataSlice"

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		homePage: homePageReducer,
		mainDataPage: mainDataPageReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
