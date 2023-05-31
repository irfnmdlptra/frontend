import Navigation from "./Navigation";
import BannerPromotion from "./BannerPromotion";
import { Provider } from "./MyContex";

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
