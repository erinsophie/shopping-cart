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
    <div className="flex flex-col gap-8 mt-16 mb-16 ml-32 mr-32">
      <div className="flex flex-col gap-2">
        <Link to="/" className="text-blue-900 font-bold">
          <i className="fa-solid fa-arrow-left"></i> Back to home page
        </Link>
        <h2 className="text-xl font-light">All {category.name} products</h2>
      </div>

      <div className="grid grid-cols-3 gap-10">
        {products.map((product) => (
          <ProductPreview
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
