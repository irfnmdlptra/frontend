import Navigation from "./Navigation";
import BannerPromotion from "./BannerPromotion";
import CategoryCard from "./CategoryCard";
import { Provider } from "./MyContex";

const HomePage = () => {
  return (
    <>
      <Provider>
        <Navigation />
        <BannerPromotion />
        <CategoryCard />
      </Provider>
    </>
  );
};

export default HomePage;
