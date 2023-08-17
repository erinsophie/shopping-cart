import { Link, useParams } from 'react-router-dom';
import categories from '../data/categories';
import allProducts from '../data/products';

function renderStars(count) {
  return Array.from({ length: count }).map((_, index) => (
    <i key={index} className="fa-solid fa-star text-xl"></i>
  ));
}

function ProductDetail() {
  const { categoryId, productId } = useParams();
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
          Oops! It seems that this product does not exist
        </p>
        <Link to={`/${categoryId}`} className="text-blue-900 font-bold">
          <i className="fa-solid fa-arrow-left"></i> Go back to {category.name}
        </Link>
      </div>
    );

  return (
    <div className="mt-16 mb-16 ml-32 mr-32">
      <Link to={`/${categoryId}`} className="text-blue-900 font-bold">
        <i className="fa-solid fa-arrow-left"></i> Back to {category.name}
      </Link>

      <div className="flex gap-12 p-24">
        <div className="min-w-[450px] max-w-[450px] min-h-[600px] max-h-[600px]">
          <img src={product.image} className="h-full w-full object-cover"></img>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="font-cormorant text-3xl">{product.name}</p>
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

          <button className="bg-black text-white rounded-full p-3">
            Add to basket
          </button>

          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2 items-center">
              <i className="fa-solid fa-truck text-2xl"></i>
              <p>Free shipping</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <i className="fa-regular fa-circle-check text-2xl"></i>
              <p>30-Day-Gaurantee</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <i className="fa-solid fa-rotate-left text-2xl"></i>
              <p>Simple Returns</p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <i className="fa-solid fa-gift text-2xl"></i>
              <p>3-5 Day Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
