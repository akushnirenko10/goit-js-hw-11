import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';

export function getImagesByQuery(query) {
  return axios
    .get('api/', {
      params: {
        key: '57748887-33fc44c7a6eadcbc503de0d7e',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
