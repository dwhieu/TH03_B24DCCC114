interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, totalItems, onPageChange }: PaginationProps) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`page-btn ${currentPage === i ? 'active' : ''}`}
          disabled={currentPage === i}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <div className="pagination-info">
        Hiển thị trang {currentPage} / {totalPages} (Tổng {totalItems} sản phẩm)
      </div>
      <div className="pagination-controls">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="page-btn"
        >
          Previous
        </button>
        {renderPageNumbers()}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="page-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
