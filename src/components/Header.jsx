import { useBasket } from '../components/BasketContext';
import { Link } from 'react-router-dom';

function Header() {
  const { showBasket, setShowBasket, getBasketAmount } = useBasket();

  return (
    <header className="bg-purple text-white flex items-center gap-3 p-3 border-b border-gray-300 md:p-6 md:gap-6 md:pl-16 md:pr-16 lg:pl-28 lg:pr-28 lg:p-5 lg:gap-10">
      <div className="flex items-center gap-3 flex-1">
        <Link to="/">
          <h1 className="text-xl md:text-2xl lg:text-3xl">FakeStore</h1>
        </Link>

        <form className="w-full flex gap-3">
          <label htmlFor="searchInput" className="sr-only">
            Search Query
          </label>
          <input
            id="searchInput"
            type="search"
            placeholder="Search for anything"
            className="text-black rounded-full bg-gray-100 w-full p-1 font-light text-xs md:text-sm lg:p-2.5 lg:text-base"
          />
          <button type="submit" aria-label="Search">
            <i className="fa-solid fa-magnifying-glass text-sm lg:text-xl"></i>
          </button>
        </form>
      </div>

      <div className="flex gap-2 items-center transform transition-transform ease-in-out duration-200 hover:scale-110">
        <button
          aria-label="Shopping basket"
          aria-expanded={showBasket}
          data-testid="basket-icon"
          onClick={() => setShowBasket((prev) => !prev)}
        >
          <i className="fa-solid fa-basket-shopping text-sm lg:text-xl"></i>
        </button>

        <p data-testid="basket-quantity">{getBasketAmount()}</p>
      </div>
    </header>
  );
}

export default Header;
