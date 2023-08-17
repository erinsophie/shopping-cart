import { createContext, useContext, useState } from 'react';

const BasketContext = createContext();

function useBasket() {
  return useContext(BasketContext);
}

function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  function addToBasket(product) {
    setBasket((prev) => [...prev, product]);
  }

  const providerValues = {
    basket,
    addToBasket,
  };

  return (
    <BasketContext.Provider value={providerValues}>
      {children}
    </BasketContext.Provider>
  );
}

export { useBasket, BasketProvider };
