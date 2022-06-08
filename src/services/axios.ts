import axios from 'axios';
import Cookies from 'js-cookie';

const http = axios.create({
  baseURL: 'http://localhost:3334'
})

http.defaults.headers.common['authorization'] = Cookies.get('tokenAdm') as string;

export default http;