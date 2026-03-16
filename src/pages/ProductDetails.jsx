import Navbar from "../components/Navbar/Navbar";

const ProductDetails = () => {
  return (
    <>
      <Navbar />
      <div className="details container mt-5 d-flex gap-5 align-items-start">
        <img src="https://via.placeholder.com/400x550"/>
        <div className="details-info d-flex flex-column gap-3 justify-content-start" >
          <h2 className="mb-3 Product-Name">Product Name</h2>
          <p className="Product-Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="Product-Price">Price: $99.99</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
