export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '41864490-ab1aa9c4772cfd6b871252eca';
function getImage({ query, page = 1, per_page }) {
  return axios
    .get(
      `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&`,
      {
        params: {
          per_page,
          page,
        },
      }
    )
    .then(({ data }) => data);
}

export { getImage };
