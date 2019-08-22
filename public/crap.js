const gotta = "https://pokeapi.co/api/v2/pokemon/";
let url;

const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const pokedex = document.getElementById('modal-footer');

const section = document.querySelector('section');


let modal = document.getElementById("myModal");


// Get the button that opens the modal
let input = document.getElementById("imgAlter");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
input.onclick = function() {
  modal.style.display = "block";

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";

  }
}

searchForm.addEventListener('submit', fetchResults); 

function fetchResults(e) { //event handling function
   e.preventDefault(); //prevents page refresh
                        // Assemble the full URL
   url = gotta + searchTerm.value ;
   console.log(url);                  
                        
   fetch(url)
    .then(function(result) {
    return result.json(); //2
    })
    .then(function(json) {
    displayResults(json); 
    });
};





function displayResults(data) {
  console.log("Results", data);

    //this looks horrible but at least it works
    let grape = document.getElementById("name");
    let cantaloupe = document.getElementById("type");
    let honeydew = document.getElementById("type2");
    let orange = document.getElementById("abilities");
    let tangerine = document.getElementById("abilities2");
    let pear = document.getElementById("height");
    let banana = document.getElementById("weight");
    let apple = document.getElementById("hp");
    let starFruit = document.getElementById("atk");
    let dragonFruit = document.getElementById("def");
    let passionFruit = document.getElementById("spAtk");
    let strawberry = document.getElementById("spDef");
    let cherry = document.getElementById("speed");
    
    while (grape.firstChild){
      grape.removeChild(grape.firstChild);
    }
    while (cantaloupe.firstChild){
      cantaloupe.removeChild(cantaloupe.firstChild);
    }
    while (honeydew.firstChild){
      honeydew.removeChild(honeydew.firstChild);
    }
    while (orange.firstChild){
      orange.removeChild(orange.firstChild);
    }
    while (tangerine.firstChild){
      tangerine.removeChild(tangerine.firstChild);
    }
    while (pear.firstChild){
      pear.removeChild(pear.firstChild);
    }
    while (banana.firstChild){
      banana.removeChild(banana.firstChild);
    }
    while (apple.firstChild){
      apple.removeChild(apple.firstChild);
    }
    while (starFruit.firstChild){
      starFruit.removeChild(starFruit.firstChild);
    }
    while (dragonFruit.firstChild){
      dragonFruit.removeChild(dragonFruit.firstChild);
    }
    while (passionFruit.firstChild){
      passionFruit.removeChild(passionFruit.firstChild);
    }
    while (strawberry.firstChild){
      strawberry.removeChild(strawberry.firstChild);
    }
    while (cherry.firstChild){
      cherry.removeChild(cherry.firstChild);
    }

    let img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + searchTerm.value + ".png";
    document.getElementById("sprite").src =img;

    let name = data.name;
    let type = data.types[0].type.name;
    let abilities = data.abilities[0].ability.name;
    let weight = data.weight;
    let height = data.height;
    let hp = data.stats[0].base_stat;
    let atk = data.stats[1].base_stat;
    let def = data.stats[2].base_stat;
    let spAtk = data.stats[3].base_stat;
    let spDef = data.stats[4].base_stat;
    let speed = data.stats[5].base_stat;

    let nameEl = document.getElementById("name");
    let typeEl = document.getElementById("type");
    let typeEl2 = document.getElementById("type2");
    let abilitiesEl = document.getElementById("abilities");
    let abilities2El = document.getElementById("abilities2");
    let heightEl = document.getElementById("height");
    let weightEl = document.getElementById("weight");
    let hpEl = document.getElementById("hp");
    let atkEl = document.getElementById("atk");
    let defEl = document.getElementById("def");
    let spAtkEl = document.getElementById("spAtk");
    let spDefEl = document.getElementById("spDef");
    let speedEl = document.getElementById("speed");
    //let emptyEl = document.getElementById("empty");
    
  
    
    nameEl.append(name);
    typeEl.append(type);
      if (data.types.length > 1){
        let type2 = data.types[1].type.name;
        typeEl2.append(type2);
      }
    abilitiesEl.append(abilities);
      if (data.abilities.length > 1){
        let abilities2 = data.abilities[1].ability.name;
        abilities2El.append(abilities2);
      }
    weightEl.append(weight);
    heightEl.append(height);
    hpEl.append(hp);
    atkEl.append(atk);
    defEl.append(def);
    spAtkEl.append(spAtk);
    spDefEl.append(spDef);
    speedEl.append(speed);
   
    if (searchForm !== ""){
      document.getElementById("myForm").reset();
    }
   
    
    }
