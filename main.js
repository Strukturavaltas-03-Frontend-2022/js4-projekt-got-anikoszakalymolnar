/*
Egyik kedvenc szereplőmnél (Jorah Mormont) nem volt kép a mappában, így kerestem egyet a neten!
Illetve az picture adatnál még volt egy 's' (pictures) a Json fileban,
így azt javítottam, hogy megjelenjen a képe.
*/

// színészek adatai
let actors = [{
  name: 'Jon Snow',
  portrait: 'assets/jon.png',
  picture: 'assets/pictures/jon_snow.jpg',
  bio: 'bio',
  organization: 'nightwatch',
}];

// 1 ember megjelenítése
function generateActor(actor = { name: '', portrait: '' }) {
  return `<div class="actor">
<img class="actorImage" src="${actor.portrait}" alt="">
<div class="actorName">${actor.name}</div>
</div>`;
}

// részletek megjelenítése
function showActorBio(actor = { name: '', picture: '', bio: '' }) {
  const text = `<div class="picture">
  <div class="image">
      <img src="${actor.picture}" alt="">
  </div>
</div>
<div class="name-container">
  <div class="name">${actor.name}</div>
  <div class="house"><img src="assets/houses/${actor.house != null ? actor.house : 'royalguard'}.png" alt=""></div>
</div>
<div class="bio">${actor.bio}</div>`;
  document.querySelector('.bio--container').innerHTML = text;
}

function generateActorsDiv() {
  const text = actors.map((actor) => generateActor(actor)).join('');
  document.querySelector('.actors--container').innerHTML = text;
}

// json file betöltése, ha van
const loadData = async (url = '') => {
  try {
    const response = await fetch(url);
    const jsonDatas = await response.json();
    return jsonDatas
      .filter((actor) => actor.dead !== true) // halottak törlése
      .filter((actor) => actor.name !== 'Shae') // töröltem (49.ik), mert nem tudom, hogy ki az :(
      .sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    return [{}];
  }
};

function addActorEvents() {
  // névre klikkelés
  const actorNames = document.querySelectorAll('.actorName');
  actorNames.forEach((actorName, index) => actorName.addEventListener('click', () => {
    showActorBio(actors[index]);
  }));
  // képre is lehet klikkelni
  const actorImages = document.querySelectorAll('.actorImage');
  actorImages.forEach((actorName, index) => actorName.addEventListener('click', () => {
    showActorBio(actors[index]);
  }));
}

function addSearchEvenet() {
  // keresés funkció
  const search = () => {
    // szövegmező
    const inputSearch = document.querySelector('.input');
    // nem csinál semmit, ha üres a szövegmező
    if (inputSearch.value === '') { return null; }
    // kisbetűsre alakítás
    const littleInput = inputSearch.value.toLowerCase();
    // elem indexének megkeresése a tömbből
    const index = actors.findIndex((actor) => actor.name.toLowerCase() === littleInput);
    // ha nincs meg, akkor -1
    if (index === -1) {
      // üzenet kiíratása
      const notFound = document.querySelector('.bio--container');
      notFound.innerHTML = '<div class="bio">Character not found!</div>';
    } else {
      // megtalált elem megjelenítése és szövegmező törlése
      showActorBio(actors[index]);
      inputSearch.value = '';
    }
  };

  // keresés fg hozzárendelése a gombnyomás eseményhez
  const buttonSearch = document.querySelector('.btn');
  buttonSearch.addEventListener('click', search);

  // kereső mező 'enter' ütésre is működik :)
  const node = document.querySelector('.input');
  node.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      search();
    }
  });
}

// init
(async () => {
  actors = await loadData('json/got.json');

  generateActorsDiv();
  addActorEvents();
  addSearchEvenet();
})();
