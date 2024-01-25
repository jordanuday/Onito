import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';



import { UseFormRegister } from 'react-hook-form';

import { Step1Interface } from '../interfaces/step1_interface.ts';







type PropsBase = {
	register : UseFormRegister<Step1Interface>,
	error : string | undefined
}



type SexTypeValues={
	label : 'Sex',
	id : 'sex',
	opt : ('Male' | 'Female')[]
}

type IdTypeValues={
	label : 'Govt Id',
	id : 'idType',
	opt : ('Aadhar' | 'Pan')[]
}


type SelectorPropsSex = PropsBase & SexTypeValues;
type SelectorPropsId = PropsBase & IdTypeValues;



type FinalPropType = SelectorPropsSex | SelectorPropsId





const Selector = ({opt , id , label , register , error} : FinalPropType) => {
	return(
		<FormControl required={label === 'Sex' ? true : false } color='secondary' size='small' error={!!error}>
			<InputLabel
				id={id}
			>
				{label}
			</InputLabel>
			<Select
				id={id}
				label={label}
				sx={{'width' : 100}}
				size='small'
				color='secondary'
				{...register(id)}
			>
				{opt.map((val) => (
					<MenuItem key={val} value={val}>{val}</MenuItem>
				))}
			</Select>
			{error && (
				<FormHelperText>Select {label}</FormHelperText>
			)}
		</FormControl>
	)
}
export default Selector;