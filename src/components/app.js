import React from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

const API_KEY = "AIzaSyC-dUo1TkDN5uXByVWeGbgdc_iZ13I-lIU";



export default class App extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			featuredImage: "",
			videos: [],
			selectedVideo: null
		};
	}

	componentDidMount(){
		this.searchYoutube("Mazda Mx-5 2016 does it get");
	}

	searchYoutube(searchTerm){
		YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
			this.setState({
				featuredImage: videos[0].snippet.thumbnails.high.url,
				videos,
				selectedVideo: videos[0]
			});
		});
	}

	setSelectedVideo(video){
		this.setState({
			selectedVideo: video
		});
	}

	render() {
	    return (
			<div>
				<SearchBar searchYoutube={this.searchYoutube.bind(this)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList videos={this.state.videos} setSelectedVideo={this.setSelectedVideo.bind(this)} />
			</div>
	    );
	}


}
