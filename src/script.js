import "./styles.css";


const noButton = document.getElementById("no");
noButton.addEventListener("mouseover", () => {
  const randomX = Math.random() * (window.innerWidth - 100);
  const randomY = Math.random() * (window.innerHeight - 50);
  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});

document.getElementById("yes").addEventListener("click", () => {
  const pop = document.querySelector('#yesResponse');
  let searchTerms = ['cats', 'cute', 'animals', 'kittens', 'puppy', 'cute eyes'];
  let randomSearch = searchTerms[Math.floor(Math.random() * searchTerms.length)];
    const img = document.querySelector('img');
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${MY_KEY}=${randomSearch}`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        pop.style.display = 'flex';
        img.style.maxHeight = '400px';
        img.style.width = 'auto'; 
        img.src = response.data.images.original.url;
      });
});
