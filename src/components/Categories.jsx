import { Link } from 'react-router-dom';
import categories from '../data/categories';
import CategoryPreview from './CategoryPreview';

function Categories() {
  return (
    <div className="flex flex-col items-center gap-7 p-5 bg-pinkBeige md:p-8">
      <h2 className="font-cormorant text-xl md:text-2xl lg:text-4xl">
        An online marketplace for creative crafts!
      </h2>

      <div className="flex gap-5 md:gap-16">
        {categories.map((category) => (
          <Link
            to={`/${category.id}`}
            key={category.id}
            aria-label={category.name}
          >
            <CategoryPreview src={category.image} name={category.name} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
