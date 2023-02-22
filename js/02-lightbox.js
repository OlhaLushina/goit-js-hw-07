import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');
const galleryItemsEl = createGalleryItemsEl(galleryItems);

// Додаємо елементи до галереї 
galleryEl.insertAdjacentHTML('beforeend', galleryItemsEl);

// Прослуховуємо подію кліка на елементах галереї
galleryEl.addEventListener('click', onImageClick);

// Створюємо модальне вікно
let modale = new SimpleLightbox('.gallery a', {captions: true, captionSelector: 'img', captionType: 'attr', captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250});
    
// Створення розмітки галереї
function createGalleryItemsEl(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`;
    }).join('');
}

// Обробник події кліка на зображенню галереї
function onImageClick(e) {
    // Забороняємо перехід за посиланням за замовчуванням
    e.preventDefault(); 
}
