import axios from 'axios'

const API_URL = 'http://localhost:3001/expenses'

const expenseService = {
  getAll: () => axios.get(API_URL),
  getByUserId: (userId) => axios.get(`${API_URL}?userId=${userId}`),
  create: (data) => axios.post(API_URL, data),
  delete: (id) => axios.delete(`${API_URL}/${id}`),
  update: (id, data) => axios.put(`${API_URL}/${id}`, data),
}

export default expenseService
