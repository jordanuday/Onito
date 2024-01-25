import { useState , useEffect } from 'react';
import { useAppSelector } from '../app/hooks.ts';
import DataTable ,{ TableColumn } from 'react-data-table-component';


import {Step1Interface} from '../interfaces/step1_interface.ts';
import { Step2Interface } from '../interfaces/step2_interface.ts';


interface TableInterface extends Step1Interface , Step2Interface{};




const columns : TableColumn<TableInterface>[] = [
	{
		name : 'Name',
		selector : row => row.name
	},
	{
		name : 'Age',
		selector : row => row.dob
	},
	{
		name : 'Mobile',
		selector : row => row.mob ?? ''
	},
	{
		name : 'Sex',
		selector : row => row.sex
	},
	{
		name : 'Govt Issued ID Type',
		selector : row => row.idType ?? ''
	},
	{
		name : 'Govt Issued Id',
		selector : row => row.govtId ?? ''
	},
	{
		name : 'Address',
		selector : row => row.address ?? ''
	},
	{
		name : 'State',
		selector : row => row.state ?? ''
	},
	{
		name : 'City',
		selector : row => row.city ?? ''
	},
	{
		name : 'Country',
		selector : row => row.country ?? ''
	},
	{
		name : 'Pincode',
		selector : row => row.pincode ?? ''
	}
];





const customStyle = {
	headCells : {
		style:{
			background : 'green',
		}
	},
	cells: {
		style: {
			fontFamily : 'sans-serif',
			fontSize : '16px',
		},
	},
}





const Footer = () => {

	const users = useAppSelector(state => state.usersList);


	return(
		<div>
			<DataTable columns={columns} data={users} highlightOnHover={true} theme={'dark'} customStyles={customStyle} />
		</div>
	)
}
export default Footer;