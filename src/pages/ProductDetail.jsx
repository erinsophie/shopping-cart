import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useBasket } from '../components/BasketContext';

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category, productId } = useParams();
  const { addToBasket } = useBasket();

  useEffect(() => {
    async function fetchProduct() {
      try {
        let response = await fetch(
          `https://fakestoreapi.com/products/${productId}`,
        );
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        let data = await response.json();
        setProduct(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, []);

  // display error
  if (error) return <p>Error: {error}</p>;

  return (
    <div
      className="flex-1 mt-10 mb-10 ml-8 mr-8 lg:mt-16 lg:mb-16 lg:ml-32 lg:mr-32"
      data-testid="product-detail-page"
    >
      <Link to={`/${category}`} className="text-blue-900 font-bold">
        <i className="fa-solid fa-arrow-left"></i> Back to {category}
      </Link>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col items-center p-6 gap-8 md:flex-row md:p-12 lg:gap-12 lg:p-24">
          <div className="min-w-[300px] max-w-[300px] min-h-[400px] max-h-[400px] lg:min-w-[450px] lg:max-w-[450px] lg:min-h-[600px] lg:max-h-[600px] overflow-hidden">
            <img
              src={product.image}
              className="h-full w-full object-cover"
            ></img>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="font-cormorant text-2xl md:text-3xl">
                {product.title}
              </p>
              <p>{product.rating.rate} rating</p>
              <p className='text-gray-400'>({product.rating.count}) customer ratings</p>
              <p className="text-xl">£{product.price}</p>
            </div>

            <div className="flex flex-col gap-2">
              <p>Description</p>
              <p className="font-light">{product.description}</p>
            </div>

            <button
              onClick={() => {
                addToBasket(product);
              }}
              className="bg-black text-white rounded-full p-3 transform transition-transform ease-in-out duration-200 hover:scale-105"
            >
              Add to basket
            </button>

            <div className="flex flex-col gap-4 justify-between md:flex-row md:gap-2 items-center">
              <div className="flex flex-col gap-2 items-center">
                <i className="fa-solid fa-truck text-base md:text-2xl"></i>
                <p className="text-center text-xs lg:text-base">
                  Free shipping
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <i className="fa-regular fa-circle-check text-base md:text-2xl"></i>
                <p className="text-center text-xs lg:text-base">
                  30-Day-Gaurantee
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <i className="fa-solid fa-rotate-left text-base md:text-2xl"></i>
                <p className="text-center text-xs lg:text-base">
                  Simple Returns
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <i className="fa-solid fa-gift text-base md:text-2xl"></i>
                <p className="text-center text-xs lg:text-base">
                  3-5 Day Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;
