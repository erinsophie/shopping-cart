import categories from '../data/categories';

function Categories() {
  return (
    <div className="flex flex-col items-center gap-7 p-8 bg-pinkBeige">
      <h2 className="text-4xl font-cormorant">
        Discover fresh new finds from creative sellers!
      </h2>

      <div className="flex justify-center gap-16">
        {categories.map((cat) => (
          <div key={cat.id} className="flex flex-col gap-2 items-center">
            <div className="w-36 h-36 rounded-full overflow-hidden">
              <img
                src={cat.image}
                alt="category"
                className="object-cover w-full h-full"
              ></img>
            </div>
            <p>{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
