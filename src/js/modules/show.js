const display = document.getElementById("items");
const section = document.querySelector("section");
let author;
let summary;

//show data
export function showData(data) {
  display.textContent = "";

  //dont show author if not existing
  data.forEach((item) => {
    if (item.author == "Geen auteur") {
      author = " ";
    } else {
      author = item.author;
    }

    //dont show summery if not existing
    if (item.summary == "Geen samenvatting") {
      summary = " ";
    } else {
      summary = item.summary;
    }

    const html = `
              <article>
              <div class="content-overlay"></div>
                <img src="${
                  item.images ? item.images[1] : "Geen afbeelding"
                }">  
                <div class="content-details">
                <h3>${item.title}</h3>
                <p>${author}</p> 
                <p>${summary}</p>
                <p>${item.description}</p>
                <p>${item.subject}</p>
                <p>${item.language}</p> 
              </div>
              </article>
            `;
    section.insertAdjacentHTML("beforeend", html);
  });
}
