import Categories from '../components/Categories';
import TopPicks from '../components/TopPicks';
import HomeCard from '../components/HomeCard';

function Home() {
  return (
    <div>
      <Categories />
      <div className="flex flex-col gap-12 mt-10 mb-10 ml-5 mr-5 md:ml-20 md:mr-20 lg:mt-16 lg:mb-16 lg:ml-52 lg:mr-52">
        <HomeCard />
        <TopPicks />
      </div>
    </div>
  );
}

export default Home;
