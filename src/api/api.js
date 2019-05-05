const defaultApi = "https://swapi.co/api/";
export const Api = {
  fetchCategory: (apiUrl = defaultApi) =>
    fetch(apiUrl).then(response => response.json())
};
