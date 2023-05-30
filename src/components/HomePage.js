import { useContext } from "react"
import { Contex } from "./MyContex"

const HomePage = ()=> {
    const {product} = useContext(Contex)
    console.log(product)
    return (
        <>
        <h1>Ini adalah HomePage  </h1>
        {product.map((p)=> {
            return (
                <p key={p.id}>{p.brand} </p>
            )
        })}
        </>
    )
}

export default HomePage