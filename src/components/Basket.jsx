import { useBasket } from './BasketContext';
import { Link } from 'react-router-dom';

function Basket() {
  const {
    basket,
    showBasket,
    setShowBasket,
    getSubtotal,
    getBasketAmount,
    deleteProduct,
    clearBasket,
    updateQuantity,
  } = useBasket();

  return showBasket ? (
    <div className="fixed top-0 right-0 z-10 w-full h-full bg-white p-8 overflow-y-auto border border-black flex flex-col gap-10 md:w-1/2 lg:w-1/3">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <p>Your basket</p>
          <p data-testid="items-amount">{getBasketAmount()} items</p>
        </div>
        <button
          onClick={() => setShowBasket((prev) => !prev)}
          className="fa-solid fa-xmark text-2xl transform transition-transform ease-in-out duration-200 hover:scale-110"
          data-testid="close-basket-btn"
        ></button>
      </div>

      {getBasketAmount() === 0 ? (
        <div className="flex justify-center">
          <p className="font-cormorant text-2xl">Basket is empty</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {basket.map((basketItem) => (
            // each basket item
            <div
              key={basketItem.product.id}
              className="flex border border-black"
              data-testid="basket-item"
            >
              <div className="w-32 h-36">
                <img
                  src={basketItem.product.image}
                  alt={basketItem.product.title}
                  className="w-full h-full object-cover"
                ></img>
              </div>

              <div className="flex flex-col justify-between w-full p-4">
                <div className="flex justify-between">
                  <p>{basketItem.product.title}</p>
                  <button
                    onClick={() => deleteProduct(basketItem.product.id)}
                    className="fa-regular fa-trash-can"
                    data-testid={`delete-button-${basketItem.product.id}`}
                  ></button>
                </div>
                <div className="flex justify-between">
                  <p>£{basketItem.product.price}</p>
                  <div className="flex gap-3">
                    <button
                      onClick={(e) => updateQuantity(basketItem, e)}
                      className="bg-gray-300 w-7"
                    >
                      -
                    </button>
                    <p>{basketItem.quantity}</p>
                    <button
                      onClick={(e) => updateQuantity(basketItem, e)}
                      className="bg-gray-300 w-7"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center">
        <p data-testid="subtotal">Subtotal: £{getSubtotal(basket)}</p>
        {getBasketAmount() > 0 ? (
          <Link to="/checkout">
            <button
              onClick={clearBasket}
              className="border border-black p-2.5 transform transition-transform ease-in-out duration-200 hover:scale-110"
            >
              Checkout
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  ) : null;
}

export default Basket;
