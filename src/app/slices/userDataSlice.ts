import { createSlice , PayloadAction } from '@reduxjs/toolkit';


import { Step1Interface } from '../../interfaces/step1_interface.ts';
import { Step2Interface } from '../../interfaces/step2_interface.ts';




interface UserInterface extends Step1Interface , Step2Interface {};



const initialUserValue:UserInterface = {
	'name' : '',
	'dob' : '',
	'mob' : undefined,
	'sex' : '',
	'idType' : undefined,
	'govtId' : undefined,
	'address' : undefined,
	'state' : undefined,
	'city' : undefined,
	'country' : undefined,
	'pincode' : undefined
}



export const userSlice = createSlice({
	'name' : 'data',
	initialState : initialUserValue,
	reducers : {
		data1Update : (state , {payload}) => {
			state.name = payload.name;
			state.dob = payload.dob;
			state.mob = payload.mob ?? state.mob;
			state.sex = payload.sex;
			state.idType = payload.idType ?? state.idType;
			state.govtId= payload.govtId ?? state.govtId;
		},
		data2Update : (state , { payload }) => {
			state.address = payload.address ?? state.address;
			state.country = payload.country ?? state.country;
			state.state = payload.state ?? state.state;
			state.city = payload.city ?? state.city;
			state.pincode = payload.pincode ?? state.pincode;
		}
	}
});

export const { data1Update , data2Update } = userSlice.actions;
export default userSlice.reducer