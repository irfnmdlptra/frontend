import { useContext } from "react"
import { Contex } from "./MyContex"

const HomePage = ()=> {
    const {product} = useContext(Contex)
    return (
        <>
        <h1>Ini adalah HomePage  </h1>
        {product.map((p)=> {
            return (
                <h2 key={p.id}>{p.brand} </h2>
            )
        })}
        </>
    )
}

export default HomePage