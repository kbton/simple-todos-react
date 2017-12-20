class Auth {

  static authenticateUser(token) {
    localStorage.setItem('kohezion_session_token', token);
  }

  static deauthenticateUser(token) {
    localStorage.removeItem('kohezion_session_token');
  }
   
  static getToken() {
    return localStorage.getItem('kohezion_session_token');
  }
    
}
    
export default Auth;