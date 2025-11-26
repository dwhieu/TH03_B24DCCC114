import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProductById, deleteProduct } = useProducts();

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

  const handleDelete = () => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa sản phẩm "${product.ten}"?`)) {
      deleteProduct(product.id);
      navigate('/');
    }
  };

  return (
    <div className="page-container">
      <div className="product-detail">
        <div className="detail-header">
          <Link to="/" className="btn btn-secondary">
            ← Quay lại
          </Link>
          <div className="detail-actions">
            <Link to={`/edit/${product.id}`} className="btn btn-edit">
              Chỉnh sửa
            </Link>
            <button onClick={handleDelete} className="btn btn-delete">
              Xóa sản phẩm
            </button>
          </div>
        </div>

        <div className="detail-content">
          <div className="detail-image">
            <img src={product.hinhAnh} alt={product.ten} />
          </div>
          
          <div className="detail-badge">
            <span className="product-category">{product.danhMuc}</span>
          </div>

          <h1 className="detail-title">{product.ten}</h1>

          <div className="detail-info">
            <div className="info-item">
              <span className="info-label">Giá:</span>
              <span className="info-value price">
                {product.gia.toLocaleString('vi-VN')} ₫
              </span>
            </div>

            <div className="info-item">
              <span className="info-label">Số lượng còn lại:</span>
              <span className="info-value">{product.soLuong}</span>
            </div>

            <div className="info-item">
              <span className="info-label">Mã sản phẩm:</span>
              <span className="info-value">#{product.id}</span>
            </div>
          </div>

          <div className="detail-description">
            <h3>Mô tả sản phẩm</h3>
            <p>{product.moTa}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
