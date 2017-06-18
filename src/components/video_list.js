import React from 'react';
import VideoListItem from './video_list_item';

export default class VideoList extends React.Component{

	render(){

		const listItems = this.props.videos.map( (video, index) => <VideoListItem key={index} video={video}></VideoListItem> );

		return (
			<ul className="col col-md-4 right list-group">
				{listItems}
			</ul>
		);
	}
}