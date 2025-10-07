import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api",
  headers: {
    authorization: `BEARER `,
  },
});

export default axiosInstance;
