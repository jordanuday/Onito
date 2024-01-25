import Button from '@mui/material/Button';


type BackProp = {
	backFunc : () => void
}



const styleObject = {
	'padding' : '5px 49px 5px 49px' ,
	'mt' : 5 ,
	'fontSize' : '17px' ,
	'borderRadius' : '9999px',
	'background' : 'black',
	'&:hover' : {
		'background' : '#3c3a3c'
	}
};



const BackBtn = ({backFunc}:BackProp) => <Button variant='contained' sx={styleObject} onClick={backFunc}>BACK</Button>

export default BackBtn;