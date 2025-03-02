import Home from "./AllComponents/Home/Home";
import Login from "./AllComponents/Login/Login";
import Products from "./AllComponents/Products/Products";
import PoductsDetails from "./AllComponents/ProductDetails/PoductsDetails";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./AllComponents/Notfound/Notfound";
import Shop from "./AllComponents/Shop/Shop";
import ProductDetails2 from "./AllComponents/ProductDetails2/ProductDetails2";
import Mainpage from "./AllComponents/Mainpage/Mainpage";
import ContextItems from "./Context/ContextItems";
import { useEffect, useState } from "react";
import Cart from "./AllComponents/Cart/Cart";

function App() {
  const [cartList, setCartList] = useState(() => {
    const storedCart = localStorage.getItem("cartList");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  console.log(cartList);
  const removeAllCartItems = () => {
    setCartList([]);
  };

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartList));
  }, [cartList]);

  const incrementCartItemQuantity = (id) => {
    setCartList((prevCartList) =>
      prevCartList.map((eachCartItem) =>
        eachCartItem.id === id
          ? {
              ...eachCartItem,
              quantity: eachCartItem.quantity + 1,
              price: parseFloat(
                (
                  (eachCartItem.price / eachCartItem.quantity) *
                  (eachCartItem.quantity + 1)
                ).toFixed(2)
              ),
            }
          : eachCartItem
      )
    );
  };

  const decrementCartItemQuantity = (id) => {
    setCartList((prevCartList) => {
      return prevCartList
        .map((eachCartItem) => {
          if (eachCartItem.id === id) {
            if (eachCartItem.quantity > 1) {
              return {
                ...eachCartItem,
                price: parseFloat(
                  (
                    (eachCartItem.price / eachCartItem.quantity) *
                    (eachCartItem.quantity - 1)
                  ).toFixed(2)
                ),
                quantity: eachCartItem.quantity - 1,
              };
            } else {
              return null; // Mark for removal
            }
          }
          return eachCartItem;
        })
        .filter(Boolean); // Remove null values
    });
  };

  const removeCartItem = (id) => {
    setCartList((prevCartList) =>
      prevCartList.filter((eachCartItem) => eachCartItem.id !== id)
    );
  };

  const removeAllItemsInCart = () => {
    setCartList([]);
  };

  const addCartItem = (product) => {
    setCartList((prevCartList) => {
      const productExists = prevCartList.find(
        (eachCartItem) => eachCartItem.id === product.id
      );

      if (productExists) {
        return prevCartList.map((eachCartItem) =>
          eachCartItem.id === product.id
            ? {
                ...eachCartItem,
                quantity: eachCartItem.quantity + product.quantity,
              }
            : eachCartItem
        );
      } else {
        return [...prevCartList, product];
      }
    });
  };

  return (
    <ContextItems.Provider
      value={{
        cartList,
        addCartItem,
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeAllCartItems,
        removeAllItemsInCart,
      }}
    >
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/Shopitems" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productdetails/:id" element={<PoductsDetails />} />
        <Route path="/productdetails2/:id" element={<ProductDetails2 />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Not-Found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ContextItems.Provider>
  );
}

export default App;
