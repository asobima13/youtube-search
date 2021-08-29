import axios from "axios";
const dotenv = require('dotenv')
dotenv.config()

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    part: "snippet",
    maxResults: 10,
    key: process.env.REACT_APP_API_KEY
  },
});
