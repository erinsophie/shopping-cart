

function Footer() {
  return (
    <footer className="text-indigo-50 font-light">
      <div className="p-10 flex justify-evenly bg-footerBlue">
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
            <li className="hover:underline">Sell on Crafty</li>
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

          <div className="flex gap-5 text-3xl mt-10">
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
