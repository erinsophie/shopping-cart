import { Link, useParams } from 'react-router-dom';
import categories from '../data/categories';
import allProducts from '../data/products';

function ProductDetail() {
  const { categoryId, productId } = useParams();
  const category = categories.find(
    (category) => category.id === parseInt(categoryId),
  );
  const product = allProducts.find(
    (product) => product.id === parseInt(productId),
  );

  return (
    <div className="mt-16 mb-16 ml-32 mr-32">
      <Link to={`/${categoryId}`} className="text-blue-900 font-bold">
        <i className="fa-solid fa-arrow-left"></i> Back to {category.name}
      </Link>

      <div className="flex gap-12 p-24">
        <div className="max-w-lg max-h-[670px]">
          <img src={product.image} className="w-full h-full object-cover"></img>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="font-cormorant text-3xl">{product.name}</p>
            <p className="text-xl">£{product.price}</p>
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
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
