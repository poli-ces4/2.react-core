import style from './VideoList.module.css';
const VideoList = ({ title, children }) => (
	<div className={style.container}>
		<h1>{title}</h1>
		{children || 'No hay videos'}
	</div>
);

export default VideoList;
