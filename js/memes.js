const memeContainer = document.getElementById('memeContainer');

const memes = [
  '../memes/meme1.jpg',
  '../memes/meme2.jpg',
  '../memes/meme3.png',
  '../memes/meme4.jpg',
  '../memes/goku.jpeg',
];

function showMemes() {
  memes.forEach(memeSrc => {
    const memeElement = document.createElement('img');
    memeElement.src = memeSrc;
    memeElement.classList.add('meme');
    memeElement.addEventListener('click', () => {
      memeElement.classList.toggle('large');
    });
    memeContainer.appendChild(memeElement);
  });
}

document.addEventListener('DOMContentLoaded', showMemes);