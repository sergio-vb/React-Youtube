import React from "react";

export default class SearchBar extends React.Component{
	constructor(props){
		super(props);

		this.state = {searchTerm: ''}
	}

	render(){
		return (
			<div className="search-bar input-group">
				<span className="input-group-btn">
					<button className="btn btn-secondary" type="button" onClick={this.onButtonClick.bind(this)}>Go!</button>
				</span>
				<input type="text" className="form-control" placeholder="Search for..."
					value={this.state.searchTerm} //Controlled components: it's a form element whose value is set by the state
					onChange={this.onInputChange.bind(this)} />
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