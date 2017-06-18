import React from 'react';

export default class VideoDetail extends React.Component{

	render(){
		return (
			<div className="col col-md-8">
				<p>Video Detail Container</p>
				{this.props.children}
			</div>
		);
	}
}