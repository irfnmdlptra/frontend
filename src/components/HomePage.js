import Navigation from "./Navigation";
import BannerPromotion from "./BannerPromotion";

const HomePage = () => {
  return (
    <>
      <Provider>
        <BannerPromotion />
        <Navigation />
      </Provider>
    </>
  );
};

export default HomePage;
