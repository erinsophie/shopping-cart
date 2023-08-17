import { useBasket } from '../components/BasketContext';
import { Link } from 'react-router-dom';

function Basket() {
  const { basket } = useBasket();

  return (
    <div className="mt-16 mb-16 ml-32 mr-32 h-screen flex flex-col gap-10">
      <Link to="/" className="text-blue-900 font-bold">
        <i className="fa-solid fa-arrow-left"></i> Back to Home page
      </Link>

      <div className="border border-red-900">
        <div>
          <h1>Your Basket</h1>
          <p>{basket.length} items</p>
        </div>

        <div>
          {basket.map((product) => (
           <div key={product.id} className='flex border border-red-900'>
            <img src={product.image} className='w-24 h-24'></img>
            <p>{product.name}</p>
           </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Basket;
