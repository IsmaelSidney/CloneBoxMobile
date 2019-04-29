import axios from "axios";

const api = axios.create({
  baseURL:  'https://clonebox-backend.herokuapp.com/'
});

export default api;