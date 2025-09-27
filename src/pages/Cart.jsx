import { useEffect, useMemo, useState } from "react";
import { CART_KEY } from "../constant/common";
import { formatMoney } from "../common/common";
const Cart = () => {
  const [cartList, setCartList] = useState([]);
  useEffect(() => {
    const cartData = localStorage.getItem(CART_KEY);
    let cart = cartData ? JSON.parse(cartData) : []; //handle case co gio hang va 0 gio hang
    setCartList(cart);
  }, []);

  const _remove = (id) => {
    const cartData = localStorage.getItem(CART_KEY);
    let cart = cartData ? JSON.parse(cartData) : []; //handle case co gio hang va 0 gio hang
    //check product ton tai trong gio hang hay chua
    const findIndex = cart.findIndex(
      (item) => parseInt(item.product.id) === parseInt(id),
    );
    if (findIndex >= 0) {
      //ton tai trong gio hang
      cart.splice(findIndex, 1);
    }
    //luu lai vao localstorage
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    setCartList(cart);
  };

  const _updateQuantity = (id, step) => {
    const cartData = localStorage.getItem(CART_KEY);
    let cart = cartData ? JSON.parse(cartData) : []; //handle case co gio hang va 0 gio hang
    //check product ton tai trong gio hang hay chua
    const findIndex = cart.findIndex(
      (item) => parseInt(item.product.id) === parseInt(id),
    );
    if (findIndex >= 0) {
      //ton tai trong gio hang
      cart[findIndex].quantity += step;
      //check quantity <= 0
      if (cart[findIndex].quantity <= 0) {
        cart.splice(findIndex, 1);
      }
    }
    //luu lai vao localstorage
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    setCartList(cart);
  };

  const subTotal = useMemo(
    () =>
      cartList.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0,
      ),
    [cartList],
  );
  const tax = useMemo(() => subTotal * 0.1, [subTotal]);
  const total = useMemo(() => subTotal + tax, [subTotal, tax]);

  return (
    <>
      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold">Cart</h1>
        {cartList.length === 0 && (
          <p className="text-center text-gray-500 bg-gray-200 p-4">
            Your cart is empty
          </p>
        )}
        {cartList.length > 0 && (
          <div>
            <table className="table-fixed w-full border">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartList.map((item) => (
                  <tr className="border" key={item.product.id}>
                    <td className="border px-4 py-2">{item.product.name}</td>
                    <td className="border px-4 py-2">
                      {formatMoney(item.product.price)}
                    </td>
                    <td className="border px-4 py-2">
                      <div className="flex gap-2 items-center justify-between">
                        <button
                          className="bg-gray-300 text-black px-2 py-1 rounded-md cursor-pointer"
                          onClick={() => _updateQuantity(item.product.id, -1)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="bg-gray-300 text-black px-2 py-1 rounded-md cursor-pointer"
                          onClick={() => _updateQuantity(item.product.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="border px-4 py-2">
                      {formatMoney(item.product.price * item.quantity)}
                    </td>
                    <td className="border px-4 py-2">
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded-md cursor-pointer"
                        onClick={() => _remove(item.product.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-end items-center mt-10">
              <span className="text-xl font-bold">SubTotal: </span>
              <span className="text-2xl font-bold text-red-500">
                &nbsp;
                {formatMoney(subTotal)}
              </span>
            </div>

            <div className="flex justify-end items-center mt-2">
              <span className="text-xl font-bold">Tax: </span>
              <span className="text-2xl font-bold text-red-500">
                &nbsp; {formatMoney(tax)}
              </span>
            </div>

            <div className="flex justify-end items-center mt-2">
              <span className="text-xl font-bold">Total: </span>
              <span className="text-2xl font-bold text-red-500">
                &nbsp; {formatMoney(total)}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
