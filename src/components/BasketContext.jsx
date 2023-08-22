import { createContext, useContext, useState, useEffect, useRef } from 'react';

const BasketContext = createContext();

function useBasket() {
  return useContext(BasketContext);
}

function BasketProvider({ children }) {
  const [showBasket, setShowBasket] = useState(false);
  const [basket, setBasket] = useState([]);
  // set a reference to the basket state
  const basketRef = useRef(basket);

  // when basket changes, set the current ref to be the most recent state of the basket
  // this avoids discrepencies in the quantity of products when addToBasket is clicked in succession
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

  function getSubtotal(basket) {
    return basket.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0,
    );
  }

  function getBasketAmount() {
    return basket.reduce((acc, item) => acc + item.quantity, 0);
  }

  const providerValues = {
    basket,
    showBasket,
    setShowBasket,
    addToBasket,
    getSubtotal,
    getBasketAmount,
  };

  return (
    <BasketContext.Provider value={providerValues}>
      {children}
    </BasketContext.Provider>
  );
}

export { useBasket, BasketProvider };
