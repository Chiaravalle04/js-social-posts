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

// creazione posts
for (let i = 0; i < posts.length; i++) {

    // post container generale
    let postContainer = document.createElement('div');

    postContainer.classList.add('post');

    generalContainer.append(postContainer);

    //header del post
    let headerPost = document.createElement('div');

    headerPost.classList.add('post__header');

    postContainer.append(headerPost);

    // Immagine, Nome e Data
    let postMetaContainer = document.createElement('div');

    postMetaContainer.classList.add('post-meta');

    headerPost.append(postMetaContainer);

    // Container immagine profilo
    let profileImgContainer = document.createElement('div');

    profileImgContainer.classList.add('post-meta__icon');

    postMetaContainer.append(profileImgContainer);

    // Immagine profilo
    let profileImg = document.createElement('img');

    profileImg.classList.add('profile-pic');

    profileImgContainer.append(profileImg);

    if (posts[i].author.image == null) {

        posts[i].author.image = 'https://cdn.arstechnica.net/wp-content/uploads/archive/02-16-2011/facebook_head.jpg';

    }

    profileImg.src = posts[i].author.image;

    // Container Nome e Data
    let ndContainer = document.createElement('div');

    ndContainer.classList.add('post-meta__data');

    postMetaContainer.append(ndContainer);

    // Nome autore post
    let authorPost = document.createElement('div');

    authorPost.classList.add('post-meta__author');

    ndContainer.append(authorPost);

    authorPost.innerHTML = posts[i].author.name;

    // Data del post 
    let datePost = document.createElement('div');

    datePost.classList.add('post-meta__time');

    ndContainer.append(datePost);

    datePost.innerHTML = posts[i].created;

    // Caption post
    let caption = document.createElement('div');

    caption.classList.add('post__text');

    postContainer.append(caption);

    caption.innerHTML = posts[i].content;

    // Container immagine post
    let containerPostImg = document.createElement('div');

    containerPostImg.classList.add('post__image');

    postContainer.append(containerPostImg);

    // Immagine post
    let postImg = document.createElement('img');

    containerPostImg.append(postImg);

    postImg.src = posts[i].media;

    
    // Footer post 
    let footerPost = document.createElement('div');

    footerPost.classList.add('post__footer');

    postContainer.append(footerPost);

    // Likes container generale
    let likesContainerGeneral = document.createElement('div');

    likesContainerGeneral.classList.add('likes', 'js-likes');

    footerPost.append(likesContainerGeneral);

    // Likes container
    let likesContainer = document.createElement('div');

    likesContainer.classList.add('likes__cta');

    likesContainerGeneral.append(likesContainer);

    // button Like 
    let buttonLike = document.createElement('button');

    buttonLike.classList.add('like-button', 'js-like-button');

    buttonLike.setAttribute('type', 'button');

    likesContainer.append(buttonLike);

    // Icon
    let icon = document.createElement('i');

    icon.classList.add('like-button__icon', 'fas', 'fa-thumbs-up');

    icon.setAttribute('aria-hidden', 'true');

    buttonLike.append(icon);

    // Like label
    let likeLabel = document.createElement('span');

    likeLabel.classList.add('like-button__label');

    buttonLike.append(likeLabel);

    likeLabel.innerHTML = 'Mi Piace';

    // Likes counter
    let likesCounter = document.createElement('div');

    likesCounter.classList.add('likes__counter');

    likesContainerGeneral.append(likesCounter);

    // likes number 
    let likesNumber = document.createElement('b');

    likesNumber.classList.add('js-likes-counter');

    likesNumber.setAttribute('id', 'like-counter' + posts[i].id);

    likesNumber.innerHTML = posts[i].likes;

    // Likes number label
    let likesNumberLabel = document.createElement('span');

    likesCounter.append(likesNumberLabel);

    likesNumberLabel.append('Piace a ', likesNumber, ' persone' );

    // click bottone like
    buttonLike.addEventListener('click',
    
        () => {

            buttonLike.classList.add('clicked');

            likesNumber.innerHTML = posts[i].likes + 1;

            arrayLikes.push(posts[i].id);

            console.log(arrayLikes)

        }
    
    )

};
