import axios from 'axios';

// Use production API URL when deployed, otherwise use localhost
const baseURL = import.meta.env.PROD 
  ? 'https://farm-machinery-backend.onrender.com/api'
  : 'http://localhost:5000/api';

export default axios.create({ baseURL });
// This will be used to make API requests to the backend server