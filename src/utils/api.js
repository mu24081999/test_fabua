// import axios from "axios";
// import { getAccessToken } from "./setAuthToken";
// // import store from "../store";
// // import { LOGOUT } from "../Actions/Types";
// const token = getAccessToken();

// let baseURL = "";
// if (window.location.hostname === "localhost") {
//   baseURL = "http://13.60.156.232:2001/api"; //"http://localhost:2001/api";
// } else {
//   baseURL = "http://13.60.156.232:2001/api"; //"https://cvj0m9w7-2001.inc1.devtunnels.ms/api";
// }
// const api = axios.create({
//   baseURL: baseURL,
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Headers": "*",
//     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//     ...(token ? { "x-sh-auth": token?.token } : ""),
//   },

//   // onUploadProgress: function (data) {
//   //   store.getState().videos.progress = Math.round((100 * data.loaded) / data.total)
//   // },
// });
// /**
//  intercept any error responses from the api
//  and check if the token is no longer valid.
//  ie. Token has expired or user is no longer
//  authenticated.
//  logout the user if the token has expired
// **/

// // api.interceptors.response.use(
// //     (res) => res,
// //     (err) => {
// //         if (err.response.status === 401) {
// //             store.dispatch({ type: LOGOUT });
// //         }
// //         return Promise.reject(err);
// //     }
// // );

// // api.interceptors.request.use((config) => {
// //   document.querySelector('.spinner-container').style.display = 'block';
// //   return config;
// // }, (error) => {
// //   document.querySelector('.spinner-container').style.display = 'none';
// //   return Promise.reject(error);
// // });

// // // Add a response interceptor
// // api.interceptors.response.use((response) => {
// //   document.querySelector('.spinner-container').style.display = 'none';
// //   return response;
// // }, (error) => {
// //   document.querySelector('.spinner-container').style.display = 'none';
// //   return Promise.reject(error);
// // });

// export default api;
import axios from "axios";
import { getAccessToken } from "./setAuthToken";
// import store from "../store";
// import { LOGOUT } from "../Actions/Types";

const baseURL = "https://cvj0m9w7-2001.inc1.devtunnels.ms/api/";
// if (window.location.hostname === "localhost") {
//   baseURL = "http://13.60.156.232:2001/api";
// } else {
//   baseURL = "http://13.60.156.232:2001/api";
// }

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Adding a request interceptor to attach token dynamically
api.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken(); // Lazy loading the token
    if (token) {
      config.headers["x-sh-auth"] = token.token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Adding a response interceptor for handling 401 errors
api.interceptors.response.use(
  (response) => response, // If the response is successful, just return it
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized - handle token expiration or logout");
    }
    return Promise.reject(error);
  }
);

export default api;
