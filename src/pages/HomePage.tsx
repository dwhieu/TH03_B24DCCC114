import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';
import type { DanhMuc } from '../types/product';

const HomePage = () => {
  const { state, deleteProduct } = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [danhMuc, setDanhMuc] = useState<DanhMuc | 'all'>('all');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000000);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter and search products
  const filteredProducts = useMemo(() => {
    return state.products.filter(product => {
      const matchesSearch = product.ten.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = danhMuc === 'all' || product.danhMuc === danhMuc;
      const matchesPrice = product.gia >= minPrice && product.gia <= maxPrice;
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [state.products, searchTerm, danhMuc, minPrice, maxPrice]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    handleFilterChange();
  };

  const handleCategoryChange = (value: DanhMuc | 'all') => {
    setDanhMuc(value);
    handleFilterChange();
  };

  const handleMinPriceChange = (value: number) => {
    setMinPrice(value);
    handleFilterChange();
  };

  const handleMaxPriceChange = (value: number) => {
    setMaxPrice(value);
    handleFilterChange();
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Quản lý sản phẩm</h1>
        <Link to="/add" className="btn btn-primary">
          + Thêm sản phẩm mới
        </Link>
      </div>

      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      <Filter
        danhMuc={danhMuc}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onDanhMucChange={handleCategoryChange}
        onMinPriceChange={handleMinPriceChange}
        onMaxPriceChange={handleMaxPriceChange}
      />

      {filteredProducts.length === 0 ? (
        <div className="no-products">
          <p>Không tìm thấy sản phẩm nào phù hợp.</p>
        </div>
      ) : (
        <>
          <div className="products-grid">
            {currentProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onDelete={deleteProduct}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredProducts.length}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
