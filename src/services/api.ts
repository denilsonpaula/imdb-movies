import axios from "axios";

const API = axios.create({ baseURL: 'https://imdb-api.com/pt-br/API' })

export const API_TOKEN = process.env.REACT_APP_TOKEN_API as string
export default API