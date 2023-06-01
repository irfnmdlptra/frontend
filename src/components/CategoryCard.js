import { useContext } from "react";
import { Contex } from "./MyContex";

const CategoryCard = () => {
  const { category } = useContext(Contex);
  return (
    <div className="container py-4">
        <div className="title-wrapper">
            <h1>Category Card</h1>
        </div>
      {/* {category.map((c) => {
        return (
          <ul>
            <li key={c.id}> {c.description}</li>
          </ul>
        );
      })} */}
    </div>
  );
};

export default CategoryCard;
