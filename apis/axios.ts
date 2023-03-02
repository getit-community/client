import axios from 'axios';

const serverInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_API_HOST,
  withCredentials: true,
});

if (serverInstance) {
  serverInstance.interceptors.request.use(
    (config) => {
      if (config.method === 'get') {
        config.timeout = 12000;
      }

      return config;
    },
    (error) => {
      const code = error.code;
      const status = error.response.status;

      if (code === 'ECONNABORTED' || status === 408) {
        alert('요청이 만료되었습니다.');
      }

      return Promise.reject(error);
    },
  );
}

export { serverInstance };
