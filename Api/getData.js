import apiClient from "./Client";

const getData = (endpoint) => apiClient.get(endpoint);

export default getData;
