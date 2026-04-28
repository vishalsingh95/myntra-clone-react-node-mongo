import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/delete-product/:id" element={<DeleteProduct />} />
        <Route path="/search-products" element={<SearchProducts />} />
        <Route path="/filter-products" element={<FilterProducts />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;