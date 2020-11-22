import galleryItems  from './gallery-items.js';
const gallery=document.querySelector('ul');
let corentNum=0;
let newArr=galleryItems.map(({description,preview,original})=>{
  return `<li class="gallery__item"><a class="gallery__link" href=${original}><img class="gallery__image"
   src=${preview} data-source=${original} data-name=${corentNum++} alt=${description}/></a></li>`;
}).join('');

gallery.innerHTML=newArr;