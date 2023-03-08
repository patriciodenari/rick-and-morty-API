const content = document.getElementById('content');
const API = 'https://rickandmortyapi.com/api/character';
const selectFilter = document.getElementById('filter');
const searchButton = document.getElementById('search');

/* Al clickear el boton de busqueda demuestra en el DOM los personajes a partir del valor del filtro */

searchButton.addEventListener('click', () => {
    bringData();
})

/* Hace una petición a la API */

async function bringData() {
    const response = await fetch(API)
    const data = await response.json()
    setTimeout(() => {
        createHTML(filter(data.results));
    }, 300);
}

/* Toma por parámetros un Array y Busca el valor de la opción elegida y si coincide con alguna propiedad de cada elemento del array */

function filter(array) {
    let filter = selectFilter.value;
    if (filter === 'All') {
        return array;
    } else if (filter === 'Male') {
        return array.filter((e) => e.gender === 'Male');
    } else if (filter === 'Female') {
        return array.filter((e) => e.gender === 'Female')
    } else if (filter === 'Human') {
        return array.filter((e) => e.species === 'Human')
    } else if (filter === 'Alien') {
        return array.filter((e) => e.species === 'Alien')
    } else if (filter === 'Alive') {
        return array.filter((e) => e.status === 'Alive')
    } else if (filter === 'Dead') {
        return array.filter((e) => e.status === 'Dead')
    } else if (filter === 'Unknown') {
        return array.filter((e) => e.status === 'unknown')
    } else {
        return
    }
}

/* Recibe por parámetros un array y por cada elemento crea una card con su imagen y una breve descripción */

function createHTML(array) {
    content.innerHTML = '';
    array.forEach((element) => {
        let div = document.createElement('div');
        div = `
        <div>
            <img src="${element.image}" alt="${element.name}" />
            <div class="card-info">
            <p><span class="category">Name:</span> ${element.name}</p>
            <p><span class="category">Species:</span> ${element.species}</p>
            <p><span class="category">Gender:</span> ${element.gender}</p>
            <p><span class="category">Status:</span> ${element.status}</p>
            <p><span class="category">Location:</span> ${element.location.name}</p>
            </div>
        </div>
        `
        content.innerHTML += div;
    })
}