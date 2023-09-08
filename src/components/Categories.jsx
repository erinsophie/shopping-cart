import { useState, useEffect } from 'react';
import { capitaliseLetter } from '../utils/utils';
import { Link } from 'react-router-dom';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch categories
  useEffect(() => {
    async function fetchCategories() {
      try {
        let response = await fetch(
          'https://fakestoreapi.com/products/categories',
        );
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        let data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Fetch error', error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return (
    <div className="flex justify-center gap-7 p-3 md:p-8">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex gap-5 md:gap-16">
          {categories.map((category, index) => (
            <Link to={`/${category}`} key={index} aria-label={category}>
              <p className="text-center transform transition-transform ease-in-out duration-200 hover:scale-110">
                {capitaliseLetter(category)}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Categories;
