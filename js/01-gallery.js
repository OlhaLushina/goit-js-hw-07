import { galleryItems } from './gallery-items.js';
    
const galleryEl = document.querySelector('.gallery');
const galleryItemsEl = createGalleryItemsEl(galleryItems);
let modale;

// Додаємо елементи до галереї 
galleryEl.insertAdjacentHTML('beforeend', galleryItemsEl);

// Прослуховуємо подію кліка на елементах галереї
galleryEl.addEventListener('click', onImageClick);

// Прослуховуємо подію натиснення клавіші Escape
document.addEventListener('keydown', onDocumentKeydown);

// Створення розмітки галереї
function createGalleryItemsEl(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
    }).join('');
}

// Обробник події кліка на зображенню галереї
function onImageClick(e) {
    // Забороняємо перехід за посиланням за замовчуванням
    e.preventDefault(); 

    // Створюємо модальне вікно
    modale = basicLightbox.create(`
        <img src="${e.target.parentNode.href}" width="800" height="600">
    `);

    // Відкриваємо модальне вікно
    modale.show();
}

// Обробник натиснення клавіші Escape
function onDocumentKeydown(e) {
    if (e.code !== 'Escape') {
        return;
    }

    // Закриваємо модальне вікно
    modale.close();
}