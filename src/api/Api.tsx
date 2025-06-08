import axios from "axios";

export const postApi = axios.create({
  baseURL: "http://www.omdbapi.com?apikey=1589e30",
    headers: {
      "Content-Type": "application/json",
    },
});
// fba01b52f6984e57a332730e7881134a
export default postApi;
// export const setAuthToken = (token: string | null) => {
//   if (token) {
//     postApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   } else {
//     delete postApi.defaults.headers.common["Authorization"];
//   }
// };
//export default postApi;