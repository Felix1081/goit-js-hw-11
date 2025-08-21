import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gaelleryList = document.querySelector('.gallery');

function createGallery(images) {
  return `<li class="gallery-item">
  <a class="gallery-link" href="${images.original}">
    <img
      class="gallery-image"
      src="${images.preview}"
      data-source="${images.original}"
      alt="${images.description}"
    />
  </a>
</li>`;
}

function imgsTemplate(imgs) {
  return imgs.map(imgTemplate).join('');
}

const markup = imgsTemplate(images);
galleryList.innerHTML = markup;

let gallery = new SimpleLightbox('.gallery', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
gallery.on('show.simplelightbox', function () {});

function clearGallery() {}
function showLoader() {}
function hideLoader() {}
