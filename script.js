const input = document.getElementById('search-input')
const button = document.getElementById('search-form')
const pkmnImg = document.getElementById('sprite-container')

const pName = document.getElementById('pokemon-name')
const pId = document.getElementById('pokemon-id')
const weight = document.getElementById('weight')
const height = document.getElementById('height')
const types = document.getElementById('types')
const hp = document.getElementById('hp')
const attack = document.getElementById('attack')
const defense = document.getElementById('defense')
const sAtk = document.getElementById('special-attack')
const sDef = document.getElementById('special-defense')
const spd = document.getElementById('speed')

const showPokemon = async () => {
   try {
     const pkmnNameOrId = input.value.toLowerCase()
     const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pkmnNameOrId}`)
     const data = await res.json()

     //Set Pokemon Main Info
     pName.textContent = `${data.name.toUpperCase()}`;
     pId.textContent = `#${data.id}`;
     weight.textContent = `Weight: ${data.weight}`;
     height.textContent = `Height: ${data.height}`;

     pkmnImg.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${data.name}"Front default sprite>`

     //Set Pokemon Stats
     hp.textContent = data.stats[0].base_stat;
     attack.textContent = data.stats[1].base_stat;
     defense.textContent = data.stats[2].base_stat;
     sAtk.textContent = data.stats[3].base_stat;
     sDef.textContent = data.stats[4].base_stat;
     speed.textContent = data.stats[5].base_stat;

     //Set Pokemon Types
     types.innerHTML = data.types.map(obj => 
       `<span class="type ${obj.type.name}">${obj.type.name}</span>`
     ).join("")
   } catch(e) {
     resetDisplay();
     alert("Pokémon not found")
     console.log(`Pokémon not found: ${err}`)
   }
};

const resetDisplay = () => {
  const sprite = document.getElementById('sprite');

  if(sprite) sprite.remove();

  pName.textContent = "";
  pId.textContent = "";
  weight.textContent ="";
  height.textContent = "";
  types.textContent = "";
  hp.textContent = "";
  attack.textContent = "";
  defense.textContent = "";
  sAtk.textContent = "";
  sDef.textContent = "";
  speed.textContent = "";
};

button.addEventListener('submit', e => {
  e.preventDefault();
  showPokemon();
});