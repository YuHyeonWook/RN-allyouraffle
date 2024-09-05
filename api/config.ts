import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.allyouraffle.co.kr',
});

export default client;
