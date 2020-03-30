import axios from 'axios';

const axiosInstance = _ =>
  axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
  });

export default axiosInstance;
