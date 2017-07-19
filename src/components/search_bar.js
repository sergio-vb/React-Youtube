import React from "react";

export default class SearchBar extends React.Component{
	constructor(props){
		super(props);

		this.state = {searchTerm: ''}
	}

	render(){
		return (
			<form onSubmit={this.handleSubmit.bind(this)} className="search-bar input-group">
				<span className="input-group-btn">
					<button className="btn btn-secondary" type="submit">Search</button>
				</span>
				<input type="text" className="form-control" placeholder="Search for..."
					value={this.state.searchTerm}
					onChange={this.handleChange.bind(this)} />
			</form>
		);
	}

	handleChange(ev){
		this.setState({searchTerm: ev.target.value});
	}

	handleSubmit(ev){
		ev.preventDefault();
		this.props.searchYoutube(this.state.searchTerm);
	}

}