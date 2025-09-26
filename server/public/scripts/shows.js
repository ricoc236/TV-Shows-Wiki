const renderShows = async () => {
  try {
    const response = await fetch('/shows');
    const data = await response.json();

    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';
    mainContent.className = 'container grid gap-3';

    if (data && data.length > 0) {
      data.forEach(show => {
        const card = document.createElement('article');
        card.className = 'card';

        const showImage = document.createElement('img');
        showImage.src = show.image;
        showImage.alt = show.title;

        const titleGroup = document.createElement('hgroup');
        const title = document.createElement('h3');
        title.textContent = show.title;
        const meta = document.createElement('p');
        meta.textContent = `⭐ ${show.rating} | Released: ${show.release_date}`;
        titleGroup.appendChild(title);
        titleGroup.appendChild(meta);

        const description = document.createElement('p');
        description.textContent =
          show.description.length > 120
            ? show.description.slice(0, 120) + '…'
            : show.description;

        const viewBtn = document.createElement('a');
        viewBtn.textContent = 'View Details';
        viewBtn.href = `/shows/${show.title.replace(/\s+/g, '-')}`;
        viewBtn.setAttribute('role', 'button');
        viewBtn.className = 'contrast';

        card.appendChild(showImage);
        card.appendChild(titleGroup);
        card.appendChild(description);
        card.appendChild(viewBtn);

        mainContent.appendChild(card);
      });
    } else {
      const message = document.createElement('h2');
      message.textContent = 'No Shows Available 😞';
      mainContent.appendChild(message);
    }
  } catch (err) {
    console.error(err);

  }
};
renderShows();

const renderShow = async () => {
  const title = decodeURIComponent(window.location.href.split('/').pop())
                  .replace(/-/g, ' ')
                  .trim();
  const response = await fetch('/shows');
  const data = await response.json();

  const showContent = document.getElementById('show-content');
  let show;

  if (data) {
    show = data.find(s => s.title.toLowerCase().trim() === title.toLowerCase());
  }

  if (show) {
    document.getElementById('image').src = show.image;
    document.getElementById('name').textContent = show.title;
    document.getElementById('rating').textContent = 'Rating: ' + show.rating;
    document.getElementById('release_date').textContent = 'Release Date: ' + show.release_date;
    document.getElementById('description').textContent = show.description;
    document.title = `TV-Shows-Wiki - ${show.title}`;
  } else {
    const message = document.createElement('h2');
    message.textContent = 'No Show Available 😞';
    showContent.appendChild(message);
  }
};

renderShow();

