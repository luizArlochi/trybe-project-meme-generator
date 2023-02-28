const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');

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
