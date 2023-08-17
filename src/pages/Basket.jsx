import { useBasket } from '../components/BasketContext';

function Basket() {
  const { basket, showBasket, setShowBasket, getSubtotal } = useBasket();

  return showBasket ? (
    <div className="fixed top-0 right-0 w-1/3 h-full bg-white p-8 shadow-lg overflow-y-auto border border-red-900 flex flex-col gap-10">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <p>Your basket</p>
          <p>{basket.length} items</p>
        </div>
        <i
          onClick={() => setShowBasket((prev) => !prev)}
          className="fa-solid fa-xmark text-2xl cursor-pointer"
        ></i>
      </div>

      <div className="flex flex-col gap-4 border border-red-900">
        {basket.map((product) => (
          // each product
          <div key={product.id} className="flex border border-red-900">
            <div className="w-32 h-36">
              <img
                src={product.image}
                className="w-full h-full object-cover"
              ></img>
            </div>

            <div className="flex flex-col justify-between w-full p-4">
              <div className="flex justify-between">
                <p>{product.name}</p>
                <i className="fa-regular fa-trash-can"></i>
              </div>
              <div>
                <p>£{product.price}</p>
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
