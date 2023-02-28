const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const image = document.querySelector('#meme-image');

const fireButton = document.getElementById('fire');
const waterButton = document.getElementById('water');
const earthButton = document.getElementById('earth');

inputText.addEventListener('input', () => {
  memeText.innerText = inputText.value;
});

const input = document.getElementById('meme-insert');
const imageContainer = document.getElementById('meme-image-container');
const memeImage = document.getElementById('meme-image');

input.addEventListener('change', () => {
  const file = input.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    memeImage.src = reader.result;
  });

  reader.readAsDataURL(file);
});

input.addEventListener('input', () => {
  memeText.textContent = input.value;
});

input.addEventListener('change', (event) => {
  image.src = URL.createObjectURL(event.target.files[0]);
});

fireButton.addEventListener('click', () => {
  imageContainer.style.border = '3px dashed rgb(255, 0, 0)';
});

waterButton.addEventListener('click', () => {
  imageContainer.style.border = '5px double rgb(0, 0, 255)';
});

earthButton.addEventListener('click', () => {
  imageContainer.style.border = '6px groove rgb(0, 128, 0)';
});

const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

meme1.addEventListener('click', () => {
  memeImage.src = 'imgs/meme1.png';
});

meme2.addEventListener('click', () => {
  memeImage.src = 'imgs/meme2.png';
});

meme3.addEventListener('click', () => {
  memeImage.src = 'imgs/meme3.png';
});

meme4.addEventListener('click', () => {
  memeImage.src = 'imgs/meme4.png';
});
