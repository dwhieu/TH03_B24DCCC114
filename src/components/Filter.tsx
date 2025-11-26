import type { ChangeEvent } from 'react';
import type { DanhMuc } from '../types/product';

interface FilterProps {
  danhMuc: DanhMuc | 'all';
  minPrice: number;
  maxPrice: number;
  onDanhMucChange: (value: DanhMuc | 'all') => void;
  onMinPriceChange: (value: number) => void;
  onMaxPriceChange: (value: number) => void;
}

const Filter = ({
  danhMuc,
  minPrice,
  maxPrice,
  onDanhMucChange,
  onMinPriceChange,
  onMaxPriceChange
}: FilterProps) => {
  const categories: Array<DanhMuc | 'all'> = ['all', 'Điện tử', 'Quần áo', 'Đồ ăn', 'Sách', 'Khác'];

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onDanhMucChange(e.target.value as DanhMuc | 'all');
  };

  const handleMinPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    onMinPriceChange(Number(e.target.value));
  };

  const handleMaxPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    onMaxPriceChange(Number(e.target.value));
  };

  return (
    <div className="filter-container">
      <div className="filter-group">
        <label>Danh mục:</label>
        <select value={danhMuc} onChange={handleCategoryChange} className="filter-select">
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat === 'all' ? 'Tất cả' : cat}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Giá từ:</label>
        <input
          type="number"
          value={minPrice}
          onChange={handleMinPriceChange}
          min="0"
          className="filter-input"
        />
      </div>

      <div className="filter-group">
        <label>Giá đến:</label>
        <input
          type="number"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          min="0"
          className="filter-input"
        />
      </div>
    </div>
  );
};

export default Filter;
