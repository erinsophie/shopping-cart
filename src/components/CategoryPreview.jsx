function CategoryPreview({ src, name }) {
  return (
    <div className="flex flex-col gap-2 items-center transform transition-transform ease-in-out duration-200 hover:scale-110 cursor-pointer">
      <div className="w-36 h-36 rounded-full overflow-hidden hover:shadow-xl">
        <img src={src} alt={name} className="object-cover w-full h-full"></img>
      </div>
      <p>{name}</p>
    </div>
  );
}

export default CategoryPreview;
