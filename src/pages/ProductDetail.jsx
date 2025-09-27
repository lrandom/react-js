import { useParams } from "react-router";
import { useEffect,useState } from "react";
import { getProductDetail } from "../services/ProductService";
import { CART_KEY } from "../constant/common";
import { parse } from "postcss";

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const params = useParams();
    const { id } = params;

    useEffect(()=>{
        async function _getProductDetail() {
            try {
                const res = await getProductDetail(id);
                console.log(res);
                setProduct(res);
            } catch (error) {
                alert("Cannot get product detail");
            }
        }
        _getProductDetail();
    },[id])

   const _handleAddToCart = () => {
     console.log("CART: Add to Cart");
     const cartData = localStorage.getItem(CART_KEY);
     let cart = cartData ? JSON.parse(cartData) : []; //handle case co gio hang va 0 gio hang
     //check product ton tai trong gio hang hay chua 
    const findIndex = cart.findIndex((item) => parseInt(item.product.id) === parseInt(id));
    if(findIndex>=0){
        //ton tai trong gio hang
        //check stock 
        cart[findIndex].quantity += 1;
    }else{
        //khong ton tai trong gio hang
        cart = [...cart,{
            product,
            quantity: 1
        }]
    }

    //luu lai vao localstorage
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    alert("Add to Cart Success");
   }

   return <>
   <div className="container mx-auto mt-10">
     {
      product &&(
       <section className="grid grid-cols-12 gap-8">
         <div className="col-span-7">
             <img src="https://placehold.co/600x400" className="mb-6 w-full"/>
         </div>

         <div className="col-span-5">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <div className="flex items-center">
                <span className="text-3xl font-bold text-red-500">${product.price}</span>
            </div>
            <p className="mt-2">{product.description}</p>
            <button onClick={_handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 cursor-pointer">Add to Cart</button>
         </div>
       </section>
        )
    }
   </div>     
   </>
}

export default ProductDetail;