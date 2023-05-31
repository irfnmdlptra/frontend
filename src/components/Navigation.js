const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            Ippamz Store
          </a>
          <li className="d-flex align-items-center d-lg-none ms-auto me-2">
                <button className="btnIcon mx-2">
                  <i class="bi bi-cart position-relative ">
                  <div className="circleBadge position-absolute top-0 end-0"></div>
                  </i>
                </button>
              </li>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link mx-2 active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">
                  Category
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">
                  Product
                </a>
              </li>
              <li className="d-lg-flex align-items-center d-none">
                <button className="btnIcon mx-2">
                  <i class="bi bi-cart position-relative ">
                  <div className="circleBadge position-absolute top-0 end-0"></div>
                  </i>
                </button>
              </li>
            </ul>
            <div className="d-flex btnWrapper mt-5 mt-lg-0">
          
              <button className="w-100 secondaryBtnStyle secondaryBtn">Sign In</button>
              <button className="w-100 custom-btn primaryBtnStyle primaryBtn">Login</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
