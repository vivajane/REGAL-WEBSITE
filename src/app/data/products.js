import axios from "axios"

export const fetchProducts = async () => {
    const data = await axios.get("http://127.0.0.1:3005/products")
    return data.data

 
  
}


