import { Contex } from "./MyContex";
import { useContext } from "react";

const CategoryCard = () => {
  const { category } = useContext(Contex);
  console.log(category);
  return;
};

export default CategoryCard;
