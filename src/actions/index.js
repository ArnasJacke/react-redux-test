import axios from 'axios';


export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
	const ROOT_URL = 'http://jsonplaceholder.typicode.com/posts';
	const request = axios.get(ROOT_URL);
	
	return {
		type: FETCH_POSTS,
		payload: request // This can contain additional data
	}
}