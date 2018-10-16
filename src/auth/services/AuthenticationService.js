class AuthenticationService {

  static isAuthenticated = false;

  static login(callback) {
    this.isAuthenticated = true;

    // TODO: Replace this with an actual login operation
    setTimeout(callback, 400);
  }

  static logout(callback) {
    this.isAuthenticated = false;

    // TODO: Replace this with an actual login operation
    setTimeout(callback, 400);
  }

}

export default AuthenticationService;
