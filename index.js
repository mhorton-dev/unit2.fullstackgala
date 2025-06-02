/**
 * @typedef Artist
 * @property {number} id
 * @property {string} name
 * @property {string} description
 * @property {string} imageUrl
 */

// === Constants ===
const BASE = "https://fsa-crud-2aa9294fe819.herokuapp.com/api";
const COHORT = "/2505-FTB-ET-WEB-FT"; // Make sure to change this!
const RESOURCE = "/artists";
const API = BASE + COHORT + RESOURCE;

// === State ===
const state = {artists:[]};
let selectedArtist;

/** Updates state with all artists from the API */
async function getArtists() {
  try {
    let artistsJSON = [];
    console.log("getArtists API URL", API)
    const response = await fetch(`${API}`)
    if(await response.status === 200){
      artistsJSON = await response.json()
      console.log("Artists JSON", artistsJSON.data)
      if (artistsJSON.success)
        state.artists =  artistsJSON.data
    }
  }catch(err){
    const error = "getArtists error"
    error.case = err
    throw error;
  }
}

/** Updates state with a single artist from the API */
async function getArtist(id) {
  try {
    console.log("get single artist url", `${API}/id`)
  }catch(err){
    const error = "getArtist error"
    errorCase.case = err.case
    error.console(err, err)
    throw error
  }
}

// === Components ===

/** Artist name that shows more details about the artist when clicked */
function ArtistListItem(artist) {
  // TODO
}

/** A list of names of all artists */
async function ArtistList() {
  try {
    await getArtists()
    console.log("ArtistList function, state.artists", state.artists)
    const listSection = document.querySelector("#lineup")
    const lineupHeader = document.createElement('h2')
    //get [Promise Object] in section html before anything gets added. DO NOT REMOVE
    listSection.innerText = ''
    //Make all section HTML from scratch
    lineupHeader.innerText = `Lineup`
    listSection.appendChild(lineupHeader)
    state.artists.forEach(artist =>  {
      const artistName = document.createElement('p')
      selectedArtist = artist
      artistName.addEventListener("click", () => ArtistDetails())
      artistName.setAttribute("id", artist.id)
      artistName.innerText = artist.name
      listSection.appendChild(artistName)
      }, (err) => {
        console.err
      })
  } catch(err) {
    const error = "Artist List error";
    const errCase =err.case
    console.error(error, err, errCase);
  }
}

/** Detailed information about the selected artist */
function ArtistDetails() {
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
      <section id = "lineup" class = "lineup">
        <h2>Lineup</h2>
        <ArtistList></ArtistList>
      </section>
      <section id="selected">
        <h2>Artist Details</h2>
        <ArtistDetails></ArtistDetails>
      </section>
    </main>
  `;
  $app.querySelector("ArtistList").replaceWith(ArtistList());
  $app.querySelector("ArtistDetails").replaceWith(ArtistDetails());
}

async function init() {
  await getArtists();
  await render();
}

init()