import axios from 'axios';
import { createGallery, hideLoader } from './render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
    .then(response => {
      if (response.data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      createGallery(response.data.hits);
    })
    .catch(err => console.log(err))
    .finally(() => hideLoader());
}
