import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import './App.css';

function App() {
  return (
    <ProductProvider>
      <Router>
        <div className="app">
          <header className="app-header">
            <div className="container">
              <h1 className="app-title">🛍️ Quản Lý Sản Phẩm</h1>
            </div>
          </header>

          <main className="app-main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/edit/:id" element={<EditProduct />} />
            </Routes>
          </main>

          <footer className="app-footer">
            <div className="container">
              <p>© 2025 Product Management System</p>
            </div>
          </footer>
        </div>
      </Router>
    </ProductProvider>
  );
}

export default App;
