import { createContext, useContext, useState } from 'react';

const BasketContext = createContext();

function useBasket() {
  return useContext(BasketContext);
}

function BasketProvider({ children, initialBasket = [] }) {
  const [showBasket, setShowBasket] = useState(false);
  const [basket, setBasket] = useState(initialBasket);

  console.log(basket);

  function addToBasket(newProduct) {
    // find product if it already exists in basket
    if (basket.find((item) => item.product.id === newProduct.id)) {
      // map over basket
      // when you come to the item that already exists, update its quantity
      setBasket((prevBasket) =>
        prevBasket.map((basketItem) =>
          basketItem.product.id === newProduct.id
            ? {
                product: basketItem.product,
                quantity: basketItem.quantity + 1,
              }
            : basketItem,
        ),
      );
    } else {
      // or else add new item to basket
      setBasket((prevBasket) => [
        ...prevBasket,
        { product: newProduct, quantity: 1 },
      ]);
    }
  }

  function updateQuantity(basketItem, event) {
    const plus = event.target.textContent === '+';
    const minus = event.target.textContent === '-';

    if (minus && basketItem.quantity === 1) {
      setBasket((prevBasket) =>
        prevBasket.filter((item) => item.product.id !== basketItem.product.id),
      );
    } else {
      setBasket((prevBasket) =>
        prevBasket.map((item) =>
          // loop through all basket items
          // if the basket item product id matches the clicked on basket item product id
          // then update quantity or return item as is
          item.product.id === basketItem.product.id
            ? {
                product: basketItem.product,
                quantity: plus
                  ? basketItem.quantity + 1
                  : basketItem.quantity - 1,
              }
            : item,
        ),
      );
    }
  }

  function getSubtotal(basket) {
    const subTotal = basket.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0,
    );

    return subTotal.toFixed(2);
  }

  function getBasketAmount() {
    return basket.reduce((acc, item) => acc + item.quantity, 0);
  }

  function deleteProduct(productId) {
    setBasket((prevBasket) =>
      prevBasket.filter((item) => item.product.id !== productId),
    );
  }

  function clearBasket() {
    setShowBasket(false);
    setBasket([]);
  }

  const providerValues = {
    basket,
    setBasket,
    showBasket,
    setShowBasket,
    addToBasket,
    getSubtotal,
    getBasketAmount,
    deleteProduct,
    updateQuantity,
    clearBasket,
  };

  return (
    <BasketContext.Provider value={providerValues}>
      {children}
    </BasketContext.Provider>
  );
}

export { useBasket, BasketProvider };

