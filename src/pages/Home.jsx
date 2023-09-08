import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import homePage from '../assets/img/home-page.jpg';

function Home() {
  return (
    <div className="flex-1">
      <Categories />
      <img src={homePage} className="relative"></img>
      <Link to="/electronics">
        <button className="rounded-lg bg-white absolute top-">Shop electronics</button>
      </Link>
    </div>
  );
}

export default Home;
