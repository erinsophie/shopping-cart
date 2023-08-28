import cushions from '../assets/products/cushions.jpg';
import womensGift from '../assets/products/womens-gift.jpg';
import mensGift from '../assets/products/mens-gift.jpg';
import birthday from '../assets/products/birthday.jpg';

const topPicks = [
  { id: 1, src: cushions, name: 'Gifts under £25' },
  { id: 2, src: womensGift, name: 'Gifts for Her' },
  { id: 3, src: mensGift, name: 'Gifts for Him' },
  { id: 4, src: birthday, name: 'Birthday' },
];

function TopPicks() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-base md:text-xl">
        Shop our top picks <i className="fa-solid fa-arrow-right"></i>
      </h2>
      <p className="font-light text-sm text-gray-500">
        Lorem ipsum dolor sit amet, consectetur.
      </p>

      <div className="flex flex-col items-center gap-10 justify-between md:gap-6 md:flex-row">
        {topPicks.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center border border-gray-400 rounded-xl cursor-pointer h-80 w-80 overflow-hidden md:h-52 md:w-52 lg:h-64 lg:w-64"
          >
            <img
              className="object-cover h-full w-full overflow-hidden"
              src={item.src}
            ></img>

            <p className="p-4 text-base md:text-sm lg:text-base">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopPicks;
