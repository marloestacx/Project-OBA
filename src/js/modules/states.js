const display = document.getElementById("items");
const section = document.querySelector("section");

//error state loading
export function loading() {
  display.innerHTML = "Laden...";
}

//error state search
export function errorSearch() {
  section.innerHTML = "Laden...";
}
