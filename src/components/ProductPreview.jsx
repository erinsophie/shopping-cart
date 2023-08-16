function ProductPreview({ image, name, price }) {
  return (
    <div className="flex flex-col border border-red-900">
      <img src={image} alt="product preview"></img>
      <p>{name}</p>
      <p>£{price}</p>
    </div>
  );
}

export default ProductPreview;
