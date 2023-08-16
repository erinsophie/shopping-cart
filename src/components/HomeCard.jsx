import mug from '../assets/products/mug.jpg';

function HomeCard() {
  return (
    <div className="flex gap-12 justify-between items-center p-14 border border-gray-400 rounded-xl">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2.5">
          <p className="font-light text-sm text-gray-500">
            Editor&apos;s Picks
          </p>
          <p className="text-2xl">Home Decor</p>
          <p className="cursor-pointer">
            Shop these unqiue finds <i className="fa-solid fa-arrow-right"></i>
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
      <img
        src={mug}
        alt="ceramic mugs"
        className="w-64 rounded-xl cursor-pointer hover:shadow-xl"
      ></img>
    </div>
  );
}

export default HomeCard;
