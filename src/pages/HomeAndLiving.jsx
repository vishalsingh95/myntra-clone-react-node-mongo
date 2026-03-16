import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const HomeAndLiving = () => {
  return (
    <>
        <Navbar />
        <div className="container mx-auto px-4 py-8"> 
        <div className="p-4 bg-gray-100 min-h-screen "  >
          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <div className="mb-4 ">
                <h1 className="text-2xl font-bold mb-4">Home & Living</h1>
                <p className="text-gray-600 mb-2">Discover our collection of home and living products to enhance your living space. From stylish furniture to cozy decor, we have everything you need to create a comfortable and inviting home.</p>  
                <p className="text-gray-600 mb-2">Browse our selection of sofas, dining tables, beds, and more to find the perfect pieces for your home. Our home and living collection also includes a variety of decor items such as rugs, curtains, and wall art to add a touch of personality to your space.</p>
                <p className="text-gray-600 mb-2">Whether you're looking to furnish a new home or refresh your current space, our home and living products are designed to meet your needs and style preferences. Shop now and transform your living space into a cozy and stylish haven.</p>   
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Shop Now</button>

            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <div className="mb-4 ">
                <h2 className="text-xl font-semibold mb-2">Shop by Category:</h2>
                <p className="text-gray-600 mb-2">- Furniture: Sofas, dining tables, beds, chairs, and more.</p>
                <p className="text-gray-600 mb-2">- Decor: Rugs, curtains, wall art, and decorative accessories.</p>
                <p className="text-gray-600 mb-2">- Lighting: Table lamps, floor lamps, pendant lights, and more.</p>
                <p className="text-gray-600 mb-2">- Bedding: Comforters, sheets, pillows, and more.</p>
                <p className="text-gray-600 mb-2">- Storage: Shelving units, storage bins, and organizers.</p>
                <p className="text-gray-600 mb-2">- Outdoor: Patio furniture, outdoor decor, and accessories.</p>
                

            </div>
          </div>
        </div>
        </div>
        <Footer />
    </>
  );
};

export default HomeAndLiving;