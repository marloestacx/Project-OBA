import { showData } from "./show.js";
import { globalData } from "./fetch.js";
import { errorSearch } from "./states.js";

let input = document.getElementById("searchInput");

export function search(input) {
  const display = document.getElementById("items");
  display.innerHTML = "";

  //search on input
  let search = globalData.filter(function (d) {
    return (
      d.title.toLowerCase().includes(input.toLowerCase()) ||
      d.author.toLowerCase().includes(input.toLowerCase())
    );
  });

  //   if search is empty show error
  if (search.length == 0) {
    console.log("leeg");
    errorSearch();
  }

  showData(search);
}

export function searchBar(event) {
  event.preventDefault();
  search(input.value);
}
