import { useEffect } from 'react';
import { useAppDispatch , useAppSelector } from '../../app/hooks.ts';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm , SubmitHandler } from 'react-hook-form';



import { Step2Interface } from '../../interfaces/step2_interface.ts';
import { step2Schema } from '../../validations/step2Schema.ts';



import { stepBackward } from '../../app/slices/stepSlice.ts';
import { data2Update } from '../../app/slices/userDataSlice.ts';
import { data1Update } from '../../app/slices/userDataSlice.ts';
import { usersListInsert } from '../../app/slices/userListSlice.ts';





import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';



import SearchSelector from '../search_selector.tsx';
import SubmitBtn from '../submit_btn.tsx';
import BackBtn from '../back_btn.tsx';





const Section2 = () => {

	const dispatch = useAppDispatch();

	const preFilledData = useAppSelector(state => state.user)


	const { control , register , reset , handleSubmit , watch , setValue , formState : { errors } } = useForm<Step2Interface>({resolver : yupResolver(step2Schema)});





	const onSubmit = (data:Step2Interface) => {
		dispatch(usersListInsert({...preFilledData , ...data}));

		// RESET THE FORM
		dispatch(data1Update({
			'name' : '',
			'dob' : '',
			'mob' : undefined,
			'sex' : '',
			'idType' : undefined,
			'govtId' : undefined,
		}))

		dispatch(stepBackward());
	}


	const moveBack = () => {

		dispatch(stepBackward());

		dispatch(data2Update({
			address : watch('address'),
			country : undefined,
			state : watch('state'),
			city : watch('city'),
			pincode : watch('pincode')
		}));
	}




	useEffect(() => {
		setValue('address' , preFilledData.address);
		setValue('country' , undefined);
		setValue('state' , preFilledData.state);
		setValue('city' , preFilledData.city);
		setValue('pincode' , preFilledData.pincode);
	},[])





	return(
		<form className='flex-center form-container' noValidate onSubmit={handleSubmit(onSubmit)}>
			<TextField
				{...register('address')}
				label='Address'
				fullWidth
				error={!!errors.address}
				color='secondary'
				autoComplete='true'
				sx={{'caretColor' : '#c94bfd'}}
				helperText={errors.address?.message}
			/>
			<SearchSelector label='Country' id='country' control={control} />
			<TextField
				disabled={!watch('country')}
				{...register('state')}
				label='State'
				fullWidth
				error={!!errors.state}
				color='secondary'
				autoComplete='true'
				sx={{'caretColor' : '#c94bfd'}}
				helperText={errors.state?.message}
			/>
			<TextField
				disabled={!watch('country')}
				{...register('city')}
				label='City'
				fullWidth
				error={!!errors.city}
				color='secondary'
				autoComplete='true'
				sx={{'caretColor' : '#c94bfd' , mt:3}}
				helperText={errors.city?.message}
			/>
			<TextField
				{...register('pincode')}
				label='Pincode'
				fullWidth
				error={!!errors.pincode}
				color='secondary'
				autoComplete='true'
				sx={{'caretColor' : '#c94bfd' , my : 3}}
				helperText={errors.pincode?.message}
			/>
			<BackBtn backFunc={moveBack} />
			<SubmitBtn label='SUBMIT' />
		</form>
	)
}
export default Section2;