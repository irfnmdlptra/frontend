import { createContext, useEffect, useState } from "react";
import axios from 'axios'

const Contex = createContext(null);

const Provider = ({ children }) => {
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState([])
    const [banner, setBanner] = useState([])

    const getDataProduct = async ()=> {
        const response = await axios.get('https://api.creativeacademyid.com/product')
        setProduct(response.data)
    }

    const getDataCategory = async ()=> {
        const response = await axios.get('https://api.creativeacademyid.com/category')
        setCategory(response.data)
    }
    const getDataBanner = async ()=> {
        const response = await axios.get('https://api.creativeacademyid.com/banner')
        setBanner(response.data)
    }

    useEffect(()=> {
        getDataProduct()
    },[])



  return <Contex.Provider value={{product, category, banner}}>{children}</Contex.Provider>;
};

export { Contex, Provider };
