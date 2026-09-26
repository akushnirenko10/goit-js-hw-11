import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './refs';

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(image => {
      return `<li class="gallery-item">
  <a class="gallery-item" href="${image.largeImageURL}">
  <img src="${image.webformatURL}" alt="${image.tags}" />
</a>
  <div class="gallery-text-wrapper">
    <p class="likes"><span>Likes</span> ${image.likes}</p>
    <p class="likes"><span>Views</span> ${image.views}</p>
    <p class="likes"><span>Comments</span> ${image.comments}</p>
    <p class="likes"><span>Downloads</span> ${image.downloads}</p>
  </div>
</li>`;
    })
    .join('');
  refs.gallery.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
}

export function clearGallery() {
  refs.gallery.innerHTML = '';
}

export function showLoader() {
  refs.loader.classList.add('visible');
}
export function hideLoader() {
  refs.loader.classList.remove('visible');
}
