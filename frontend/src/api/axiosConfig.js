import axios from 'axios';
export default axios.create({ baseURL: 'http://localhost:5000/api' });
// This will be used to make API requests to the backend server