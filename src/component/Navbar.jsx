import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <h1>
        {" "}
        <nav class="navbar navbar-expand-md">
          <div class="container-xxl">
            <a href="#intro" class="navbar-brand link-item">
              <span class="fw-bold text-secondary">Bookline</span>
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end align-center"
              id="navbarNav"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link link-item" href="#Home">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link link-item" href="#topics">
                    About pizza
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link link-item" href="#contact">
                    Get types
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </h1>
    );
  }
}

export default Navbar;
