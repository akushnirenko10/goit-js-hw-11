import { getImagesByQuery } from './js/pixabay-api';
import { refs } from './js/refs';
import { clearGallery, showLoader } from './js/render-functions';

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  clearGallery();

  const value = event.currentTarget.elements['search-text'].value;

  if (value.trim() === '') {
    return;
  }
  showLoader();
  getImagesByQuery(value);
}
