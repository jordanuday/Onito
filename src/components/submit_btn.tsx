import Button from '@mui/material/Button';



type PropType = {
	label : 'NEXT' | 'SUBMIT'
}




const styleObject = {
	'padding' : '5px 40px 5px 40px' ,
	'mt' : 5 ,
	'fontSize' : '17px' ,
	'borderRadius' : '9999px'
};




const SubmitBtn = ({label}:PropType) => <Button type='submit' variant='contained' color='secondary' sx={styleObject}>{label}</Button>

export default SubmitBtn;