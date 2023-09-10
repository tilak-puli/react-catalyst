import axios from "axios";

const instance = axios.create({
  baseURL: "https://flight-status-mock.core.travelopia.cloud",
  timeout: 1000,
});

export default instance;
