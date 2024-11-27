import axios from 'axios';

const axiosInstance = axios.create({
  //localhost baseurl
  // baseURL: "http://127.0.0.1:5001/clon-6eb90/us-central1/api",
//deployed version of amazon server on render.com
  baseURL: "https://amazon-api-deploy-9g1t.onrender.com/",
});
export {axiosInstance}