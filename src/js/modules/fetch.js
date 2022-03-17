const section = document.querySelector("section");
const cors = "https://cors-anywhere.herokuapp.com/";
const endpoint = "https://zoeken.oba.nl/api/v1/search/?q=";
const query =
  "voeding+sport+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia";
const key = "dc0e2f073c03758140452044906bc818";
const secret = "4289fec4e962a33118340c888699438d";
const detail = "Default";
const url = `${cors}${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;
const url2 = `${cors}http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=voeding+sport+NOT+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=fff5cd7a65bd87deefd8f70bfb447d42&output=json`;
const display = document.getElementById("items");
display.textContent = "Laden...";

export { globalData };
let globalData;

const config = {
  Authorization: `Bearer ${secret}`,
};

import { showData } from "./show.js";

export function getData() {
  fetch(url, config)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      globalData = data.results.map((d) => {
        return {
          title: d.titles[0],
          // author: d.author[0] != null ? d.author[0] : "Geen auteur",
          year: d.year,
          images: [d.coverimages[0], d.coverimages[1]],
        };
      });

      // globalData = newData;

      showData(globalData);
    })
    .catch((err) => {
      fetch("./src/data.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          globalData = data.map((d) => {
            return {
              title: d.titles[0],
              //   author: d.authors[0] || "Test",
              year: d.year,
              images: [d.coverimages[0], d.coverimages[1]],
            };
          });

          // globalData = newData;

          showData(globalData);
        });
      console.log(err);
    });
}

fetch(url2)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch(() => {
    fetch("./src/data2.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
      })
      .catch((err) => console.error(err));
  });
