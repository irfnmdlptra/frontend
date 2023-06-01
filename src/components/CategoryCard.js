import { useContext } from "react";
import { Contex } from "./MyContex";

const CategoryCard = () => {
  const { category } = useContext(Contex);
  return (
    <div className="container py-4">
      <div className="title-wrapper">
        <h6>Category Card</h6>
      </div>

      <div>
        {category.map((c) => {
          return (
            <div className="card-category">
              <img src={c.image} key={c.id} alt="Skin Care Image" />
              <div className="category-label" key={c.id}>{c.description}</div>
            </div>
          );
        })}
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
