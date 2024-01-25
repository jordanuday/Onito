import { useAppSelector } from '../app/hooks.ts';



import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';


const Header = () => {

	const step = useAppSelector(state => state.step.value);



	return(
		<AppBar position='static' sx={{py : 3 , display : 'flex' , jutifyContent : 'center' , 'alignItems' : 'center' , 'background' : 'transparent' , 'boxShadow' : '0 0 0 0 transparent'}}>
			<Typography variant='h5' color='secondary' sx={{'fontWeight' : 600}}>Step {step}</Typography>
		</AppBar>
	)
}
export default Header;