import {API_BASE_URL} from '../../config/api';
import axios from 'axios';

class AuthenticationService {

  static isAuthenticated = false;

  static login(username, password) {
    return new Promise((resolve, reject) => {

      const headers = {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      };

      const requestURL = `${API_BASE_URL}/users/login`;
      const requestData = {username: username, password: password};
      const requestConfig = {headers: headers};

      axios.post(requestURL, requestData, requestConfig).
          then((response) => {
            this.isAuthenticated = true;
            const userData = response.data;

            resolve(userData);

          }).catch(error => reject(error));
    });
  }

  static logout(callback) {
    this.isAuthenticated = false;

    // TODO: Replace this with an actual login operation
    setTimeout(callback, 400);
  }

}

export default AuthenticationService;
