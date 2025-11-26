import { useParams, useNavigate, Link } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import ProductForm from '../components/ProductForm';
import type { Product } from '../types/product';

const EditProduct = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProductById, updateProduct } = useProducts();

  const product = id ? getProductById(Number(id)) : undefined;

  if (!product) {
    return (
      <div className="page-container">
        <div className="not-found">
          <h2>Không tìm thấy sản phẩm</h2>
          <Link to="/" className="btn btn-primary">
            Quay lại trang chủ
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (productData: Product) => {
    updateProduct(productData);
    navigate('/');
  };

  return (
    <div className="page-container">
      <div className="form-page">
        <h1>Chỉnh sửa sản phẩm</h1>
        <ProductForm product={product} onSubmit={handleSubmit} isEdit={true} />
      </div>
    </div>
  );
};

export default EditProduct;
