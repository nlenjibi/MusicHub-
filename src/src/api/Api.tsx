import axios from "axios";

export const postApi = axios.create({
  baseURL: "http://localhost:3001/posts",
    headers: {
      "Content-Type": "application/json",
    },
});
export default postApi;
// export const setAuthToken = (token: string | null) => {
//   if (token) {
//     postApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   } else {
//     delete postApi.defaults.headers.common["Authorization"];
//   }
// };
//export default postApi;