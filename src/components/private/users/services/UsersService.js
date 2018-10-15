import axios from 'axios';
import {API_BASE_URL} from '../../../../config/api';

class UsersService {

  headers = {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  };

  // data: FormData (https://developer.mozilla.org/en-US/docs/Web/API/FormData)
  static createUser(data) {
    const url = `${API_BASE_URL}/users`;

    return axios.request({
      url: url,
      method: 'post',
      headers: this.constructor.headers,
      data: {
        name: data.get('name'),
        username: data.get('username'),
        email: data.get('email'),
        password: data.get('password'),
      },
    });
  }

  static updateUserStatus(user) {

    if (typeof user === 'undefined') {
      throw new Error('No user ID was provided on deleteUser method');
    }

    const url = `${API_BASE_URL}/users/${user.id}/status`;

    return axios.request({
      url: url,
      method: 'put',
      headers: this.constructor.headers,
      data: {
        status: user.status,
      },
    });
  }

  static getAllUsers() {
    const url = `${API_BASE_URL}/users`;

    return axios.request({
      url: url,
      method: 'get',
      headers: this.constructor.headers,
      data: {},// Important: keep data empty so the header "Content-Type" is not removed
    });
  }

  static deleteUser(user) {

    if (typeof user === 'undefined') {
      throw new Error('No user ID was provided on deleteUser method');
    }

    const url = `${API_BASE_URL}/users/${user.id}`;
    return axios.request({
      url: url,
      method: 'delete',
      headers: this.constructor.headers,
      data: {},// Important: keep data empty so the header "Content-Type" is not removed
    });
  }
}

export default UsersService;
