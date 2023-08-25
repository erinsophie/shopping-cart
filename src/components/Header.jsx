import { useBasket } from '../components/BasketContext';
import { Link } from 'react-router-dom';

function Header() {
  const { setShowBasket, getBasketAmount } = useBasket();

  return (
    <div className="flex items-center gap-3 p-3 border-b border-gray-300 md:p-6 md:gap-6 md:pl-16 md:pr-16 lg:pl-28 lg:pr-28 lg:p-5 lg:gap-10">
      <div className="flex items-center gap-3 flex-1">
        <Link to="/">
          <h1 className="text-xl font-cormorant md:text-2xl lg:text-4xl">
            Crafty
          </h1>
        </Link>
        <input
          type="search"
          placeholder="Search for anything"
          className="border border-black border-2 rounded-full bg-gray-100 w-full p-1 font-light text-xs md:text-sm lg:p-2.5 lg:text-base"
        />

        <button aria-label="search">
          <i className="fa-solid fa-magnifying-glass text-sm lg:text-xl"></i>
        </button>
      </div>

      <div className="flex gap-2 items-center transform transition-transform ease-in-out duration-200 hover:scale-110">
        <button
          onClick={() => setShowBasket((prev) => !prev)}
          data-testid="basket-icon"
          aria-label="basket"
        >
          <i className="fa-solid fa-basket-shopping text-sm lg:text-xl"></i>
        </button>

        <p data-testid="basket-quantity">{getBasketAmount()}</p>
      </div>
    </div>
  );
}

export default Header;
