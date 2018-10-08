import axios from 'axios';
import {API_BASE_URL} from '../../../config/api';

class UsersService {

  // data: FormData (https://developer.mozilla.org/en-US/docs/Web/API/FormData)
  static createUser(data) {
    const url = `${API_BASE_URL}/users`;

    return axios.request({
      url: url,
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      data: {
        name: data.get('name'),
        username: data.get('username'),
        email: data.get('email'),
        password: data.get('password'),
      },
    });
  }

  static getAllUsers() {
    const url = `${API_BASE_URL}/users`;

    return axios.request({
      url: url,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
      data: {},// Important: keep data empty so the header "Content-Type" is not removed
    });
  }
}

export default UsersService;
