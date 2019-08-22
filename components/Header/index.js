// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const header = document.createElement('div');
    header.classList.add('header');

    const headerDate = document.createElement('span');
    headerDate.classList.add('date');
    headerDate.appendChild(document.createTextNode('SMARCH 28, 2019'));
    header.appendChild(headerDate);

    const headerTitle = document.createElement('h1');
    headerTitle.appendChild(document.createTextNode('Lambda Times'));
    header.appendChild(headerTitle);

    const headerTemp = document.createElement('span');
    headerTemp.classList.add('temp');
    headerTemp.appendChild(document.createTextNode('98°'));
    header.appendChild(headerTemp);

     document.querySelector('.header-container').appendChild(header);
}

 Header();

