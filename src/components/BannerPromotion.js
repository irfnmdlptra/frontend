import { useContext } from "react";
import { Contex } from "./MyContex";

const BannerPromotion = () => {
  const { banner } = useContext(Contex);
  return (
    <>
      <h1>Banner Promotion</h1>
      {banner.map((b)=> {
        return (
            <p key={b.id}>{b.image}</p>
        )
      })}
    </>
  );
};

export default BannerPromotion;
