import { configureStore } from '@reduxjs/toolkit';


import stepReducer from './slices/stepSlice.ts';
import dataReducer from './slices/userDataSlice.ts';
import userListReducer from './slices/userListSlice.ts';




export const store = configureStore({
	reducer:{
		step : stepReducer,
		user : dataReducer,
		usersList : userListReducer
	}
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch