import { Link } from 'react-router-dom';

function Checkout() {
  return (
    <div className="flex flex-col p-6 h-screen gap-10">
      <Link to="/" className="text-blue-900 font-bold">
        <i className="fa-solid fa-arrow-left"></i> Back to shopping
      </Link>
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-cormorant text-2xl">Thank you for your order!</h1>
        <p>
          Delivery time: <span className="font-light">3-5 business days</span>
        </p>
        <i className="fa-solid fa-gift text-5xl"></i>
      </div>
    </div>
  );
}

export default Checkout;
