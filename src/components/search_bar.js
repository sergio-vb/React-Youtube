import React from "react";

export default class SearchBar extends React.Component{
	constructor(props){
		super(props);

		this.state = {searchTerm: ''}
	}

	render(){
		return (
			<div>
				<input
					value={this.state.searchTerm} //Controlled components: it's a form element whose value is set by the state
					onChange={this.onInputChange.bind(this)} />
				{/*<p>The inputs value is: {this.state.searchTerm}</p>*/}

				<button onClick={this.onButtonClick.bind(this)}>Search Youtube</button>

				
			</div>
		);
	}

	onInputChange(ev){
		this.setState({searchTerm: ev.target.value});
	}

	onButtonClick(ev){
		this.props.searchYoutube(this.state.searchTerm);
	}

}