const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector("#ingredients");

const makeIngredients = ingredients.map(elem => {
  const liRef = document.createElement("li");
  liRef.textContent = elem;
  liRef.classList.add("item");
  ulRef.appendChild(liRef);
  return ulRef;
})









