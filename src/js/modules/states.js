const section = document.querySelector("section");
const display = document.getElementById("error");

//error state loading
export function loading() {
  section.innerHTML = "Laden...";
}

//error state search
export function errorSearch() {
  display.innerHTML = "Geen resultaten gevonden, zoek opnieuw";
}
