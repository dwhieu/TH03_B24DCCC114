import { Link } from 'react-router-dom';
import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onDelete: (id: number) => void;
}

const ProductCard = ({ product, onDelete }: ProductCardProps) => {
  const handleDelete = () => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa sản phẩm "${product.ten}"?`)) {
      onDelete(product.id);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.hinhAnh} alt={product.ten} />
      </div>
      <div className="product-header">
        <span className="product-category">{product.danhMuc}</span>
      </div>
      <h3 className="product-name">{product.ten}</h3>
      <p className="product-price">{product.gia.toLocaleString('vi-VN')} ₫</p>
      <p className="product-quantity">Số lượng: {product.soLuong}</p>
      <p className="product-description">{product.moTa.substring(0, 80)}...</p>
      
      <div className="product-actions">
        <Link to={`/products/${product.id}`} className="btn btn-view">
          Xem chi tiết
        </Link>
        <Link to={`/edit/${product.id}`} className="btn btn-edit">
          Sửa
        </Link>
        <button onClick={handleDelete} className="btn btn-delete">
          Xóa
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
