function renderStars(count) {
  return Array.from({ length: count }).map((_, index) => (
    <i
      key={index}
      className="fa-solid fa-star text-[10px] md:text-[14px] lg:text-[14px]"
    ></i>
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
      <p className="truncate text-xs md:text-sm lg:text-sm">{name}</p>
      <p className="text-xs md:text-sm lg:text-sm">£{price}</p>
    </div>
  );
}

export default ProductPreview;
