import { Link } from 'react-router-dom';
import categories from '../data/categories';
import CategoryPreview from './CategoryPreview';

function Categories() {
  return (
    <div className="flex flex-col items-center gap-7 p-8 bg-pinkBeige">
      <h2 className="text-4xl font-cormorant">
        An online marketplace for creative crafts!
      </h2>

      <div className="flex justify-center gap-16">
        {categories.map((category) => (
          <Link to={`/${category.id}`} key={category.id}>
            <CategoryPreview src={category.image} name={category.name} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
