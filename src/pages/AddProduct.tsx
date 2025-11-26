import { useNavigate } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import ProductForm from '../components/ProductForm';
import type { Product } from '../types/product';

const AddProduct = () => {
  const navigate = useNavigate();
  const { addProduct } = useProducts();

  const handleSubmit = (productData: Omit<Product, 'id'>) => {
    addProduct(productData);
    navigate('/');
  };

  return (
    <div className="page-container">
      <div className="form-page">
        <h1>Thêm sản phẩm mới</h1>
        <ProductForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AddProduct;
