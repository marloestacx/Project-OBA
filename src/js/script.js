/*** Fetching data -> refactor into module later ***/
const section = document.querySelector("section");
const cors = "https://cors-anywhere.herokuapp.com/";
const endpoint = "https://zoeken.oba.nl/api/v1/search/?q=";
const query = "voedingsleer+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia";
const key = "dc0e2f073c03758140452044906bc818";
const secret = "4289fec4e962a33118340c888699438d";
const detail = "Default";
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

const config = {
  Authorization: `Bearer ${secret}`,
};

let globalData = [];

function getData() {
  fetch(url, config)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // globalData = data.results;

      // console.log(globalData);
      // let newData = globalData.map((d) => [d.titles[0], d.year]);

      console.log(data.results);

      globalData = data.results.map((d) => {
        return {
          title: d.titles[0],
          author: d.authors[0],
          year: d.year,
          images: [d.coverimages[0], d.coverimages[1]],
        };
      });

      // globalData = newData;
      console.log(globalData);

      showData(globalData);
    })
    .catch((err) => {
      // fetch(".../data.json").then;
      console.log(err);
    });
}

getData();

//show data
function showData(data) {
  data.forEach((item, i) => {
    const html = `
            <article>
            <div class="content-overlay"></div>
              <img src="${
                item.images ? item.images[1] : "Geen samenvatting"
              }">  
              <div class="content-details">
              <h3>${item.title}</h3>
              <p>${item.author}</p>
            </div>
            </article>
          `;
    section.insertAdjacentHTML("beforeend", html);
  });
}

document.querySelector("form").addEventListener("submit", searchBar);
document.getElementById("#sort").addEventListener("click", sortTitle);
document.getElementById("#sortAuthor").addEventListener("click", sortAuthor);
document.getElementById("#sortYear").addEventListener("click", sortYear);

function search() {
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

function searchBar(event) {
  event.preventDefault();
  search();
}

function sortTitle() {
  const display = document.getElementById("items");
  display.innerHTML = "";

  let newData = globalData.sort((a, b) =>
    a.title > b.title ? 1 : b.title > a.title ? -1 : 0
  );

  showData(newData);
}

function sortAuthor() {
  const display = document.getElementById("items");
  display.innerHTML = "";

  let newData = globalData.sort((a, b) =>
    a.author > b.author ? 1 : b.author > a.author ? -1 : 0
  );

  showData(newData);
}

function sortYear() {
  const display = document.getElementById("items");
  display.innerHTML = "";

  let newData = globalData.sort((a, b) =>
    a.year > b.year ? -1 : b.year > a.year ? 1 : 0
  );

  showData(newData);
}
