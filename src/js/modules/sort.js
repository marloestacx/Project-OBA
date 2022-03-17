import { showData } from "./show.js";
import { globalData } from "./fetch.js";

export function sortTitle() {
  const display = document.getElementById("items");
  display.innerHTML = "";

  let newData = globalData.sort((a, b) =>
    a.title > b.title ? 1 : b.title > a.title ? -1 : 0
  );

  showData(newData);
}

export function sortAuthor() {
  const display = document.getElementById("items");
  display.innerHTML = "";

  let newData = globalData.sort((a, b) =>
    a.author > b.author ? 1 : b.author > a.author ? -1 : 0
  );

  showData(newData);
}

export function sortYear() {
  const display = document.getElementById("items");
  display.innerHTML = "";

  let newData = globalData.sort((a, b) =>
    a.year > b.year ? -1 : b.year > a.year ? 1 : 0
  );

  showData(newData);
}
