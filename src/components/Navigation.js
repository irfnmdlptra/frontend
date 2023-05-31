const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            Ippamz Store
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Category
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Product
                </a>
              </li>
              <li className="d-flex align-items-center">
                <button className="btnIcon">
                  <i class="bi bi-cart position-relative ">
                  <div className="circleBadge position-absolute top-0 end-0"></div>
                  </i>
                </button>
              </li>
            </ul>
            <div className="d-flex">
              <button className="me-2 secondaryBtn">Sign In</button>
              <button className="primaryBtn">Login</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
