function renderStars(count) {
  return Array.from({ length: count }).map((_, index) => (
    <i key={index} className="fa-solid fa-star"></i>
  ));
}

function ProductPreview({ image, stars, name, price }) {
  return (
    <div className="h-full flex flex-col gap-1 font-light text-sm lg:text-base cursor-pointer">
      <img
        className="rounded-md object-cover flex-1"
        src={image}
        alt="product preview"
      ></img>

      <div>{renderStars(stars)}</div>
      <p className="truncate">{name}</p>
      <p>£{price}</p>
    </div>
  );
}

export default ProductPreview;
