(function (){
const jsLightbox = document.querySelector('ul[class="gallery js-gallery"]');
const lightboxImage = document.querySelector('img[class="lightbox__image"]');
const buttonClose = document.querySelector('button[class="lightbox__button"]');
const lightbox = document.querySelector('div[class="lightbox js-lightbox"]');
const img = document.querySelectorAll("img[data-name]");
const body = document.body;
const oldHttp = lightboxImage.src;
const KEY_LEFT=37;
const KEY_RIGHT=39;
const KEY_ESC=27;
let i;

jsLightbox.addEventListener("click", (event) => {
  if(event.target.nodeName==='IMG'){
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
  body.removeEventListener('keydown',func(event));
}

function func(event) {
  if (event.keyCode === KEY_RIGHT) {
    i === img.length - 1 ? (i = 0) : i++;
    lightboxImage.src = img[i].dataset.source;
  } else if (event.keyCode === KEY_LEFT) {
    i < 1 ? (i = img.length - 1) : i--;
    lightboxImage.src = img[i].dataset.source;
  } else if (event.keyCode === KEY_ESC) {
    closeWind(event);    
  }  
};
})();