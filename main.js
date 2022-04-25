const gallery = document.querySelector('.gallery')
const newTechnologies = [];
const button = newTechnologies.map((technology) => `<li class="item"><button claas="btn">${technology}</button></li>`).join("");
    gallery.insertAdjacentHTML("beforeend", button);
