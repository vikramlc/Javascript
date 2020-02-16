const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const addMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');

const movies = [];

const updateUI = () => {
    if(movies.length === 0) {
        entryTextSection.style.display = "block";
    } else {
        entryTextSection.style.display = "none"; 
    }
};

const renderNewMovieElement = (title, image, rating) => {
    const newElement = document.createElement('li');
        newElement.className = "movie-element";
        newElement.innerHTML = `
            <div class="movie-element__image">
                <img src="${image}" alt="${title}">
            </div>
            <div class="movie-element__info">
                <h2>${title}</h2>
                <p>${rating}/5 stars</p>
            </div>
        `;

        const listRoot = document.getElementById('movie-list');  
        listRoot.append(newElement); 
};

const clearMovieInput = () => {
    for (const userInput of userInputs) {
        userInput.value = '';
    }
};

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const backdropClickHandler = () => {
    toggleMovieModal();
}

const cancelAddMovieHandler = () => {
    toggleMovieModal();
    clearMovieInput();
}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if(
        titleValue.trim() === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        +ratingValue < 1 ||
        +ratingValue > 5
      ) {
        alert('Please enter valid values (rating between 1 and 5).');
        return;
    }

    const movie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(movie);
    clearMovieInput();
    toggleMovieModal();
    updateUI();
    renderNewMovieElement(titleValue, imageUrlValue, ratingValue);
    console.log(movies);
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
addMovieButton.addEventListener('click', addMovieHandler);