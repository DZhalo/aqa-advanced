const axios = require("axios");

// Task 1
async function fetchWithWrongUrl() {
  try {
    await axios.get("https://jsonplaceholder.typicode.com/THIS_ENDPOINT_DOES_NOT_EXIST");
    return "OK";
  } catch (error) {
    const status = error.response?.status;

    return status ? `Request failed with status ${status}` : `Network error: ${error.message}`;
  }
}

// Task 2
async function fetchWithHeadersAndParams({ baseUrl, headers, params }) {
  return axios.get(baseUrl, { headers, params });
}

// Task 3
async function getUser(userId) {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return response.data;
}

module.exports = {
  fetchWithWrongUrl,
  fetchWithHeadersAndParams,
  getUser,
};