// Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// id del post, numero progressivo da 1 a n
// nome autore,
// foto autore,
// data in formato americano (mm-gg-yyyy),
// testo del post,
// immagine (non tutti i post devono avere una immagine),
// numero di likes.
// Non è necessario creare date casuali Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.




// const posts = [
//     {
//         "id": 1,
//         "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
//         "media": "https://unsplash.it/600/300?image=171",
//         "author": {
//             "name": "Phil Mangione",
//             "image": "https://unsplash.it/300/300?image=15"
//         },
//         "likes": 80,
//         "created": "2021-06-25"
//     },
//     {
//         "id": 2,
//         "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
//         "media": "https://unsplash.it/600/400?image=112",
//         "author": {
//             "name": "Sofia Perlari",
//             "image": "https://unsplash.it/300/300?image=10"
//         },
//         "likes": 120,
//         "created": "2021-09-03"
//     },
//     {
//         "id": 3,
//         "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
//         "media": "https://unsplash.it/600/400?image=234",
//         "author": {
//             "name": "Chiara Passaro",
//             "image": "https://unsplash.it/300/300?image=20"
//         },
//         "likes": 78,
//         "created": "2021-05-15"
//     },
//     {
//         "id": 4,
//         "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
//         "media": "https://unsplash.it/600/400?image=24",
//         "author": {
//             "name": "Luca Formicola",
//             "image": null
//         },
//         "likes": 56,
//         "created": "2021-04-03"
//     },
//     {
//         "id": 5,
//         "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
//         "media": "https://unsplash.it/600/400?image=534",
//         "author": {
//             "name": "Alessandro Sainato",
//             "image": "https://unsplash.it/300/300?image=29"
//         },
//         "likes": 95,
//         "created": "2021-03-05"
//     }
// ];


// ------ //

const posts = [
    {
      id: 1,
      authorName: "Phil Mangione",
      authorImage: "https://unsplash.it/300/300?image=15",
      date: "06-25-2021",
      text: "Questo è il testo del primo post.",
      image: "https://unsplash.it/600/300?image=171",
      likes: 80
    },
    {
      id: 2,
      authorName: "Sofia Perlari",
      authorImage: "https://unsplash.it/300/300?image=10",
      date: "09-03-2021",
      text: "Questo è il testo del secondo post.",
      image: "https://unsplash.it/600/300?image=171",
      likes: 120
    },

    {
        id: 3,
        authorName: "Luciano Spalletti",
        authorImage: "https://unsplash.it/300/300?image=10",
        date: "09-03-2021",
        text: "Questo è il testo del terzo post.",
        image: "https://unsplash.it/600/300?image=171",
        likes: 20
      },

      {
        id: 4,
        authorName: "Giacomo Leopardi",
        authorImage: "https://unsplash.it/300/300?image=10",
        date: "09-03-2021",
        text: "Questo è il testo del quarto post.",
        image: "https://unsplash.it/600/300?image=171",
        likes: 1
      },  
  ];


//   Bonus - data in formato IT
  function itDate(dateString) {
    const [mm, dd, yyyy] = dateString.split("-");
    return `${dd}/${mm}/${yyyy}`;
  }
  
  
  
  function addPostHtml(post) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    
    
    const profileImage = post.authorImage ? `<img class="profile-pic" src="${post.authorImage}" alt="${post.authorName}">` :
      `<div class="profile-pic-default"><span>${createInitials(post.authorName)}</span></div>`;
    
    postElement.innerHTML = `
      <div class="post__header">
        <div class="post-meta">                    
          <div class="post-meta__icon">
            ${profileImage}                    
          </div>
          <div class="post-meta__data">
            <div class="post-meta__author">${post.authorName}</div>
            <div class="post-meta__time">${itDate(post.date)}</div>
          </div>                    
        </div>
      </div>
      <div class="post__text">${post.text}</div>
      ${post.image ? `<div class="post__image"><img src="${post.image}" alt=""></div>` : ''}
      <div class="post__footer">
        <div class="likes js-likes">
          <div class="likes__cta">
            <a class="like-button js-like-button" href="#" data-postid="${post.id}">
              <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
              <span class="like-button__label">Mi Piace</span>
            </a>
          </div>
          <div class="likes__counter">
            Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
          </div>
        </div> 
      </div>            
    `;
    
    return postElement;
  }
  
  
  function postsRendered(postsArray) {
    const container = document.getElementById('container');
    postsArray.forEach((post) => {
      container.appendChild(addPostHtml(post));
    });
  }
  postsRendered(posts);


// Likes //

  let likedPosts = [];

// Funzione per gestire il click sul bottone Mi Piace
function toggleLike(postId) {
    const likeButton = document.querySelector(`.js-like-button[data-postid="${postId}"]`);
    const likesCounter = document.querySelector(`#like-counter-${postId}`);
    let likes = parseInt(likesCounter.innerText);

    if (likedPosts.includes(postId)) {
        likes--;
        likedPosts = likedPosts.filter(id => id !== postId);
        likeButton.classList.remove('like-button--liked');
    } else {
        likes++;
        likedPosts.push(postId);
        likeButton.classList.add('like-button--liked');
    }

    likesCounter.innerText = likes;
}

document.querySelectorAll('.js-like-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const postId = parseInt(this.dataset.postid);
        toggleLike(postId);
    });
});
