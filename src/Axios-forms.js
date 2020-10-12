import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://portfolio-indra.firebaseio.com/'
});

export default instance;