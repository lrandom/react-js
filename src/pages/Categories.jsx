import { useEffect, useState } from "react";
import { getCategories } from "../services/CategoryService";

const Categories = () => {
    const [categories, setCategories] = useState([]);
/*   const [deps1,setDeps1] = useState();
  const [deps2,setDeps2] = useState(); */

/*   useEffect(()=>{
    //code trong day
  })
 */
  useEffect(()=>{
    //code trong day
    async function _getCategories() {
        try {
            const res = await getCategories();
            console.log(res);
            setCategories(res.data);
        } catch (error) {
            alert("Cannot get categories data");
        }
    }
    _getCategories();
  },[])

/*   useEffect(()=>{
    //code trong day
  },[deps1, deps2]) */

  return (
    <div className="container mx-auto mt-10">
      <h1 className="mb-6 text-2xl font-bold">Categories</h1>
       <div className="grid grid-cols-3 gap-4">
        {
            categories.map((item,index) => (
                <div key={item.id} className="bg-gray-200 p-4 rounded-md">
                    <h2 className="text-lg font-bold">
                       <a href={`/products?category_slug=${item.slug}`}>{item.name}</a>
                    </h2>
                </div>
            ))
        }
        </div> 
    </div>
  );
};

export default Categories;