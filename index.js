/**
 * @typedef Artist
 * @property {number} id
 * @property {string} name
 * @property {string} description
 * @property {string} imageUrl
 */

// === Constants ===
const BASE = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/COHORT-DEMO"; // Make sure to change this!
const RESOURCE = "/artists";
const API = BASE + COHORT + RESOURCE;

// === State ===
let artists = [];
let selectedArtist;

/** Updates state with all artists from the API */
async function getArtists() {
  // TODO
}

/** Updates state with a single artist from the API */
async function getArtist(id) {
  // TODO
}

// === Components ===

/** Shows the name of Artist that navigates to more information when clicked */
function ArtistListItem(artist) {
  // TODO
}

/** A list of names of all artists */
function ArtistList() {
  // TODO
}

/** A card with information about an Artist */
function SelectedArtist() {
  if (!selectedArtist) {
    const $p = document.createElement("p");
    $p.textContent = "Please select an artist to learn more.";
    return $p;
  }

  // TODO
}

// === Render ===
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Fullstack Gala</h1>
    <main>
      <section>
        <h2>Lineup</h2>
        <ArtistList></ArtistList>
      </section>
      <section id="selected">
        <SelectedArtist></SelectedArtist>
      </section>
    </main>
  `;
  $app.querySelector("ArtistList").replaceWith(ArtistList());
  $app.querySelector("SelectedArtist").replaceWith(SelectedArtist());
}

async function init() {
  await getArtists();
  render();
}

init();
