import { getImagesByQuery } from './js/pixabay-api';
import { refs } from './js/refs';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  clearGallery();

  const value = event.currentTarget.elements['search-text'].value.trim();

  if (value === '') {
    return;
  }

  showLoader();

  getImagesByQuery(value)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      createGallery(data.hits);
    })

    .catch(err => {
      iziToast.error({
        message: err.message,
        position: 'topRight',
      });
    })
    .finally(() => hideLoader());
}
