import VideoItem from './components/VideoItem';
import VideoList from './components/VideoList';

const App = () => {
	const time = 60;
	return (
		<div>
			<VideoList title='Programacion'>
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
			</VideoList>
		</div>
	);
};

export default App;
