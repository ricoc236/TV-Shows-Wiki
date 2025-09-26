const header = document.querySelector('header');
const headerLogo = document.createElement('img');
headerLogo.src = '/logo.png';
headerLogo.alt = 'TV Shows Wiki Logo';
headerLogo.className = 'logo';
headerLogo.style.height = '6rem';
const headerTitle = document.createElement('h1');
headerTitle.textContent = 'TV Shows Wiki';

const allShowsButton = document.createElement('button'); 
allShowsButton.textContent = 'All Shows';
allShowsButton.className = 'contrast all-shows-button';
allShowsButton.addEventListener('click', (e) => {
  e.preventDefault();
  const mainContent = document.getElementById('main-content');
  if (mainContent) {
    mainContent.scrollIntoView({ behavior: 'smooth' });
  }
});
header.appendChild(headerLogo);
header.appendChild(headerTitle);
header.appendChild(allShowsButton);
