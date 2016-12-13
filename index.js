const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function kittens() {
  return kittens;
}

function destructivelyAppendKitten(name) {
  return kittens.push("Ralph");
}

function destructivelyPrependKitten(name) {
  return kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  return [...kittens, "Broom"];
}

function prependKitten(name) {
  return ["Arnold", ...kittens];
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}
