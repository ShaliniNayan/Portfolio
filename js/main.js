// fixing of hamburger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu-mobile');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.a-links').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

// Create the mobile object with elements
const project = [
  {
    // card 1 details
    id: '1',
    cardTitle: 'Leaderboard',
    description:
      'This is a JavaScript project for a Leaderboard list app, which uses modern web development tools and techniques such as webpack and ES6 modules.',
    company: 'MICROVERSE',
    cardTitle2: 'Leaderboard',
    description2:
      'This is a JavaScript project for a Leaderboard list app, which uses modern web development tools and techniques such as webpack and ES6 modules.',
    company2: 'MICROVERSE',
    no: 'd1',
    cardImage2: './image/leaderboard.png" alt="project1.png',
    role2: 'Front-End Dev',
    cardImage:
      '<img class="card-image" src="./image/leaderboard.png" alt="project1.png"/>',
    skills2: ['HTML', 'CSS', 'Javascript'],
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Back End Dev',
    skills: ['HTML', 'CSS', 'Javascript'],
    counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    year: '2023',
  },
  // card2 details
  {
    id: '2',
    cardTitle: 'Space Travel App',
    description:
      'This is the Space Travel Hub website created with React using CRA CLI. It describes a number of features related to the rockets, and missions associated with providing commercial and scientific space travel services.',
    company: 'Microverse',
    cardTitle2: 'Space Travel App',
    description2:
      'This is the Space Travel Hub website created with React using CRA CLI. It describes a number of features related to the rockets, and missions associated with providing commercial and scientific space travel services.',
    company2: 'Microverse',
    no: 'd3',
    cardImage2: './image/space_travel.PNG" alt="project1.png',
    role2: 'Full Stack Dev',
    skills2: ['HTML', 'CSS', 'React', 'Javascript'],
    cardImage:
      '<img class="card-image" src="./image/space_travel.PNG" alt="project1.png" />',
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Front-End Dev',
    skills: ['HTML', 'CSS', 'Javascript'],
    counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    year: '2023',
  },
  // card3 Details
  {
    id: '3',
    cardTitle: 'Math Magician',
    description:
      'This project is a calculator app called Math-Magician that allows users to perform simple arithmetic calculations. It was built using React, a popular JavaScript library for building user interfaces.',
    company: 'Microverse',
    cardTitle2: 'Math Magician',
    description2:
      'This project is a calculator app called Math-Magician that allows users to perform simple arithmetic calculations. It was built using React, a popular JavaScript library for building user interfaces.',
    company2: 'Microverse',
    no: 'd4',
    cardImage2: './image/calculator.png" alt="project1.png',
    role2: 'Front-End Dev',
    skills2: ['HTML', 'CSS', 'React', 'Javascript'],
    cardImage:
      '<img class="card-image" src="./image/calculator.png" alt="project1.png" alt="project4.png" />',
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Back End Dev',
    skills: ['HTML', 'CSS', 'React', 'Javascript'],
    counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    year: '2023',
  },
  // card4 Details
  {
    id: '4',
    cardTitle: 'Budget App',
    description:
      'Budget-app is a mobile web application designed for efficient budget management. Users can register, log in, add transactions to categories, and monitor their expenses. With secure authentication, a PostgreSQL database, and comprehensive testing, this app ensures seamless and secure budget tracking.',
    company: 'Microverse',
    cardTitle2: 'Budget App',
    description2:
      'Budget-app is a mobile web application designed for efficient budget management. Users can register, log in, add transactions to categories, and monitor their expenses. With secure authentication, a PostgreSQL database, and comprehensive testing, this app ensures seamless and secure budget tracking.',
    company2: 'Microverse',
    no: 'd2',
    cardImage2: './image/budget.png" alt="project1.png',
    role2: 'Back-End Dev',
    skills2: ['Ruby on Rails', 'PostgreSQL'],
    cardImage:
      '<img class="card-image" src="./image/budget.png" alt="project1.png" alt="project1.png" />',
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Back-End Dev',
    skills: ['Ruby on Rails', 'PostgreSQL'],
    counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    year: '2023',
  },
];

