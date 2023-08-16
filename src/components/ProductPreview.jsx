function ProductPreview({ image, name, price }) {
  return (
    <div className="h-full flex flex-col font-light text-sm lg:text-base cursor-pointer">
      <img
        className="rounded-md object-cover flex-1"
        src={image}
        alt="product preview"
      ></img>

      <p className="truncate">{name}</p>
      <p>£{price}</p>
    </div>
  );
}

export default ProductPreview;
