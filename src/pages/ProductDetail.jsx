import { Link, useParams } from 'react-router-dom';
import { useBasket } from '../components/BasketContext';
import categories from '../data/categories';
import allProducts from '../data/products';

function renderStars(count) {
  return Array.from({ length: count }).map((_, index) => (
    <i key={index} className="fa-solid fa-star text-sm lg:text-xl"></i>
  ));
}

function ProductDetail() {
  // url params
  const { categoryId, productId } = useParams();
  // basket context
  const { addToBasket } = useBasket();

  const category = categories.find(
    (category) => category.id === parseInt(categoryId),
  );
  const product = allProducts.find(
    (product) => product.id === parseInt(productId),
  );

  // error page if product is not found
  if (!product)
    return (
      <div className="flex flex-col h-screen p-6 gap-3">
        <p className="font-cormorant text-2xl">
          Oops! This product does not exist
        </p>
        <Link to={`/${categoryId}`} className="text-blue-900 font-bold">
          <i className="fa-solid fa-arrow-left"></i> Go back to {category.name}
        </Link>
      </div>
    );

  return (
      <div
        className="mt-10 mb-10 ml-8 mr-8 lg:mt-16 lg:mb-16 lg:ml-32 lg:mr-32"
        data-testid="product-detail-page"
      >
        <Link to={`/${categoryId}`} className="text-blue-900 font-bold">
          <i className="fa-solid fa-arrow-left"></i> Back to {category.name}
        </Link>

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
                {product.name}
              </p>
              <p className="text-xl">£{product.price}</p>
              <div>{renderStars(product.stars)}</div>
            </div>

            <div className="flex flex-col gap-2">
              <p>Highlights</p>
              <ul className="list-disc ml-4">
                {product.highlights.map((item, index) => (
                  <li key={index} className="font-light">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <p>Description</p>
              <p className="font-light">{product.description}</p>
            </div>
           
            <button
              onClick={() => addToBasket(product)}
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
      </div>
  );
}

export default ProductDetail;
