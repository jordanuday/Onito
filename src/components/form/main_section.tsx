import { useAppSelector } from '../../app/hooks.ts';



import Section1 from './section1.tsx';
import Section2 from './section2.tsx';




const MainSection = () => {


	const count = useAppSelector(state => state.step.value);

	return(
		<>
			{count === 1 && (
				<Section1 />
			)}
			{count === 2 && (
				<Section2 />
			)}
		</>
	)
}

export default MainSection;