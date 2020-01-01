import apisauce from 'apisauce';
import Config from 'react-native-config';
const create = (baseURL = Config.API_URL) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache',
    },
    // 10 second timeout...
    timeout: 10000,
  });
  const login = loginData => api.post('/login', loginData);
  const register = registerData => api.post('/register', registerData);
  const fetchResource = () => api.get('/unknown');
  return {
    login,
    register,
    fetchResource,
  };
};

export default create;
