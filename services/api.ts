import axios from "axios";

var api = axios.create({
  baseURL: 'https://api.spoonacular.com',
});

export default api;