import { Contex } from "./MyContex";
import { useContext } from "react";

const CategoryCard = () => {
  const { category } = useContext(Contex);
  return (
    <>
    <h1>Category Page</h1>
    {category.map((c)=> {
        return (
            <p key={c.id}> {c.description} </p>
        )
    })}
    </>
  )
};

export default CategoryCard;
