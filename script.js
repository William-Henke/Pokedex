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
                section.className = "pokeChart";

                let picture1 = document.createElement('div');
                picture1.className = "pokeStats";
                let paragraph1 = document.createElement('p');
                paragraph1.innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1);
                picture1.append(paragraph1);
                let image1 = document.createElement('img');
                image1.src = data.sprites.front_default;
                image1.className = "image";
                picture1.append(image1);


                let picture2 = document.createElement('div');
                picture2.className = "pokeStats";
                let paragraph2 = document.createElement('p');
                paragraph2.innerHTML = "Shiny " + data.name.charAt(0).toUpperCase() + data.name.slice(1);
                picture2.append(paragraph2);
                let image2 = document.createElement('img');
                image2.src = data.sprites.front_shiny;
                image2.className = "image";
                picture2.append(image2);
                
                section.appendChild(picture1);
                section.appendChild(picture2);
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

