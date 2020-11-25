(function (){
const jsLightbox = document.querySelector('ul[class="gallery js-gallery"]');
const lightboxImage = document.querySelector('img[class="lightbox__image"]');
const buttonClose = document.querySelector('button[class="lightbox__button"]');
const lightbox = document.querySelector('div[class="lightbox js-lightbox"]');
const img = document.querySelectorAll("img[data-name]");
const body = document.body;
const oldHttp = lightboxImage.src;
let i;

jsLightbox.addEventListener("click", (event) => {
  if(event.target.nodeName=='IMG'){
    event.preventDefault();
    lightboxImage.src = oldHttp;
    lightbox.classList.add("is-open");
    lightboxImage.src = event.target.dataset.source;
    i = Number(event.target.dataset.name);
    body.addEventListener('keydown',func);
    }  
});

buttonClose.addEventListener("click", (event) => {
  closeWind(event);
});

function closeWind(event) {
  event.preventDefault();
  lightbox.classList.remove("is-open");
  lightboxImage.src = oldHttp;
}

function func(event) {
  if (event.keyCode == 39) {
    i == img.length - 1 ? (i = 0) : i++;
    lightboxImage.src = img[i].dataset.source;
  } else if (event.keyCode == 37) {
    i < 1 ? (i = img.length - 1) : i--;
    lightboxImage.src = img[i].dataset.source;
  } else if (event.keyCode == 27) {
    closeWind(event);
    body.removeEventListener('keydown',func(event));
  }  
};
})();