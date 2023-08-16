import Categories from '../components/Categories';
import TopPicks from '../components/TopPicks';
import HomeCard from '../components/HomeCard';

function Home() {
  return (
    <div>
      <Categories />
      <div className="flex flex-col gap-12 mt-16 mb-16 ml-52 mr-52">
        <HomeCard />
        <TopPicks />
      </div>
    </div>
  );
}

export default Home;
