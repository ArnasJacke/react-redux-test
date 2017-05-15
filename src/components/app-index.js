import React, { Component } from 'react';
import PostsList from '../containers/posts-list.js'
import Link from 'react-router-dom';


export default class AppIndex extends Component {
  render() {
    return (
    	<div>
		    <PostsList />
    	</div>
    );
  }
}
