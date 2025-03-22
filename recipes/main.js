import recipes from './recipes.mjs';
console.log(recipes);

function getRandomIndex() {
  return Math.floor(Math.random() * recipes.length);
}

// alert(getRandomIndex(recipes));