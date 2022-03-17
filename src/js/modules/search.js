import { showData } from "./show.js";
import { globalData } from "./fetch.js";

export function search() {
  let input = document.getElementById("searchInput");
  const display = document.getElementById("items");
  display.innerHTML = "";

  //search on input
  let search = globalData.filter(function (d) {
    return (
      d.title.toLowerCase().includes(input.value.toLowerCase()) ||
      d.author.toLowerCase().includes(input.value.toLowerCase())
    );
  });

  //if search is empty show error
  // if (search.length == 0) {
  //   errorSearch();
  // }

  showData(search);
}

export function searchBar(event) {
  event.preventDefault();
  search();
}
