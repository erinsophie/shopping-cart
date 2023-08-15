import Categories from '../components/Categories';

function Home() {
  return (
    <div>
      <Categories />

      <div className="mt-12 mb-12 ml-52 mr-52 border border-gray-400 rounded-xl">
        <p>Editor&apos;s Picks</p>
        <p>Jewellery</p>
        <p>Shop these unqiue finds</p>
      </div>
    </div>
  );
}

export default Home;
