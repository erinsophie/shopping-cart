function CategoryPreview({ src, name }) {
  return (
    <div className="flex flex-col gap-2 items-center transform transition-transform ease-in-out duration-200 hover:scale-110 cursor-pointer">
      <div className="w-16 h-16 rounded-full overflow-hidden hover:shadow-xl md:w-24 md:h-24 lg:w-36 lg:h-36">
        <img src={src} alt={name} className="object-cover w-full h-full"></img>
      </div>
      <p className='text-xs text-center lg:text-base'>{name}</p>
    </div>
  );
}

export default CategoryPreview;
