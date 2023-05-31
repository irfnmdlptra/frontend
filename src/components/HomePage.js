import Navigation from "./Navigation";
import BannerPromotion from "./BannerPromotion";
import { Provider } from "./MyContex";

const HomePage = () => {
  return (
    <>
      <Provider>
        <Navigation />
        <BannerPromotion />
      </Provider>
    </>
  );
};

export default HomePage;
