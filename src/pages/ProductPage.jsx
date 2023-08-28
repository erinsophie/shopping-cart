import { Link, useParams } from 'react-router-dom';
import categories from '../data/categories';
import allProducts from '../data/products';
import ProductPreview from '../components/ProductPreview';

function ProductPage() {
  const { categoryId } = useParams();
  const category = categories.find(
    (category) => category.id === parseInt(categoryId),
  );
  const products = allProducts.filter(
    (product) => product.categoryId === parseInt(categoryId),
  );

  return (
    <div className="flex flex-col gap-8 mt-10 mb-10 ml-8 mr-8 lg:mt-16 lg:mb-16 lg:ml-32 lg:mr-32">
      <div className="flex flex-col gap-2">
        <Link to="/" className="text-blue-900 font-bold">
          <i className="fa-solid fa-arrow-left"></i> Back to Home page
        </Link>
        <h2 className="text-base font-light lg:text-xl">All {category.name} products</h2>
        <p className="font-light">{products.length} results</p>
      </div>

      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Link
            to={`/${categoryId}/${product.id}`}
            key={product.id}
            aria-label={product.name}
          >
            <ProductPreview
              image={product.image}
              stars={product.stars}
              name={product.name}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
