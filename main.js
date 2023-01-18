const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        created: "2021-06-25"
    },
    
    {
        id: 2,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=112",
        author: {
            name: "Sofia Perlari",
            image: "https://unsplash.it/300/300?image=10"
        },
        likes: 120,
        created: "2021-09-03"
    },
   
    {
        id: 3,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=234",
        author: {
            name: "Chiara Passaro",
            image: "https://unsplash.it/300/300?image=20"
        },
        likes: 78,
        created: "2021-05-15"
    },
   
    {
        id: 4,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=24",
        author: {
            name: "Luca Formicola",
            image: null
        },
        likes: 56,
        created: "2021-04-03"
    },
    
    {
        id: 5,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=534",
        author: {
            name: "Alessandro Sainato",
            image: "https://unsplash.it/300/300?image=29"
        },
        likes: 95,
        created: "2021-03-05"
    }
];

// riferimento al container principale
const generalContainer = document.getElementById('container');

// contenitore likes
const arrayLikes = [];

// verifica bottone like
let verify = 0;

// creazione posts
for (let i = 0; i < posts.length; i++) {
    
    // conversione data nel formato italiano
    let americanDate = new Date (posts[i].created);

    let italianDate = americanDate.toLocaleDateString("it-IT");

    // post container generale
    let postContainer = document.createElement('div');

    postContainer.classList.add('post');

    generalContainer.append(postContainer);

    // header del post
    let headerPost = document.createElement('div');

    headerPost.classList.add('post__header');

    postContainer.append(headerPost);

    // immagine, nome e data
    let postMetaContainer = document.createElement('div');

    postMetaContainer.classList.add('post-meta');

    headerPost.append(postMetaContainer);

    // container immagine profilo
    let profileImgContainer = document.createElement('div');

    profileImgContainer.classList.add('post-meta__icon');

    postMetaContainer.append(profileImgContainer);

    // immagine profilo
    let profileImg = document.createElement('img');

    profileImg.classList.add('profile-pic');

    profileImgContainer.append(profileImg);

    if (posts[i].author.image === null) {

        let authorPostName = document.createElement('div');

        authorPostName.classList.add('not-img');

        profileImgContainer.append(authorPostName);

        authorPostName.innerHTML = posts[i].author.name.split(" ").map((word) => word[0]).join("");
            
    } else {

        profileImg.src = posts[i].author.image;

    }

    // container nome e data
    let ndContainer = document.createElement('div');

    ndContainer.classList.add('post-meta__data');

    postMetaContainer.append(ndContainer);

    // nome autore post
    let authorPost = document.createElement('div');

    authorPost.classList.add('post-meta__author');

    ndContainer.append(authorPost);

    authorPost.innerHTML = posts[i].author.name;

    // data del post 
    let datePost = document.createElement('div');

    datePost.classList.add('post-meta__time');

    ndContainer.append(datePost);

    datePost.innerHTML = italianDate;

    // caption post
    let caption = document.createElement('div');

    caption.classList.add('post__text');

    postContainer.append(caption);

    caption.innerHTML = posts[i].content;

    // container immagine post
    let containerPostImg = document.createElement('div');

    containerPostImg.classList.add('post__image');

    postContainer.append(containerPostImg);

    // immagine post
    let postImg = document.createElement('img');

    containerPostImg.append(postImg);

    postImg.src = posts[i].media;

    
    // footer post 
    let footerPost = document.createElement('div');

    footerPost.classList.add('post__footer');

    postContainer.append(footerPost);

    // likes container generale
    let likesContainerGeneral = document.createElement('div');

    likesContainerGeneral.classList.add('likes', 'js-likes');

    footerPost.append(likesContainerGeneral);

    // likes container
    let likesContainer = document.createElement('div');

    likesContainer.classList.add('likes__cta');

    likesContainerGeneral.append(likesContainer);

    // button Like 
    let buttonLike = document.createElement('button');

    buttonLike.classList.add('like-button', 'js-like-button');

    buttonLike.setAttribute('type', 'button');

    likesContainer.append(buttonLike);

    // icon
    let icon = document.createElement('i');

    icon.classList.add('like-button__icon', 'fas', 'fa-thumbs-up');

    icon.setAttribute('aria-hidden', 'true');

    buttonLike.append(icon);

    // like label
    let likeLabel = document.createElement('span');

    likeLabel.classList.add('like-button__label');

    buttonLike.append(likeLabel);

    likeLabel.innerHTML = 'Mi Piace';

    // likes counter
    let likesCounter = document.createElement('div');

    likesCounter.classList.add('likes__counter');

    likesContainerGeneral.append(likesCounter);

    // likes number 
    let likesNumber = document.createElement('b');

    likesNumber.classList.add('js-likes-counter');

    likesNumber.setAttribute('id', 'like-counter' + posts[i].id);

    likesNumber.innerHTML = posts[i].likes;

    // likes number label
    let likesNumberLabel = document.createElement('span');

    likesCounter.append(likesNumberLabel);

    likesNumberLabel.append('Piace a ', likesNumber, ' persone' );

    // click bottone like
    buttonLike.addEventListener('click',
    
        () => {

            verify++;

            if (verify == 1) {

                buttonLike.classList.add('clicked');

                likesNumber.innerHTML = posts[i].likes + 1;

                arrayLikes.push(posts[i].id);

                
            } else {

                buttonLike.classList.remove('clicked');

                likesNumber.innerHTML = posts[i].likes;

                verify = 0;

            }

        }
    
    )

};
