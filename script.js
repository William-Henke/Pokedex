// let input = document.getElementById('input');
// let button = document.getElementById('button').addEventListener('click', lowerCaser);





// function lowerCaser() {
//     return imput.toLowerCase();
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
                let image1 = document.createElement('img');
                let image2 = document.createElement('img');
                image1.src = data.sprites.front_default;
                section.append(image1);
                image2.src = data.sprites.front_shiny;
                section.append(image2);
                let paragraph1 = document.createElement('p');
                paragraph1.innerHTML = data.name.toUpperCase();
                section.append(paragraph1);
                let paragraph2 = document.createElement('p');
                paragraph2.innerHTML = "SHINY " + data.name.toUpperCase();
                section.append(paragraph2);
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

