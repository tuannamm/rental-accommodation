import axios from "axios";
import NProgress from "nprogress";

const instance = axios.create({
  baseURL: "http://localhost:7979",
  timeout: 2000,
  withCredentials: false,
});

NProgress.configure({
  easing: "ease",
  trickleSpeed: 2000,
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    NProgress.start();
    return config;
  },
  function (error) {
    console.log("error: ", error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    NProgress.done();
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return error && error.response && error.response.data
      ? error.response.data
      : Promise.reject(error);
  }
);

export default instance;
