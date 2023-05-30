import { createContext, useEffect, useState } from "react";
import axios from 'axios'

const Contex = createContext(null);

const Provider = ({ children }) => {
    const [product, setProduct] = useState([])

    const getDataProduct = async ()=> {
        const response = await axios.get('https://api.creativeacademyid.com/product')
        setProduct(response.data)
    }

    useEffect(()=> {
        getDataProduct()
    },[])



  return <Contex.Provider value={{product}}>{children}</Contex.Provider>;
};

export { Contex, Provider };
