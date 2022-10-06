import axios from "axios";

import { toast } from "react-toastify";

axios.interceptors.response.use(undefined, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("unexpected error", error);
    toast("An unexpected error occured");
  }

  return Promise.reject();
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
