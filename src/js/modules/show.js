const display = document.getElementById("items");
const section = document.querySelector("section");
//show data
export function showData(data) {
  display.textContent = "";
  data.forEach((item, i) => {
    const html = `
              <article>
              <div class="content-overlay"></div>
                <img src="${
                  item.images ? item.images[1] : "Geen afbeelding"
                }">  
                <div class="content-details">
                <h3>${item.title}</h3>
                <p>${item.author}</p>
                <p>${item.summarie}</p>
                <p>${item.description}</p>
                <p>${item.language}</p>
              </div>
              </article>
            `;
    section.insertAdjacentHTML("beforeend", html);
  });
}
