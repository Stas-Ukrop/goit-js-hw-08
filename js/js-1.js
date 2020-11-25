import galleryItems  from './gallery-items.js';
const gallery=document.querySelector('ul');
let newArr=galleryItems.map(({description,preview,original},index)=>{
  return `<li class="gallery__item"><a class="gallery__link" href=${original}><img class="gallery__image"
   src=${preview} data-source=${original} data-name=${index} alt=${description}/></a></li>`;
}).join('');

gallery.innerHTML=newArr;