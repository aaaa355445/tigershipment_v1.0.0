import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Navigation from "./components/shared/Navigation/Navigation";
import Footer from "./components/shared/Footer/Footer";
import Products from "./pages/ProductsPage/ProductsPage";
import About from "./pages/About/About";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import ProductList from "./pages/Admin/ProductList/ProductList";
import NewProduct from './pages/Admin/NewProduct/NewProduct';
import LoginPage from './pages/User/LoginPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/product/:category/:slug" element={<ProductDetails />} exact />
          <Route path="/products" element={<Products />} exact />
          <Route path="/products/:keyword" element={<Products />} />
          <Route path="/about" element={<About />} exact />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} exact />
          <Route path="/category/:categorySlug" element={<CategoryPage />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<ProductList />} />
          <Route path="/admin/product" element={<NewProduct /> } />
          <Route path="/login" element={<LoginPage /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
