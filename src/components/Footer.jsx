function Footer() {
  return (
    <footer className="border-t border-black font-light text-xs md:text-sm lg:text-base">
      <div className="flex gap-6 p-6 bg-footerBlue md:justify-evenly md:p-10">
        <div>
          <p className="font-medium mb-5">Shop</p>
          <ul className="cursor-pointer flex flex-col gap-3">
            <li className="hover:underline">Gift cards</li>
            <li className="hover:underline">Sitemap</li>
            <li className="hover:underline">Blog</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-5">Sell</p>
          <ul className="cursor-pointer flex flex-col gap-3">
            <li className="hover:underline">Teams</li>
            <li className="hover:underline">Forums</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-5">About</p>
          <ul className="cursor-pointer flex flex-col gap-3">
            <li className="hover:underline">Policies</li>
            <li className="hover:underline">Investors</li>
            <li className="hover:underline">Careers</li>
            <li className="hover:underline">Press</li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-5">Help</p>
          <ul className="cursor-pointer flex flex-col gap-3">
            <li className="hover:underline">Help centre</li>
            <li className="hover:underline">Privacy Settings</li>
          </ul>

          <div className="flex gap-5 text-sm mt-10 md:text-2xl lg:text-3xl">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>

      <div className="p-5 flex justify-end bg-footerBlue">
        <p>
          Built by
          <a
            href="https://github.com/erinsophie"
            aria-label="Link to GitHub page"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {' '}
            erinsophie
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/erinsophie/shopping-cart"
            aria-label="Link to GitHub repository"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {' '}
            Source{' '}
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
