import React from 'react';

export default class VideoListItem extends React.Component{

	render(){

		console.log("Video List Item props:", this.props.video);

		const snippet = this.props.video.snippet;

		return (
			<li className="videoListItem" >
				<img src={snippet.thumbnails.default.url} alt=""/>
				<div>
					<h3>{snippet.title}</h3>
					<p>{snippet.channelTitle}</p>
				</div>
			</li>
		);
	}
}