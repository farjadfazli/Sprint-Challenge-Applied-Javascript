// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
function createArticleCard(article) {

    const card = document.createElement('div');
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.appendChild(document.createTextNode(article.headline));
    card.appendChild(headline);

    const author = document.createElement('div');
    author.classList.add('author');

    const authorImgContainer = document.createElement('div');
    authorImgContainer.classList.add('img-container');

    
    const authorImg = document.createElement('img');
    authorImg.src = article.authorPhoto;
    authorImgContainer.appendChild(authorImg);
    author.appendChild(authorImgContainer);
    
    const author_name = document.createElement('span');
    author_name.appendChild(document.createTextNode(`By ${article.authorName}`));
    author.appendChild(author_name);
    card.appendChild(author);

    return card;
}

const articleFragment = document.createDocumentFragment();
const articles = document.querySelector('.cards-container');

 axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(articleList => {
        const list = articleList.data.articles;
        Object.keys(list).forEach(topic => {
            list[topic].forEach(article => {
                const card = createArticleCard(article);
                card.dataset.topic = topic;
                articleFragment.appendChild(card)
            });
        });
    })
    .then(() => articles.appendChild(articleFragment));