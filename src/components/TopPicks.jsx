import pot from '../assets/products/pot.jpg';

const topPicks = [
  { id: 1, src: pot, name: 'Gifts under £25' },
  { id: 2, src: pot, name: 'Gifts for Her' },
  { id: 3, src: pot, name: 'Gifts for Him' },
  { id: 4, src: pot, name: 'Birthday' },
];

function TopPicks() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl">
        Shop our top picks <i className="fa-solid fa-arrow-right"></i>
      </h2>
      <p className="font-light text-sm text-gray-500">
        Lorem ipsum dolor sit amet, consectetur.
      </p>
      <div className="flex justify-between">
        {topPicks.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center border border-gray-400 rounded-xl w-56 overflow-hidden hover:shadow-xl cursor-pointer"
          >
            <img className="object-cover" src={item.src}></img>
            <p className="p-4">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopPicks;
