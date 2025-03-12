import axios from "axios";

export const fetchSlug = async(slug)=> {
    console.log(slug,"slugoo")
    const {data} = await axios.get(`http://127.0.0.1:3005/products/${slug}`)
    return data
    
    
}