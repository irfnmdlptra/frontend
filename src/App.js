import BannerPromotion from "./components/BannerPromotion";
import CategoryCard from "./components/CategoryCard";
import HomePage from "./components/HomePage";
import { Provider } from "./components/MyContex";

const App = () => {
  return (
    <>
      <Provider>
        <HomePage/>
        <CategoryCard/>
        <BannerPromotion/>
      </Provider>
    </>
  );
};

export default App;
