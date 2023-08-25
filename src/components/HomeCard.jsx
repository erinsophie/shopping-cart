import { Link } from 'react-router-dom';
import mug from '../assets/products/mug.jpg';

function HomeCard() {
  return (
    <div className="flex p-8 gap-6 items-center justify-between border border-gray-400 rounded-xl md:gap-12 md:flex-row md:p-10 lg:gap-12 lg:flex-row lg:p-14">
      <div className="flex flex-col gap-2 lg:gap-10">
        <div className="flex flex-col gap-2.5">
          <p className="font-light text-sm text-gray-500">
            Editor&apos;s Picks
          </p>
          <p className="text-base md:text-xl lg:text-2xl">Home Decor</p>
          <Link to="/2">
            <p className="cursor-pointer text-sm md:text-base lg:text-base">
              Shop these unqiue finds{' '}
              <i className="fa-solid fa-arrow-right"></i>
            </p>
          </Link>
        </div>

        <div className="flex flex-col hidden gap-4 text-xs lg:text-base md:block lg:block">
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
        className="w-44 rounded-xl cursor-pointer hover:shadow-xl md:w-44 lg:w-64"
      ></img>
    </div>
  );
}

export default HomeCard;
