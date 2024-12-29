import "./styles.css";


const noButton = document.getElementById("no");
noButton.addEventListener("mouseenter", () => {
  const randomX = Math.random() * (window.innerWidth - 100);
  const randomY = Math.random() * (window.innerHeight - 50);
  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});

const yesBtn = document.getElementById("yes");
let scaleFactor = 1;
yesBtn.addEventListener("click", () => {
  const pop = document.querySelector('#yesResponse');
  let searchTerms = ['cats', 'cute', 'cute animals', 'kittens', 'puppy'];
  scaleFactor += 0.2;
  let randomSearch = searchTerms[Math.floor(Math.random() * searchTerms.length)];
    const img = document.querySelector('img');
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=N0WmJIb1PXlmA9zyuUB2Ugzr0rQ4ikCA&s=${randomSearch}`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        pop.style.display = 'flex';
        img.style.maxHeight = '400px';
        img.style.width = 'auto'; 
        img.src = response.data.images.original.url;
      });
      yesBtn.style.transform = `scale(${scaleFactor})`;
});
