import React from "react";

class Carousel extends React.Component {
  render() {
    return (
      <h1>
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="image/inna-gurina-JspLKUauwSI-unsplash.jpg"
                height="500vh"
                class="d-block w-100"
                alt="pizza"
              />
            </div>
            <div class="carousel-item">
              <img
                src="image/ivan-torres-MQUqbmszGGM-unsplash.jpg"
                height="500vh"
                class="d-block w-100"
                alt="pizza"
              />
            </div>
            <div class="carousel-item">
              <img
                src="image/mahyar-motebassem-pGA4zHvpo5E-unsplash.jpg"
                height="500vh"
                class="d-block w-100"
                alt="pizza"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </h1>
    );
  }
}

export default Carousel;
