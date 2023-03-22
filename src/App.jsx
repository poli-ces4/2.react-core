import VideoItem from './components/VideoItem';

const App = () => {
	const time = 60;
	return (
		<div>
			<VideoItem
				title='Curso de React'
				duration={time}
				date='21-03-2023'
				description='Curso de React del Poli'
			/>
			<VideoItem
				title='Curso de Angular'
				duration={time}
				date='21-03-2023'
				description='Curso de Angular del Poli'
			/>
		</div>
	);
};

export default App;