// Create the mobile modal object with elements
const modals = [
  {
    // card 1 details
    cardTitle: 'Leaderboard',
    description:
      'This is a JavaScript project for a Leaderboard list app, which uses modern web development tools and techniques such as webpack and ES6 modules.',
    company: 'Microverse',
    cardTitle2: 'Leaderboard',
    no: 'd1',
    description2:
      'This is a JavaScript project for a Leaderboard list app, which uses modern web development tools and techniques such as webpack and ES6 modules. This simple web page is built using webpack, es6 and served by a webpack dev server.',
    company2: 'Microverse',
    cardImage2: './image/leaderboard.png" alt="project1.png"',
    role2: 'Front-End Dev',
    skills2: ['HTML', 'CSS', 'Javascript'],
    cardImage: './image/leaderboard.png" alt="project1.png"',
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Front-End Dev',
    id: '1',
    skills: ['HTML', 'CSS', 'Javascript'],
    counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    year: '2023',
    sourceLink: 'https://shalininayan.github.io/Leaderboard/',
    demoLink: 'https://github.com/ShaliniNayan/Leaderboard',
  },
  // card2 details
  {
    cardTitle: 'Space Travel',
    description:
      'This is the Space Travel Hub website created with React using CRA CLI.',
    company: 'Microverse',
    cardTitle2: 'Space Travel App',
    no: 'd3',
    description2:
      'This is the Space Travel Hub website created with React using CRA CLI. It describes a number of features related to the rockets, and missions associated with providing commercial and scientific space travel services.',
    company2: 'Microverse',
    cardImage2: './image/space_travel.PNG" alt="project3.png"',
    role2: 'Front-End Dev',
    skills2: ['HTML', 'React', 'Javascript'],
    cardImage: './image/space_travel.PNG" alt="project3.png"',
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Front-End Dev',
    id: '3',
    skills: ['HTML', 'CSS', 'Javascript'],
    counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    year: '2023',
    sourceLink: 'https://spacetravelers-bfrl.onrender.com/',
    demoLink: 'https://github.com/ShaliniNayan/reactSpaceTravelers',
  },
  // card3 Details
  {
    cardTitle: 'Math Magician',
    description:
      'This project is a calculator app called Math-Magician that allows users to perform simple arithmetic calculations. It was built using React, a popular JavaScript library for building user interfaces.',
    company: 'Microverse',
    cardTitle2: 'Math Magician',
    description2:
      'This project is a calculator app called Math-Magician that allows users to perform simple arithmetic calculations. It was built using React, a popular JavaScript library for building user interfaces.',
    company2: 'Microverse',
    no: 'd4',
    cardImage2: './image/calculator.png" alt="project1.png',
    role2: 'Front-End Dev',
    skills2: ['HTML', 'CSS', 'React', 'Javascript'],
    cardImage:
      '<img class="card-image" src="./image/calculator.png" alt="project1.png" alt="project4.png" />',
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Back End Dev',
    skills: ['HTML', 'CSS', 'React', 'Javascript'],
    counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    year: '2023',
    sourceLink: 'https://math-magician-oh57.onrender.com/',
    demoLink: 'https://github.com/ShaliniNayan/math-magicians',
  },
  // card4 Details
  {
    cardTitle: 'Budget App',
    description:
      'Budget-app is a mobile web application designed for efficient budget management. Users can register, log in, add transactions to categories, and monitor their expenses. With secure authentication, a PostgreSQL database, and comprehensive testing, this app ensures seamless and secure budget tracking.',
    company: 'Microverse',
    cardTitle2: 'Budget App',
    description2:
      'Budget-app is a mobile web application designed for efficient budget management. Users can register, log in, add transactions to categories, and monitor their expenses. With secure authentication, a PostgreSQL database, and comprehensive testing, this app ensures seamless and secure budget tracking.',
    company2: 'Microverse',
    no: 'd2',
    cardImage2: './image/budget.png" alt="project1.png',
    role2: 'Back-End Dev',
    skills2: ['Ruby on Rails', 'PostgreSQL'],
    cardImage:
      '<img class="card-image" src="./image/budget.png" alt="project1.png" alt="project1.png" />',
    counter1: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    role: 'Back-End Dev',
    skills: ['Ruby on Rails', 'PostgreSQL'],
    counter2: '<img src="./assets/images/Counter.png" alt="Counter.png" />',
    year: '2023',
    sourceLink: 'https://budget-app-shalini.onrender.com/users/sign_in',
    demoLink: 'https://github.com/ShaliniNayan/Budget-app-Shalini',
  },
];

