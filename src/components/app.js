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
			videos: []
		};
	}

	componentDidMount(){
		this.searchYoutube("Mazda Mx-5 2016 does it get");
	}

	searchYoutube(searchTerm){
		YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
			this.setState({
				featuredImage: videos[0].snippet.thumbnails.high.url,
				videos
			});
		});
	}

	render() {
	    return (
	      <div>
	      	<h2>React simple starter</h2>
	      	<SearchBar searchYoutube={this.searchYoutube.bind(this)} />
	      	<br />

	      	<VideoDetail video={this.state.videos[0]} />

	      	<VideoList videos={this.state.videos} />
	      	
	      </div>
	    );
	}


}
