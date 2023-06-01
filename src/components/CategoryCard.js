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
            <div className="card-category">
                <img src="" alt="Skin Care Image" />
            </div>
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
