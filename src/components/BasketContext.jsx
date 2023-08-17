import { createContext, useContext, useState } from 'react';

const BasketContext = createContext();

function useBasket() {
  return useContext(BasketContext);
}

function BasketProvider({ children }) {
  const [showBasket, setShowBasket] = useState(false);
  const [basket, setBasket] = useState([]);

  function addToBasket(product) {
    setBasket((prev) => [...prev, product]);
  }

  function getSubtotal(basket) {
    return basket.reduce((acc, product) => acc + product.price, 0);
  }

  const providerValues = {
    basket,
    showBasket,
    setShowBasket,
    addToBasket,
    getSubtotal,
  };

  return (
    <BasketContext.Provider value={providerValues}>
      {children}
    </BasketContext.Provider>
  );
}

export { useBasket, BasketProvider };
