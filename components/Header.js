export function Header() {
    return `

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="index.html">Elibraria</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <a class="nav-link" aria-current="page" href="index.html">Home</a>
          <a class="nav-link" href="fav-books.html">My 💖 Books</a>
          <a class="nav-link" href="cart.html">cart</a>
        </div>
         <input class="form-control me-2 ms-2 w-25" type="search" id="search" placeholder="Search" aria-label="Search" />

      </div>
    </div>
  </nav>
 `
}