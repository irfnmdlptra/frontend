import { useContext } from "react";
import { Contex } from "./MyContex";

const BannerPromotion = () => {
  const { banner } = useContext(Contex);
  return (
    <div className="container">
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-inner">
          {banner.map((b, index) => {
            return (
              <div class={index == 0 ? "carousel-item active" : "carousel-item"}>
                <img key={b.id} src={b.image} className="d-block w-100" alt="Banner Image" />
              </div>
            );
          })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <i className="bi bi-arrow-left-circle-fill" aria-hidden="true"></i>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <i className="bi bi-arrow-right-circle-fill" aria-hidden="true"></i>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
export default BannerPromotion;
