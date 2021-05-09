import { refresh } from "./auth/authSlice";
import axios from "axios";

export default function setupAxios(store) {
  //axios.defaults.baseURL = "http://localhost:3100/"
  axios.interceptors.request.use(
    (config) => {
      const {
        auth: { accessToken },
      } = store.getState();

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      if (error.response.status === 403) {
        const {
          auth: { accessToken, refreshToken },
        } = store.getState();

        return axios
          .post("http://localhost:3100/refresh", { accessToken, refreshToken })
          .then(({ data: { accessToken, refreshToken } }) => {
            store.dispatch(refresh({ accessToken, refreshToken }));
            return axios(error.config);
          });
      }
      return Promise.reject(error);
    }
  );
}
