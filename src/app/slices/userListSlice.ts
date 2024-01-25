import { createSlice } from '@reduxjs/toolkit';
import { Step1Interface } from '../../interfaces/step1_interface.ts';
import { Step2Interface } from '../../interfaces/step2_interface.ts';




interface UserInterface extends Step1Interface , Step2Interface{};




const DummyData = [
	{
		name : 'vigneshwar reddy',
		dob : '25',
		mob : '+91 9756812345',
		sex : 'Male',
		idType: 'Pan',
		govtId: '6598745869',
		state: "Telangana",
		city: "Hyderabad",
		country : 'India',
		pincode : '509216'
	},
	{
		name : 'Karthik Yadav',
		dob : '30',
		mob : '+91 9756812345',
		'sex' : 'Male',
		idType: 'Aadhar',
		govtId: '659458745869',
		state: "Telangana",
		city: "Hyderabad",
		country : 'India',
		pincode : '500001'
	}
] as UserInterface[];







export const UsersListSlice = createSlice({
	'name' : 'usersList',
	initialState : DummyData,
	reducers : {
		usersListInsert : (state , {payload}) => {state.unshift(payload)}
	}
})

export const { usersListInsert } = UsersListSlice.actions;
export default UsersListSlice.reducer