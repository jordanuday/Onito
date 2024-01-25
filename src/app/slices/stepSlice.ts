import { createSlice } from '@reduxjs/toolkit';




type Initial = {
	value : number,
	filled : boolean,
	finalDataPresent : boolean
}


const initialValue:Initial = { 'value' : 1 , filled:false , finalDataPresent:false};



export const stepSlice = createSlice({
	'name' : 'step',
	initialState : initialValue,
	reducers:{
		stepForward : state => {state.value += 1},
		stepBackward : state => {state.value -= 1},
		stepFilled : (state , {payload}) => {state.filled = payload},
		stepFinalFilled : (state , {payload}) => {state.filled = payload}
	}
});

export const { stepForward , stepBackward , stepFilled , stepFinalFilled } = stepSlice.actions;
export default stepSlice.reducer