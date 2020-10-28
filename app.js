let genre = 'mystery';

function appendBookToDom(title, author, cover){
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = title;
    document.querySelector('#display-book').append(bookTitle)

    const bookCover = document.createElement('img');
    bookCover.src = cover;
    bookCover.alt = title;
    document.querySelector('#display-book').append(bookCover);

    const bookAuthor = document.createElement('h5');
    bookAuthor.textContent = author;
    document.querySelector('#display-book').append(bookAuthor);

}

function fetchBook(genre) {
    fetch(`http://openlibrary.org/subjects/${genre}.json`)
    .then(res => res.json())
    .then((json) => {
        
        const randomBook = getRandomBook(json.works);
        const title = randomBook.title;
        const author = getAuthor(randomBook);
        const cover = `http://covers.openlibrary.org/b/ID/${randomBook.cover_id}-M.jpg`;

        appendBookToDom(title, author, cover);
})}


function getRandomBook (books) {
    const randomIndex = Math.floor(Math.random() * books.length)
    return books[randomIndex]
}

function getAuthor(book) {
    return book.authors[0].name
}

fetchBook(genre)