function renderStars(count) {
  return Array.from({ length: count }).map((_, index) => (
    <i key={index} className="fa-solid fa-star text-[10px] md:text-[14px]"></i>
  ));
}

function ProductPreview({ image, stars, name, price }) {
  return (
    <div
      className="h-full flex flex-col gap-1 font-light text-sm cursor-pointer lg:text-base"
      data-testid="product-preview"
    >
      <img
        className="rounded-md object-cover flex-1"
        src={image}
        alt="product preview"
      ></img>

      <div>{renderStars(stars)}</div>
      <p className="truncate text-xs md:text-sm">{name}</p>
      <p className="text-xs md:text-sm">£{price}</p>
    </div>
  );
}

export default ProductPreview;
