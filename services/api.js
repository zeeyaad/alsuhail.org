import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to add the auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
};

// Appointment API calls
export const appointmentAPI = {
  create: (appointmentData) => api.post('/appointments', appointmentData),
  getAll: () => api.get('/appointments'),
  getById: (id) => api.get(`/appointments/${id}`),
  update: (id, appointmentData) => api.put(`/appointments/${id}`, appointmentData),
  delete: (id) => api.delete(`/appointments/${id}`),
};

// Patient Records API calls
export const recordsAPI = {
  getRecords: () => api.get('/records'),
  getRecordById: (id) => api.get(`/records/${id}`),
  uploadRecord: (recordData) => api.post('/records', recordData),
};

export default api; 