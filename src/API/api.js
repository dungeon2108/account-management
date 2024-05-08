import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:9090/api/v1/",
    headers: {
        "Content-Type": "application/json"
    },
});
// method: phuong thuc HTTP, endpoint: dia chi url, payload: data gui di
export const api = (method, endpoint, payload) => {
    return axiosClient(endpoint, { method: method, data: payload })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
    });
};
  