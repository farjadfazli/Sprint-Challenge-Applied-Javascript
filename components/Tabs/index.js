// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function filter_topic(topic) {
    document.querySelectorAll(`div.card:not([data-topic="${topic}"])`).forEach(
        el => el.style.display = 'none'
    );
    document.querySelectorAll(`div.card[data-topic="${topic}"]`).forEach(
        el => el.style.display = 'block'
    );
}

const docFragment = document.createDocumentFragment();
const topics = document.querySelector('.topics');

 axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(topic_list => {
        topic_list.data.topics.forEach(topic => {
            const topicComponent = document.createElement('div');
            topicComponent.classList.add('tab');
            topicComponent.appendChild(document.createTextNode(topic));
            topicComponent.dataset.topic = topic === 'node.js' ? 'node' : topic;
            topicComponent.addEventListener('click', function () {
                filter_topic(this.dataset.topic);
            });
            docFragment.appendChild(topicComponent);
        });
    })
    .then(() => topics.appendChild(docFragment));