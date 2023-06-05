/* https://rickandmortyapi.com/ */
/* https://rickandmortyapi.com/documentation/#character */
//console.log('probando');

function getCharacters(done){
    const results = fetch ('https://rickandmortyapi.com/api/character');
    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });   
}

getCharacters(data => {
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(/*html*/
        `
        <article>
            <div class="image-container">
                <img src="${personaje.image}" alt="personaje">
            </div>
            <h2>${personaje.name}</h2>
            <span>${personaje.status}</span>
        </article>
        `);
        //lo mando al main para que lo muestre
        const main = document.querySelector('#main');
        main.append(article);
    });
});


