import { createContext, useContext, useState, useEffect, useRef } from 'react';

const BasketContext = createContext();

function useBasket() {
  return useContext(BasketContext);
}

function BasketProvider({ children, initialBasket = [] }) {
  const [showBasket, setShowBasket] = useState(false);
  const [basket, setBasket] = useState(initialBasket);
  const basketRef = useRef(basket);

  // when basket changes, set the current ref to be
  // the most recent state of the basket
  // this avoids discrepencies in the quantity
  // of products when addToBasket is clicked in succession

  console.log(basket)

  useEffect(() => {
    basketRef.current = basket;
  }, [basket]);

  function addToBasket(newProduct) {
    const currentBasket = basketRef.current;

    const existingItemIndex = currentBasket.findIndex(
      (item) => item.product.id === newProduct.id,
    );

    if (existingItemIndex !== -1) {
      const updatedBasket = [...currentBasket];
      updatedBasket[existingItemIndex].quantity += 1;
      setBasket(updatedBasket);
    } else {
      setBasket([...currentBasket, { product: newProduct, quantity: 1 }]);
    }
  }

  function updateQuantity(basketItem, event) {
    const currentBasket = basketRef.current;
    const indexOfItem = basket.indexOf(basketItem);
    const updatedBasket = [...currentBasket];

    if (event.target.textContent === '-') {
      if (updatedBasket[indexOfItem].quantity === 1) {
        deleteProduct(basketItem.product.id);
      } else {
        updatedBasket[indexOfItem].quantity -= 1;
        setBasket(updatedBasket);
      }
    } else if (event.target.textContent === '+') {
      updatedBasket[indexOfItem].quantity += 1;
      setBasket(updatedBasket);
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
    const newBasket = basket.filter((item) => item.product.id !== productId);
    setBasket(newBasket);
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
