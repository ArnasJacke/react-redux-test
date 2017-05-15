import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions';

class PostsList extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderList() {
		return _.map(this.props.posts, post => {
			return (
				<div
				key={post.title}
				className="col-xs-6 col-sm-3">
					<img src={post.thumbnailUrl} alt=""/>
					{post.title}
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<h2>Post List</h2>
				<div>
					{this.renderList()}
				</div>
			</div>
		)
	}
}


// Whenever we want to consume anything to application level state we need to map state to props
function mapStateToProps(state) {
	return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsList);  // null = mapStateTpProps
