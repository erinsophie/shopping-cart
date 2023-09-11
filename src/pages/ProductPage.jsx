import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductPreview from '../components/ProductPreview';
import Error from './Error';

function ProductPage() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();
  const validCategories = [
    'electronics',
    'jewelery',
    "women's clothing",
    "men's clothing",
  ];

  useEffect(() => {
    async function fetchProducts() {
      try {
        let response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`,
        );
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        let data = await response.json();
        setProducts(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setProducts(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // display error
  if (error) {
    return <p>Error: {error}</p>;
  } else if (!validCategories.includes(category)) {
    return <Error />;
  }

  return (
    <div className="flex-1 flex flex-col gap-8 mt-10 mb-10 ml-8 mr-8 lg:mt-16 lg:mb-16 lg:ml-32 lg:mr-32">
      <div className="flex flex-col gap-2">
        <Link to="/" className="text-blue-900 font-bold">
          <i className="fa-solid fa-arrow-left"></i> Back to Home page
        </Link>
        <h2 className="text-base font-light lg:text-xl">
          All {category} products
        </h2>
        <p className="font-light">{products ? products.length : 0} results</p>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap gap-6 justify-center">
            {products &&
              products.map((product) => (
                <Link
                  to={`/${category}/${product.id}`}
                  key={product.id}
                  aria-label={product.title}
                >
                  <ProductPreview
                    image={product.image}
                    title={product.title}
                    price={product.price}
                  />
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;
