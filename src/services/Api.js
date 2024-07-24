import axios from "axios";

// Create an Axios instance with a base URL
const apiClient = axios.create({
    baseURL: "https://api.thecatapi.com/v1",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "live_0weGywFKqtLZryEW6tlU0sdCI2OtiUj6zFRx0RR3xtfN1onDIAls8WkWjLzAlXAM"
    }
  });


export default apiClient;
