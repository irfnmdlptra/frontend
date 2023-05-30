import { useContext } from "react"
import { Contex } from "./MyContex"

const CategoryCard = ()=> {
    const { category} = useContext(Contex)
    return (
        <>
        <h1>Card Category</h1>
        {category.map((c)=> {
            return (
                <h3 key={c.id}>  {c.description}   </h3>
            )
        })}
        </>
    )
}

export default CategoryCard