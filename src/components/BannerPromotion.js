import { useContext } from "react";
import { Contex } from "./MyContex";

const BannerPromotion = () => {
  const { banner } = useContext(Contex);
  return (
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-inner">
      {banner.map((b, index)=> {
        return (
          <div class={ index == 0 ? 'carousel-item active' : 'carousel-item'}>
          <img key={b.id} src={b.image} class="d-block w-100" alt="Banner Image" />
        </div>
        )
      })}
     
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <i class="bi bi-arrow-left-circle-fill" aria-hidden="true"></i>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <i class="bi bi-arrow-right-circle-fill" aria-hidden="true"></i>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default BannerPromotion;
