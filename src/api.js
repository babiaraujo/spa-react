import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/orgs/aws/members'
});

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      console.error('Erro de resposta:', error.response.data);
      console.error('Código de status:', error.response.status);
    } else if (error.request) {
      console.error('Sem resposta:', error.request);
    } else {
      console.error('Erro:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
