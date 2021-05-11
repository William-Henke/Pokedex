// let input = document.getElementById('input');
// let button = document.getElementById('button').addEventListener('click', lowerCaser);
// let more = document.getElementById('moreButton').onclick(morePokemon());
// let less = document.getElementById('lessButton').onclick(lessPokemon());




// function lowerCaser() {
//     return imput.toLowerCase();
// }


// function morePokemon() {

// }

// function lessPokemon() {

// }





// fetch('https://pokeapi.co/api/v2/pokemon/' + searchItem);

let pokemon;
let pokedex = document.getElementById('pokedex');

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(data => data.json())
    .then(data => {
        pokemon = data;
        console.log('data from fetch', data)
        data.results.forEach(ele => {
            getData(ele.url)
            .then(data => {
                let section = document.createElement('div');
                section.className = "pokeChart";

                let picture1 = document.createElement('div');
                picture1.className = "pokeStats";
                let paragraph1 = document.createElement('p');
                paragraph1.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1);
                paragraph1.className = "paragraph";
                picture1.append(paragraph1);
                let image1 = document.createElement('img');
                image1.src = data.sprites.front_default;
                image1.className = "image";
                picture1.append(image1);


                let picture2 = document.createElement('div');
                picture2.className = "pokeStats";
                let paragraph2 = document.createElement('p');
                paragraph2.innerHTML = "Shiny " + data.name.charAt(0).toUpperCase() + data.name.slice(1);
                paragraph2.className = "paragraph";
                picture2.append(paragraph2);
                let image2 = document.createElement('img');
                image2.src = data.sprites.front_shiny;
                image2.className = "image";
                picture2.append(image2);

                // let information = document.createElement('div');
                // information.className = "pokeStats"

                // let = infoButton = document.createElement('button');
                // infoButton.innerHtml = "More Info";
                // infoButton.className = "informationButton";
                // information.append(infoButton);
                
                section.appendChild(picture1);
                section.appendChild(picture2);
                // section.appendChild(information);
                pokedex.appendChild(section);
            })
        })
    })
.catch(err => console.log(err));

async function getData(url) {
    let result = await fetch(url);
    let finalResult = result.json();
    return finalResult;
}






let poker;

let arrayer = [];

fetch('https://pokeapi.co/api/v2/pokemon/') 
    .then(data => data.json())
    .then(data => {
        poker = data;
        console.log('data from fetch', data)
        data.results.forEach(ele => {
            getData(ele.url)
            .then(data => {
                let pokerer = {
                    pokeName: data.species.name,
                    pokeType: data.types[0].type.name,
                    moveNum: data.moves.length
                }
                arrayer.push([pokerer]);
                // arrayer.push();
                // arrayer.push();
                console.log(arrayer);
            })
        })
    })

async function getDatar(url) {
    let resultr = await fetch(url);
    let finalResultr = result.json();
    return finalResult;
}