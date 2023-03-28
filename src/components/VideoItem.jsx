import style from './VideoItem.module.css';
const VideoItem = ({ title, duration, date, description }) => {
	return (
		<div className={style.container}>
			<h2>{title}</h2>
			<span>{duration}</span>
			<span>{date}</span>
			<p>{description}</p>
		</div>
	);
};

export default VideoItem;

/*
const VideoItem = props => {
	return (
		<>
			<h2>{props.title}</h2>
			<span>{props.duration}</span>
			<span>{props.date}</span>
			<p>{props.description}</p>
		</>
	);
};

export default VideoItem;

*/
