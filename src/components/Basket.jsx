import { useBasket } from './BasketContext';
import { Link } from 'react-router-dom';

function Basket() {
  const {
    basket,
    setShowBasket,
    getSubtotal,
    getBasketAmount,
    deleteProduct,
    updateQuantity,
  } = useBasket();

  return (
    <div className="fixed top-0 right-0 z-10 w-1/3 h-full bg-white p-8 overflow-y-auto border border-black flex flex-col gap-10">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <p>Your basket</p>
          <p>{getBasketAmount()} items</p>
        </div>
        <i
          onClick={() => setShowBasket((prev) => !prev)}
          className="fa-solid fa-xmark text-2xl cursor-pointer"
        ></i>
      </div>

      {getBasketAmount() === 0 ? (
        <div className="flex justify-center">
          <p className="font-cormorant text-2xl">Basket is empty</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {basket.map((basketItem, index) => (
            // each basket item
            <div
              key={index}
              className="flex border border-black"
              data-testid="basket-item"
            >
              <div className="w-32 h-36">
                <img
                  src={basketItem.product.image}
                  alt={basketItem.product.name}
                  className="w-full h-full object-cover"
                ></img>
              </div>

              <div className="flex flex-col justify-between w-full p-4">
                <div className="flex justify-between">
                  <p>{basketItem.product.name}</p>
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
                      onClick={(event) => updateQuantity(basketItem, event)}
                      className="bg-gray-300 w-7"
                      data-testid={`decrement-${basketItem.product.id}`}
                    >
                      -
                    </button>
                    <p>{basketItem.quantity}</p>
                    <button
                      onClick={(event) => updateQuantity(basketItem, event)}
                      className="bg-gray-300 w-7"
                      data-testid={`increment-${basketItem.product.id}`}
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
        <p>Subtotal: £{getSubtotal(basket)}</p>
        {getBasketAmount() > 0 ? (
          <Link to="/checkout">
            <button className="border border-black p-2.5 cursor-pointer">
              Checkout
            </button>
          </Link>
        ) : (
          <button className="border border-black p-2.5 cursor-pointer" disabled>
            Checkout
          </button>
        )}
      </div>
    </div>
  );
}

export default Basket;
