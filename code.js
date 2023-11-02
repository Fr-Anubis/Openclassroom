const form = document.getElementById("form");
let div = document.getElementById("div");
let image = document.getElementById("icone");
let imageAjoutee = false; // Variable de drapeau pour vérifier si l'image a déjà été ajoutée

const tab = ["Fraise", "Pomme", "Banane", "Kiwi"];
const indexAleatoire = Math.floor(Math.random() * tab.length);
const elementAleatoire = tab[indexAleatoire];
console.log("Élément aléatoire : " + elementAleatoire);

div.innerHTML = elementAleatoire;

form.addEventListener("submit", e => {
  e.preventDefault();

  let reponseInput = document.getElementById("reponse");
  let reponse = String(reponseInput.value);

  console.log(reponse);

  if (reponse === elementAleatoire && !imageAjoutee) {
    let logo = document.createElement("img");
    logo.src = "imgCorrect.png";
    logo.height = 50;
    image.appendChild(logo);
    imageAjoutee = true; // Mettre la variable de drapeau à true pour indiquer que l'image a été ajoutée
  } else if (!imageAjoutee) {
    alert("Oups tu as raté");
    let logo = document.createElement("img");
    logo.src = "faux.png";
    logo.height = 50;
    image.appendChild(logo);
    imageAjoutee = true; // Mettre la variable de drapeau à true pour indiquer que l'image a été ajoutée
  }
});
