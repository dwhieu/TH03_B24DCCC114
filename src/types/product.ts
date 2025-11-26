// Định nghĩa các types cho ứng dụng

export type DanhMuc = 'Điện tử' | 'Quần áo' | 'Đồ ăn' | 'Sách' | 'Khác';

export interface Product {
  id: number;
  ten: string;
  danhMuc: DanhMuc;
  gia: number;
  soLuong: number;
  moTa: string;
  hinhAnh: string;
}

export interface FilterState {
  searchTerm: string;
  danhMuc: DanhMuc | 'all';
  minPrice: number;
  maxPrice: number;
}

export interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
}

export type ProductAction =
  | { type: 'ADD_PRODUCT'; payload: Product }
  | { type: 'UPDATE_PRODUCT'; payload: Product }
  | { type: 'DELETE_PRODUCT'; payload: number }
  | { type: 'SET_PRODUCTS'; payload: Product[] };

export interface ProductState {
  products: Product[];
}
