import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Product, DanhMuc } from '../types/product';

interface ProductFormProps {
  product?: Product;
  onSubmit: (product: Product | Omit<Product, 'id'>) => void;
  isEdit?: boolean;
}

interface FormErrors {
  ten?: string;
  gia?: string;
  soLuong?: string;
  danhMuc?: string;
  hinhAnh?: string;
}

const ProductForm = ({ product, onSubmit, isEdit = false }: ProductFormProps) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ten: product?.ten || '',
    danhMuc: product?.danhMuc || ('' as DanhMuc | ''),
    gia: product?.gia.toString() || '',
    soLuong: product?.soLuong.toString() || '',
    moTa: product?.moTa || '',
    hinhAnh: product?.hinhAnh || ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const categories: DanhMuc[] = ['Điện tử', 'Quần áo', 'Đồ ăn', 'Sách', 'Khác'];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.ten.trim()) {
      newErrors.ten = 'Tên sản phẩm là bắt buộc';
    } else if (formData.ten.trim().length < 3) {
      newErrors.ten = 'Tên sản phẩm phải có ít nhất 3 ký tự';
    }

    if (!formData.danhMuc) {
      newErrors.danhMuc = 'Vui lòng chọn danh mục';
    }

    const gia = Number(formData.gia);
    if (!formData.gia) {
      newErrors.gia = 'Giá là bắt buộc';
    } else if (isNaN(gia) || gia <= 0) {
      newErrors.gia = 'Giá phải là số dương';
    }

    const soLuong = Number(formData.soLuong);
    if (!formData.soLuong) {
      newErrors.soLuong = 'Số lượng là bắt buộc';
    } else if (isNaN(soLuong) || soLuong <= 0 || !Number.isInteger(soLuong)) {
      newErrors.soLuong = 'Số lượng phải là số nguyên dương';
    }

    if (!formData.hinhAnh.trim()) {
      newErrors.hinhAnh = 'URL hình ảnh là bắt buộc';
    } else if (!formData.hinhAnh.match(/^https?:\/\/.+/)) {
      newErrors.hinhAnh = 'URL hình ảnh không hợp lệ (phải bắt đầu bằng http:// hoặc https://)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const productData = {
      ...(isEdit && product ? { id: product.id } : {}),
      ten: formData.ten.trim(),
      danhMuc: formData.danhMuc as DanhMuc,
      gia: Number(formData.gia),
      soLuong: Number(formData.soLuong),
      moTa: formData.moTa.trim(),
      hinhAnh: formData.hinhAnh.trim()
    };

    onSubmit(productData as Product | Omit<Product, 'id'>);
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div className="form-group">
        <label htmlFor="ten">Tên sản phẩm *</label>
        <input
          type="text"
          id="ten"
          name="ten"
          value={formData.ten}
          onChange={handleChange}
          className={errors.ten ? 'error' : ''}
        />
        {errors.ten && <span className="error-message">{errors.ten}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="danhMuc">Danh mục *</label>
        <select
          id="danhMuc"
          name="danhMuc"
          value={formData.danhMuc}
          onChange={handleChange}
          className={errors.danhMuc ? 'error' : ''}
        >
          <option value="">-- Chọn danh mục --</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {errors.danhMuc && <span className="error-message">{errors.danhMuc}</span>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="gia">Giá (₫) *</label>
          <input
            type="number"
            id="gia"
            name="gia"
            value={formData.gia}
            onChange={handleChange}
            min="0"
            step="1000"
            className={errors.gia ? 'error' : ''}
          />
          {errors.gia && <span className="error-message">{errors.gia}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="soLuong">Số lượng *</label>
          <input
            type="number"
            id="soLuong"
            name="soLuong"
            value={formData.soLuong}
            onChange={handleChange}
            min="1"
            step="1"
            className={errors.soLuong ? 'error' : ''}
          />
          {errors.soLuong && <span className="error-message">{errors.soLuong}</span>}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="moTa">Mô tả</label>
        <textarea
          id="moTa"
          name="moTa"
          value={formData.moTa}
          onChange={handleChange}
          rows={4}
        />
      </div>

      <div className="form-group">
        <label htmlFor="hinhAnh">URL Hình ảnh *</label>
        <input
          type="url"
          id="hinhAnh"
          name="hinhAnh"
          value={formData.hinhAnh}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
          className={errors.hinhAnh ? 'error' : ''}
        />
        {errors.hinhAnh && <span className="error-message">{errors.hinhAnh}</span>}
        {formData.hinhAnh && !errors.hinhAnh && (
          <div className="image-preview">
            <img src={formData.hinhAnh} alt="Preview" onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }} />
          </div>
        )}
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {isEdit ? 'Cập nhật' : 'Thêm mới'}
        </button>
        <button type="button" onClick={handleCancel} className="btn btn-secondary">
          Hủy
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
