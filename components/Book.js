export function Book(book) {
    return `

    <div class="card mb-3" style="width: 18rem;">
        <img src="${book.formats['image/jpeg']}" class="card-img-top" alt="...">
        <div class="card-body">
             <h5 class="card-title">${book.title}</h5>
             <p class="card-text">Downloaded: ${book.download_count} times</p>
             <a href="view-book.html?id=${book.id}" class="btn btn-sm btn-outline-secondary">Details</a>
        </div>
  </div>
  
  
  `

}