import { ChangeEvent } from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
