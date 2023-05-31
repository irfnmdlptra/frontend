import { useContext } from "react"
import { Contex } from "./MyContex"

const BannerPromotion = () => {
  const {banner} = useContext(Contex)
  return (
    <>
      {/* <h1>This Is Banner Promotion Section</h1>
      {banner.map((b)=> {
        return (
          <img key={b.id} src={b.image} alt=""/>
        )
      })} */}
      
    </>
  )
}
export default BannerPromotion