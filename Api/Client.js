import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://api.covid19api.com",
});

export default apiClient;
