import "./styles.css";

const noButton = document.getElementById("no");
noButton.addEventListener("mouseover", () => {
  const randomX = Math.random() * (window.innerWidth - 100);
  const randomY = Math.random() * (window.innerHeight - 50);
  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});

// document.getElementById("yes").addEventListener("click", () => {
//   const pop = document.createElement('div');
//   pop.innerHTML = `Thank you!`;
//     pop.style.display = 'block';
// });
