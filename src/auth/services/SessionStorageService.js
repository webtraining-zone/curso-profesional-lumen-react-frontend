class SessionStorageService {

  static set(key, data) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  static get(key) {
    return JSON.parse(sessionStorage.getItem(key));
  }
}

export default SessionStorageService;
