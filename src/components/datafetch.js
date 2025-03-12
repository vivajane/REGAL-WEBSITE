import axios from "axios";

export const getCategory = async () => {
   const data = await axios('http://127.0.0.1:3005/mycategory');
   console.log(data.data, "data from axios");
   return data.data;
 };

// export const getCategory = ()=> {
//    const {data} = axios.get("http://127.0.0.1:3005/mycategory")
//    return data
// }

// export const getCategory = async () => {
//    try{
//       const response = await fetch ('http://127.0.0.1:3005/mycategory')
//       const data = await response.json();
//       return data;
//    }catch(error){
//      console.log(error);
  
//   }
//   };