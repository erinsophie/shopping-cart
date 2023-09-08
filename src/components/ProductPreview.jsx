function ProductPreview({ image, title, price }) {
  return (
    <div
      className="border border-black h-80 w-64 flex flex-col font-light text-sm lg:text-base"
      data-testid="product-preview"
    >
      <div className="flex-1 overflow-hidden">
        <img className="object-cover" src={image} alt={title} />
      </div>

      <div className="p-3 bg-gray-500 bg-opacity-20">
        <p className="font-bold truncate text-xs md:text-sm">{title}</p>
        <p className="text-xs md:text-sm">£{price}</p>
      </div>
    </div>
  );
}


export default ProductPreview;
