import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "https://noteme-vudd.onrender.com/api",
  headers: {
    authorization: `BEARER ${Cookies.get("ticket")}`,
  },
});

export default axiosInstance;
