import { Control , Controller } from 'react-hook-form';



import { useState , useEffect , SyntheticEvent } from 'react';
import axios from 'axios';



import InputLabel from '@mui/material/InputLabel';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';




import { Step2Interface } from '../interfaces/step2_interface.ts';








interface SelectorType  {
	label : 'Country';
	id : 'country';
	control : Control<any>;
}




interface CountryApiInterface{
	name:{
		common : string;
	};
	flag : string;
}



const SearchSelector = ({label , id , control}:SelectorType) => {


	const [options , setOptions] = useState<string[]>([])

	const [loading , setLoading] = useState(false);


	const handleInputChange = (event : SyntheticEvent , value : string , reason:string) => {


		setLoading(true);

		if(value !== ''){

			let url:string='';

			// FETCH THE DATA

			url = `${process.env.REACT_APP_COUNTRY_API}/name/${value}?fields=name,flag`

			axios.get(url)
			.then(res =>{

				let optionsList:string[] = [];

				res.data.map((row:CountryApiInterface) => {

					setLoading(false);

					optionsList.push(`${row.flag} ${row.name.common}`);
				});

				setOptions(optionsList)
			})
			.catch(error => (console.log(error) , setLoading(false)));

		}
	}



	return(
		<Controller
			name='country'
			control={control}
			render={({field}) => {

				const { onChange } = field;

				return(
					<Autocomplete
						loading={loading}
						id='country'
						options={options}
						size='medium'
						fullWidth
						sx={{my:3}}
						onInputChange={handleInputChange}
						onChange={(event : SyntheticEvent , value:string , reason : string) => onChange(value)}
						renderInput={params => <TextField {...params} label='Country' name='country' />}
					/>
				)	
			}}
		/>
	)
}
export default SearchSelector;