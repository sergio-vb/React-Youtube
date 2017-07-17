import React from 'react';

/*export default class VideoListItem extends React.Component{

	render(){

		const snippet = this.props.video.snippet;

		const listItemStyle = {
			cursor: "pointer"
		}

		return (
			<li className="list-group-item">
				<div className="video-list media" onClick={this.onListItemClick.bind(this)} style={listItemStyle}>
					<div className="media-left">
						<img src={snippet.thumbnails.default.url} alt="" className="media-object"/>
					</div>
					<div className="media-body">
						<div className="media-heading">{snippet.title}</div>
						<p>{snippet.channelTitle}</p>
					</div>
				</div>
			</li>
		);
	}

	onListItemClick(){
		this.props.setSelectedVideo(this.props.video);
	}
}*/

const VideoListItem = (props) => {

	const snippet = props.video.snippet;

	const listItemStyle = {
		cursor: "pointer"
	}

	return (
		<li className="list-group-item" onClick={() => props.setSelectedVideo(props.video)} style={listItemStyle}>
			<div className="video-list media">
				<div className="media-left">
					<img src={snippet.thumbnails.default.url} alt="" className="media-object"/>
				</div>
				<div className="media-body">
					<div className="media-heading">{snippet.title}</div>
					<p>{snippet.channelTitle}</p>
				</div>
			</div>
		</li>
	);

}

export default VideoListItem;

