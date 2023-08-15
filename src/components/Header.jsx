import etsyLogo from '../assets/img/etsy.png';

function Header() {
  return (
    <div className="flex items-center pl-28 pr-28 p-5 gap-10 border border-black">
      <div className="flex items-center gap-2 flex-1">
        <img src={etsyLogo} className="w-24"></img>
        <input
          type="serach"
          placeholder="Search for anything"
          className="border border-black border-2 rounded-full bg-gray-100 w-full p-2.5 font-light"
        />

        <button>
          <i className="fa-solid fa-magnifying-glass text-xl"></i>
        </button>
      </div>

      <div>
        <button>
          <i className="fa-solid fa-basket-shopping text-xl"></i>
        </button>
      </div>
    </div>
  );
}

export default Header;
