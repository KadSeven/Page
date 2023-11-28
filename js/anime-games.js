function accion (){
    var ancla = document.getElementsByClassName ('nav_enlace');
    for(var i = 0; i < ancla.length; i++) {
        ancla[i].classList.toggle('desaparece');
    }
}

const images = [
    'https://i.pinimg.com/originals/cd/9d/39/cd9d394ba9d69fd18b2499ff26cf3a01.gif',
    'https://blog.lootcrate.com/wp-content/uploads/2019/03/feat_devilmaycry_header.gif',
    'https://media.tenor.com/KxnmLzsvsxAAAAAC/luffy-one-piece.gif',
    'https://i.pinimg.com/originals/1c/0b/cb/1c0bcb5d1dee4fe6cdfa1d7f71bc77a6.gif',
    'https://i.pinimg.com/originals/1c/0b/cb/1c0bcb5d1dee4fe6cdfa1d7f71bc77a6.gif',
    '../img/kaneki.gif',
];
  
const imageDisplay = document.getElementById('imageDisplay');
const changeImageButton = document.getElementById('changeImage');
  
let currentIndex = 0;
  
function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageDisplay.src = images[currentIndex];
}

changeImageButton.addEventListener('click', changeImage);