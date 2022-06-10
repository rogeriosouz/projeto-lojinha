import axios from 'axios';
import Cookies from 'js-cookie';

const http = axios.create({
  baseURL: 'http://localhost:3334'
})

if(Cookies.get('tokenUser')) {
  http.defaults.headers.common['authorization-user'] = Cookies.get('tokenUser') as string;
}

if(Cookies.get('tokenAdm')) {
  http.defaults.headers.common['authorization'] = Cookies.get('tokenAdm') as string;
}

export default http;