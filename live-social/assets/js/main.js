const posts = [{
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// #1 Seleziono l'elemento della dom dove metter i posts  usando querySelector('.posts-list')
const postListElement = document.querySelector('.posts-list')
//console.log(postListElement);

// #2 creare markup da inserire nell'elemento della dom selezionato al punto 1

/**
 * Genera il markup da mettere per ciascun post
 * @param {Object} post The post object
 * @returns string
 */
function generateMarkup(post) {
    console.log(post); // {}
    const {
        id,
        content,
        media,
        author,
        likes,
        created
    } = post

    const markUp = `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${author.image}" alt="${author.name}">
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${author.name}</div>
                        <div class="post-meta__time"> ${created} (4 mesi fa)</div>
                    </div>
                </div>
            </div>
            <div class="post__text">
                ${content}
            </div>
            <div class="post__image">
                <img src="${media}" alt="">
            </div>
            <!-- TODO: replace static values -->
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div>
            </div>
        </div>
    `
    return markUp
}

// #3 Ciclo usando un forEach nell'array posts

posts.forEach((post, i) => {

    // loggo in console il singolo elemento
    //console.log(post, i);
    // richiamo la funzione generate markup (genero il markup per il post) e salvo l'output in una varibile



    const markupElement = generateMarkup(post)
    //console.log(markupElement);
    // #4 inserisco il markup definito nel punto 2 dentro all'elemento della dom selezionato

    postListElement.insertAdjacentHTML('beforeend', markupElement)

})




/* 
Milestone 3 - Se clicchiamo sul tasto "Mi Piace"
cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
*/

// clicchiamo sul tasto "Mi Piace"
// - seleziono tutti i pulsanti like dalla dom
const likesElements = document.querySelectorAll('.like-button')
console.log(likesElements); // ??
// ciclo nella lista di elementi 
likesElements.forEach((element, i) => {
    console.log(element);
    // per ciascun elemento aggiungo un event listener
    element.addEventListener('click', function () {
        console.log('Cliccato su un post');
        //cambiamo il colore al testo del bottone
        console.log(this);
        this.style.color = 'cornflowerblue'
        // incrementiamo il counter dei likes relativo
        // recuperare l'id del post cliccato
        const postId = this.getAttribute('data-postid');
        // selezioniamo il counter con i like dentro
        const likesCounterElement = document.getElementById('like-counter-' + postId)

        console.log(postId);
        console.log(likesCounterElement);
        // seleziono il post corrente
        const currentPost = posts[i]
        console.log(currentPost);
        // incremento il valore dei likes
        currentPost.likes++
        // aggiorno l'inner text del LikescounterElement
        likesCounterElement.innerText = currentPost.likes
        //Salvi amo in un secondo array gli id dei post ai quali abbiamo messo il like.
    })
})