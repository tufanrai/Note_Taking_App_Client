import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api",
  headers: {
    authorization: `BEARER ${Cookies.get("ticket")}`,
  },
});

export default axiosInstance;
