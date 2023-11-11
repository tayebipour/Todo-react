// MENU
// <!-- container_circlye -->
export default function MENU() {
  return (
    <header>
    <section id="section-title">
    <nav className="navbar navbar-expand-lg bg-body-tertiary menu">
      <div className="container-fluid ">
        
          <a className="navbar-brand" href="#">toDo...</a>
        
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="./index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ref</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input name="q" className="form-control me-2" type="Search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-dark" type="submit">Search</button>
          </form>
          
        </div>
      </div>
    </nav>
    </section>
    </header>
  );
}
