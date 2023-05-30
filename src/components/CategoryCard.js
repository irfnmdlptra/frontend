import { useContext } from "react"
import { Contex } from "./MyContex"

const CategoryCard = ()=> {
    const { category} = useContext(Contex)
    return (
        <>
        <h1>Card Category</h1>
        {category.map((c)=> {
            return (
                <>
                
                <ul>
                    <li key={c.id}>  {c.description}</li>
                </ul>
             
                </>
            )
        })}
        </>
    )
}

export default CategoryCard