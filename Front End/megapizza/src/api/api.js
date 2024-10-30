import axios from 'axios';

// Cria uma instância do axios com a URL base do backend
const api = axios.create({
  baseURL: 'http://localhost:5000/api', 
});

//Adiciona o token de autorização em cada requisição 
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); //Armazena no localStorage
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;//Adiciona o cabecalho de autorização
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


// Função para fazer login
export const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data; 
  } catch (error) {
    throw error.response ? error.response.data : new Error('Erro ao fazer login'); 
  }
};

// Função para registrar um novo usuário
export const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData); // Envia o objeto completo
    return response.data; 
  } catch (error) {
    throw error.response ? error.response.data : new Error('Erro ao registrar usuário'); 
  }
};

// Função para obter pizzas
export const getPizzas = async () => {
  try {
    const response = await api.get('/');
    return response.data; 
  } catch (error) {
    throw error.response ? error.response.data : new Error('Erro ao obter pizzas'); 
  }
};

// Função para adicionar uma nova pizza
export const addPizza = async (pizzaData) => {
  try {
    const response = await api.post('/', pizzaData);
    return response.data; 
  } catch (error) {
    throw error.response ? error.response.data : new Error('Erro ao adicionar pizza'); 
  }
};

// FAZER OS OUTROS METODOS

export default api; 
