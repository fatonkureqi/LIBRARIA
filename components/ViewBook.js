export function ViewBook(book) {
       let authors = '';
       if(book.authors.length) {
          book.authors.forEach(author => authors += `${author.name} (${author.birth_year} - ${author.death_year})<br />`)
       }
    return`
     <h1>${book.title}>/h1>
     <div class="row my-5">
       <div class="col-5 d-flex justify-content-center">
         <img src="${book.formats['image/jpeg']}" class="img-fluid" alt="${book.title}">
       </div>
       <div class="col-6 offset-1">
        <p>${authors}</p>
        <p>${book.bookshelves[0] }</p>
        <div class="d-flex"
          <button id="add-to-cart" class="btn btn-sm btn-outline-secondary">Add to cart</button>
          <button id="add-to-fav" class="btn btn-sm btn-outline-secondary mx-3">Add to fav.</button>
          <a href="${book.['formats']}" target="blank" class="btn btn-sm btn-outline-secondary">Download(${book.download_count})</a>
        </div>
       </div>
     </div>

    `
}
    


