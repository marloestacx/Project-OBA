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
      console.log(response);
      return response.json();
    })
    .then((data) => {
      globalData = data.results;
      showData(globalData);
    })
    .catch((err) => {
      console.log(err);
    });
}

getData();

//show data
function showData(data) {
  // const results = data.results;
  console.log(data);
  data.forEach((item, i) => {
    const html = `
            <article>
            <div class="content-overlay"></div>
              <img src="${
                item.coverimages ? item.coverimages[1] : "Geen samenvatting"
              }">  
              <div class="content-details">
              <h3>${item.titles[0]}</h3>
              <p>${item.authors}</p>
            </div>
            </article>
          `;
    section.insertAdjacentHTML("beforeend", html);
  });
}

document.querySelector("form").addEventListener("submit", searchBar);

function search() {
  let input = document.getElementById("searchInput");
  const display = document.getElementById("items");
  display.innerHTML = "";

  //search on input
  let search = globalData.filter(function (d) {
    return (
      d.titles[0].toLowerCase().includes(input.value.toLowerCase()) ||
      d.authors[0].toLowerCase().includes(input.value.toLowerCase())
    );
  });

  //if search is empty show error
  // if (search.length == 0) {
  //   errorSearch();
  // }

  console.log(search);

  showData(search);
}

function searchBar(event) {
  event.preventDefault();
  search();
}
