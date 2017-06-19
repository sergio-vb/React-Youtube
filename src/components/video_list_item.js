import React from 'react';

export default class VideoListItem extends React.Component{

	render(){

		console.log("Video List Item props:", this.props.video);

		const snippet = this.props.video.snippet;

		return (
			<li className="list-group-item">
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
}