import { useBasket } from '../components/BasketContext';

function Basket() {
  const {
    basket,
    showBasket,
    setShowBasket,
    getSubtotal,
    getBasketAmount,
    deleteProduct,
    updateQuantity,
  } = useBasket();

  return showBasket ? (
    <div className="fixed top-0 right-0 w-1/3 h-full bg-white p-8 shadow-lg overflow-y-auto border border-red-900 flex flex-col gap-10">
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

      <div className="flex flex-col gap-4 border border-red-900">
        {basket.map((basketItem, index) => (
          // each basket item
          <div key={index} className="flex border border-black">
            <div className="w-32 h-36">
              <img
                src={basketItem.product.image}
                className="w-full h-full object-cover"
              ></img>
            </div>

            <div className="flex flex-col justify-between w-full p-4">
              <div className="flex justify-between">
                <p>{basketItem.product.name}</p>
                <i
                  onClick={() => deleteProduct(basketItem.product.id)}
                  className="fa-regular fa-trash-can cursor-pointer"
                ></i>
              </div>
              <div className="flex justify-between">
                <p>£{basketItem.product.price}</p>
                <div className="flex gap-3">
                  <button
                    onClick={(event) => updateQuantity(basketItem, event)}
                    className="bg-gray-300 w-7"
                  >
                    -
                  </button>
                  <p>{basketItem.quantity}</p>
                  <button
                    onClick={(event) => updateQuantity(basketItem, event)}
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

      <div className="flex justify-between">
        <p>Subtotal: £{getSubtotal(basket)}</p>
        <p>Checkout</p>
      </div>
    </div>
  ) : null;
}

export default Basket;
