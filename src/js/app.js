import { getData } from "./modules/fetch.js";
import { searchBar } from "./modules/search.js";
import { sortTitle } from "./modules/sort.js";
import { sortAuthor } from "./modules/sort.js";
import { sortYear } from "./modules/sort.js";
import { loading } from "./modules/states.js";

loading();
getData();

document.querySelector("form").addEventListener("submit", searchBar);
document.getElementById("#sort").addEventListener("click", sortTitle);
document.getElementById("#sortAuthor").addEventListener("click", sortAuthor);
document.getElementById("#sortYear").addEventListener("click", sortYear);
