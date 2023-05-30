import CategoryCard from "./components/CategoryCard";
import HomePage from "./components/HomePage";
import { Provider } from "./components/MyContex";

const App = () => {
  return (
    <>
      <Provider>
        <HomePage/>
        <CategoryCard/>
      </Provider>
      <h1>Hello World</h1>
    </>
  );
};

export default App;
