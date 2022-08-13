// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat() {
  return cats.push("Ralph");
}

function destructivelyPrependCat() {
  return cats.unshift("Bob");
}

destructivelyRemoveLastCat = () => {
  return cats.pop(-1);
}

function destructivelyRemoveFirstCat() {
  return cats.splice(0, 1);
  
}

const newCats = [...cats]
 
function appendCat() {
  const newCats = [...cats, "Broom"];
  return newCats;
}

function prependCat() {
  const preCats = ["Arnold", ...cats];

  return preCats;
}


function removeLastCat() {
  const newCats = [...cats];
  return cats.slice(0, newCats.length -1);
}

function removeFirstCat() {
  const oldCats = [...cats];
  return oldCats.splice(1,2);
}