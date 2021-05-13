let morePokemon = document.getElementById('morePokemon');
morePokemon.addEventListener('click', morePokes);

let mess = 0
let mas = 55;

let pokemon;
let pokedex = document.getElementById('pokedex');

////////////////////////////////////////////////////////////////////////////////////

function morePokes() {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=' + mess + '&limit=' + mas)
    .then(data => data.json())
    .then(data => {
        pokemon = data;
        console.log('data from fetch', data)
        data.results.forEach(ele => {
            getData(ele.url)
            .then(data => {
                let section = document.createElement('div');
                section.className = "pokeStats cardBackground";

                let paragraph1 = document.createElement('p');
                paragraph1.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1);
                paragraph1.className = "paragraph cardBackground";
                section.append(paragraph1);

                let paragraph2 = document.createElement('p');
                paragraph2.innerHTML = data.game_indices[3].game_index;
                paragraph2.className = "paragraph cardBackground";
                section.append(paragraph2);

                let image1 = document.createElement('img');
                image1.src = data.sprites.front_default;
                image1.className = "image cardBackground";
                section.append(image1);
                
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
mess = mess + 55;
mas = mas + 55;
}

///////////////////////////////////////////////////////////////
// Make a weight filter!!! ////////////////////////////////////
///////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let poker;

// let arrayer = [];

// fetch('https://pokeapi.co/api/v2/pokemon/') 
//     .then(data => data.json())
//     .then(data => {
//         poker = data;
//         console.log('data from fetch', data)
//         data.results.forEach(ele => {
//             getData(ele.url)
//             .then(data => {
//                 let pokerer = {
//                     pokeName: data.species.name,
//                     pokeType: data.types[0].type.name,
//                     moveNum: data.moves.length
//                 }
//                 arrayer.push([pokerer]);
//                 // arrayer.push();
//                 // arrayer.push();
//             })
//         })
//         console.log(arrayer);
//     })

// async function getDatar(url) {
//     let resultr = await fetch(url);
//     let finalResultr = result.json();yyy
//     return finalResult;
// }