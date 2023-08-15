import Categories from '../components/Categories';

function Home() {
  return (
    <div>
      <Categories />

      <div className="p-12 mt-12 mb-12 ml-52 mr-52 border border-gray-400 rounded-xl">
        <div className="flex flex-col gap-1">
          <p className="font-light text-sm text-gray-500">
            Editor&apos;s Picks
          </p>
          <p className="text-2xl">Home Decor</p>
          <p>Shop these unqiue finds</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
