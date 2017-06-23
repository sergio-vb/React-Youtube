import React from 'react';
import VideoListItem from './video_list_item';

export default class VideoList extends React.Component{

	render(){

		const listItems = this.props.videos.map( (video, index) => <VideoListItem key={video.etag} video={video} setSelectedVideo={this.props.setSelectedVideo} ></VideoListItem> );

		return (
			<ul className="col col-md-4 list-group">
				{listItems}
			</ul>
		);
	}
}