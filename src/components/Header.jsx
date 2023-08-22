import { useBasket } from '../components/BasketContext';
import { Link } from 'react-router-dom';

function Header() {
  const { setShowBasket, getBasketAmount } = useBasket();

  return (
    <div className="flex items-center pl-28 pr-28 p-5 gap-10 border-b border-gray-300">
      <div className="flex items-center gap-3 flex-1">
        <Link to="/">
          <h1 className="text-4xl font-cormorant">Crafty</h1>
        </Link>
        <input
          type="serach"
          placeholder="Search for anything"
          className="border border-black border-2 rounded-full bg-gray-100 w-full p-2.5 font-light"
        />

        <button>
          <i className="fa-solid fa-magnifying-glass text-xl"></i>
        </button>
      </div>

      <div className="flex gap-2 items-center">
        <button onClick={() => setShowBasket((prev) => !prev)}>
          <i className="fa-solid fa-basket-shopping text-xl"></i>
        </button>

        <p>{getBasketAmount()}</p>
      </div>
    </div>
  );
}

export default Header;
