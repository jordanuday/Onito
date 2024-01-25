import { useEffect } from 'react';
import { useAppDispatch , useAppSelector } from '../../app/hooks.ts';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm , SubmitHandler } from 'react-hook-form';


import Selector from '../selector.tsx';
import SubmitBtn from '../submit_btn.tsx';





import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';




import { stepForward , stepFilled } from '../../app/slices/stepSlice.ts';
import { data1Update } from '../../app/slices/userDataSlice.ts';




import { step1Schema } from '../../validations/step1Schema.ts'




import { Step1Interface } from '../../interfaces/step1_interface.ts';












const Section1 = () => {

	const dispatch = useAppDispatch();


	const filled = useAppSelector(state => state.step.filled);
	const preFilledData = useAppSelector(state => state.user);




	const { register , handleSubmit , watch , setValue , formState : { errors } } = useForm<Step1Interface>({resolver : yupResolver(step1Schema)});



	const onSubmit = (data:Step1Interface) => {
		dispatch(stepForward());
		dispatch(data1Update(data));
		dispatch(stepFilled(true))
	}





	useEffect(() => {

		if(filled){

			setValue('name' , preFilledData.name);
			setValue('dob' , preFilledData.dob);
			setValue('mob' , preFilledData.mob);
			setValue('sex' , '');
			setValue('idType' , undefined);
			setValue('govtId' , preFilledData.govtId);
		}

	},[])





	return(
		<form className='flex-center form-container' noValidate onSubmit={handleSubmit(onSubmit)}>
			<TextField
				{...register('name')}
				label='Name'
				error={!!errors.name}
				color='secondary'
				fullWidth
				autoComplete='true'
				sx={{'caretColor' : '#c94bfd'}}
				required={true}
				helperText={errors.name?.message}
			/>
			<TextField
				{...register('dob')}
				label='Date of Birth or Age'
				error={!!errors.dob}
				color='secondary'
				fullWidth
				autoComplete='true'
				sx={{'caretColor' : '#c94bfd' , my : 3}}
				placeholder='DD/MM/YYYY or Age'
				required={true}
				helperText={errors.dob?.message}
			/>
			<TextField
				{...register('mob')}
				error={!!errors.mob}
				label='Mobile No'
				fullWidth
				color='secondary'
				placeholder='+91 0000000000'
				autoComplete='true'
				sx={{'caretColor' : '#c94bfd'}}
				helperText={errors.mob?.message}
			/>
			<TextField
				disabled={!watch('idType')}
				{...register('govtId')}
				error={!!errors.govtId}
				label='Enter Govt Id'
				fullWidth
				color='secondary'
				autoComplete='true'
				sx={{'caretColor' : '#c94bfd' , my : 3}}
				helperText={errors.govtId?.message}
			/>
			<Box display='flex' sx={{py : 2}} gap={2}>
				<Selector opt={['Male' , 'Female']} id='sex' label='Sex' error={errors.sex?.message} register={register} />
				<Selector opt={['Aadhar' , 'Pan']} id='idType' label='Govt Id' error={errors.idType?.message} register={register} />
			</Box>
			<SubmitBtn label='NEXT' />
		</form>
	);
}
export default Section1;