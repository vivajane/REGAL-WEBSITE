import axios from "axios";
import { useEffect, useState
 } from "react";
export const useCategory = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
      const fetchIt = async () => {
        
        const  data  = await axios("http://127.0.0.1:3005/mycategory");

        setCategory(data.data);
      };

      fetchIt();
    }, []);

    return {category};
  };