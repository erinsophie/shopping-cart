import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import homePage from '../assets/img/home-page.jpg';

function Home() {
  return (
    <main className="flex-1 overflow-hidden lg:overflow-visible">
      <Categories />
      <div className="relative">
        <img
          src={homePage}
          alt="Group of friends sitting with their laptops"
          className="h-full object-cover lg:h-screen lg:w-full"
        />
        <Link to="/electronics">
          <button className="text-white absolute top-10 right-10 bg-purple p-3 rounded-xl transform transition-transform ease-in-out duration-200 hover:scale-110">
            Shop electronics <i className="fa-solid fa-arrow-right"></i>
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Home;
