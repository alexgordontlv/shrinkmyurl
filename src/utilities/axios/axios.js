import axios from 'axios';
let BASE_URL = '';

export default axios.create({
	baseURL: process.env.baseURL || 'http://localhost:5000',
});
