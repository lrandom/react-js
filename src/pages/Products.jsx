import { getProducts } from "../services/ProductService";
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const categorySlug = searchParams.get('category_slug');

    useEffect(()=>{
        async function _getProducts() {
            try {
                const res = await getProducts({
                    category_slug: categorySlug
                });
                console.log(res);
                setProducts(res.data);
            } catch (error) {
                alert("Cannot get products data");
            }
        }
        _getProducts();
    },[]);

    return (
        <div className="container mx-auto mt-10">
            <h1 className="mb-6 text-2xl font-bold">Products</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    products.map((item,index) => (
                        <div key={item.id} className="bg-gray-200 p-4 rounded-md">
                            <h2 className="text-lg font-bold mb-2">{item.name}</h2>
                            <img src="https://placehold.co/600x400" className="mb-6"/>
                            <p className="text-2xl text-gray-800 font-bold">{item.price}$</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Products;