window.onload = function loader() {
  // Cards section for the mobile differs from desktop
  // query card section element to hold cards
  const mobileCardContainer = document.querySelector('.projects-section');
  function addMobileCard() {
    let mCard = '';
    project.forEach((cards) => {
      let skills = '';
      for (let i = 0; i < cards.skills.length; i += 1) {
        skills += `<li>${cards.skills[i]}</li>`;
      }
      mCard += `<div class="card" >
        ${cards.cardImage}
        <div class="tonic-area">
          <h2 class="cards-details">${cards.cardTitle}</h2>
          <div class="highlights">
            <span class="highlight-text">${cards.company}</span>
            ${cards.counter1}
            <span class="countertext">${cards.role}</span>
            ${cards.counter2}
            <span class="year">${cards.year}</span>
          </div>
          <article class="card-description">
            <p>
            ${cards.description}
            </p>
          </article>
          <ul class="skills skills-js">
          ${skills}
          </ul>
          <a href="#${cards.id}" class="popup" >See Project</a>
        </div>
      </div>`;
    });
    // id="popup-${cards.id}"

    mobileCardContainer.innerHTML = mCard;
  }

  // starts of the desktop cards
  const desktopContainer = document.querySelector('.projects-section-desktop');

  function addDesktopCard() {
    let dCard = '';
    project.forEach((cards, index) => {
      let skills2 = '';
      for (let i = 0; i < cards.skills2.length; i += 1) {
        skills2 += `<li>${cards.skills2[i]}</li>`;
      }

      if (index === 1 || index === 3) {
        dCard += `<div class="card project2">
        <img class="card-image" src="${cards.cardImage2}" alt="project1.png"/>'
      <div class="tonic-area">
        <h2 class="cards-details">${cards.cardTitle2}</h2>
        <div class="highlights">
          <span class="highlight-text">${cards.company2}</span>
          ${cards.counter1}
          <span class="countertext">${cards.role2}</span>
          ${cards.counter2}
          <span class="year">${cards.year}</span>
        </div>
        <article class="card-description">
          <p>
          ${cards.description2}
          </p>
        </article>
        <ul class="skills skills-js">
        ${skills2}
        </ul>
        <a href ="#${cards.no}" class="popup">See Project</a>
      </div>
    </div>`;
      } else {
        dCard += `<div class="card">
        <img class="card-image" src="${cards.cardImage2}" alt="project1.png"/>'
      <div class="tonic-area">
        <h2 class="cards-details">${cards.cardTitle2}</h2>
        <div class="highlights">
          <span class="highlight-text">${cards.company2}</span>
          ${cards.counter1}
          <span class="countertext">${cards.role2}</span>
          ${cards.counter2}
          <span class="year">${cards.year}</span>
        </div>
        <article class="card-description">
          <p>
          ${cards.description2}
          </p>
        </article>
        <ul class="skills skills-js">
        ${skills2}
        </ul>
        <a href="#${cards.no}" class="popup">See Project</a>
      </div>
    </div>`;
      }
    });
    desktopContainer.innerHTML = dCard;
  }

  const mobileModalContainer = document.querySelector('.mobile-popup-window');
  function addMobileModal() {
    let modalCard = '';
    modals.forEach((cards, index) => {
      let skills = '';
      for (let i = 0; i < cards.skills.length; i += 1) {
        skills += `<li>${cards.skills[i]}</li>`;
      }
      modalCard += `<div class="overlays" id="${index + 1}">
        <div class="modals" id="modal1"> 
            <h2 class="title">${cards.cardTitle}</h2>
            <a href="#" class="close-btn">&times;</a>
            <ul class="skills skills-js skills-js-top">
            ${skills}
            </ul>
    
          <article class="card-description">
              <p>
              ${cards.description}
                </p>
          </article>
          
          <div class="border"></div>
          <div class="modal-links">
            <a href="${
              cards.sourceLink
            }" target="_blank" rel="noopener noreferrer"><span class="see-link">See live</span>
            <img src="./assets/icons/live.png"></a>
            <a href="${
              cards.demoLink
            }" target="_blank" rel="noopener noreferrer"><span class="see-link">See Source</span>
            <img src="./assets/icons/giticon.png">
            </a>
          </div>
        </div>
    </div>`;
    });
    mobileModalContainer.innerHTML = modalCard;
  }

  const desktopModalContainer = document.querySelector('.desktop-popup-window');
  function addDesktopModal() {
    let desktopModalCard = '';
    modals.forEach((cards) => {
      let skills2 = '';
      for (let i = 0; i < cards.skills2.length; i += 1) {
        skills2 += `<li>${cards.skills2[i]}</li>`;
      }
      desktopModalCard += `<div class="desktopModal" id ="${cards.no}">
          <div class="card">
          <a href="#" class="close-btn">&times;</a>
          <div class="tonic-area">
              <h2 class="cards-details">${cards.cardTitle2}</h2>
              <ul class="skills skills-js">
              ${skills2}
              </ul>
          </div>
          <div class="tonic-area2">
            
            <article class="cards-description">
              <p>
              ${cards.description2}
                 </p>
            </article>
            <div>
            <div class="border"></div>
              <div class="modal-links">
              <a href="${cards.sourceLink}" target="_blank" rel="noopener noreferrer"><span class="see-link">See live</span>
              <img src="./assets/icons/live.png"></a>
              <a href="${cards.demoLink}" target="_blank" rel="noopener noreferrer"><span class="see-link">See Source</span>
              <img src="./assets/icons/giticon.png">
              </a>
              </div>
              </div>
          </div>
          </div>
        </div>`;
    });
    desktopModalContainer.innerHTML = desktopModalCard;
  }

  // call function
  addMobileCard();
  addDesktopCard();
  addMobileModal();
  addDesktopModal();

  // Form Validation
  const email = document.getElementById('email');
  const form = document.getElementById('contact');
  const errorMsg = document.getElementById('error-msg');

  form.addEventListener('submit', (event) => {
    if (email.value !== email.value.toLowerCase()) {
      errorMsg.style.visibility = 'visible';
      event.preventDefault();
    } else if (email.validity.typeMismatch) {
      errorMsg.textContent = 'Please enter a valid email address';
      errorMsg.style.validity = 'visible';
      event.preventDefault();
    } else {
      errorMsg.style.visibility = 'hidden';
    }
  });
};
