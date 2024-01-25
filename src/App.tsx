import './App.css';


import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



import Header from './components/header.tsx';
import MainSection from './components/form/main_section.tsx';
import Footer from './components/footer.tsx';




const App = () => {
	return(
		<>
			<Container className='flex-center parentContainer' disableGutters={true} sx={{'display' : 'flex'}}>
				<Box className='flex-center subContainer'>
					<Header />
					<MainSection />
				</Box>
			</Container>
			<Footer />
		</>
	)
}
export default App;