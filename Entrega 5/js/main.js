document.getElementById('get-book-data-btn').addEventListener('click', function() {
    var isbn = document.getElementById('isbn-select').value;
    
    fetch('https://openlibrary.org/api/books?bibkeys=ISBN:' + isbn + '&jscmd=data&format=json')
      .then(response => response.json())
      .then(data => {
        var bookData = data['ISBN:' + isbn];
        var title = bookData.title;
        var authors = bookData.authors.map(author => author.name).join(', ');
        var coverUrl = bookData.cover.medium;   
        var bookInfoDiv = document.getElementById('book-info');
        bookInfoDiv.innerHTML = `
          <h2>${title}</h2>
          <p>Author(s): ${authors}</p>
          <img src="${coverUrl}" alt="Book Cover">
        `;
      })
      .catch(error => {
        console.error('Error fetching book data:', error);
      });
  });
  