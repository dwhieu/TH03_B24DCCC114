# Ứng Dụng Quản Lý Sản Phẩm

Ứng dụng quản lý sản phẩm đầy đủ với React + TypeScript, React Router, và State Management (Context API + useReducer).

## 🚀 Tính năng

### ✅ CRUD Operations
- ✨ **Create**: Thêm sản phẩm mới với form validation (bao gồm URL hình ảnh)
- 📖 **Read**: Xem danh sách và chi tiết sản phẩm với hình ảnh đẹp mắt
- ✏️ **Update**: Chỉnh sửa thông tin sản phẩm kể cả hình ảnh
- 🗑️ **Delete**: Xóa sản phẩm với xác nhận

### 🔍 Tìm kiếm & Lọc
- 🔎 Tìm kiếm theo tên sản phẩm (real-time)
- 📂 Lọc theo danh mục (Điện tử, Quần áo, Đồ ăn, Sách, Khác)
- 💰 Lọc theo khoảng giá (min-max)

### 📄 Phân trang
- Hiển thị 6 sản phẩm mỗi trang
- Nút Previous/Next và số trang
- Hiển thị tổng số sản phẩm và trang hiện tại

### 🏗️ State Management
- Sử dụng Context API (useContext, createContext)
- Sử dụng useReducer cho quản lý state phức tạp
- State được chia sẻ giữa các component

## 📁 Cấu trúc dự án

```
src/
├── components/          # Các React components
│   ├── Filter.tsx      # Component lọc sản phẩm
│   ├── Pagination.tsx  # Component phân trang
│   ├── ProductCard.tsx # Card hiển thị sản phẩm
│   ├── ProductForm.tsx # Form thêm/sửa sản phẩm
│   └── SearchBar.tsx   # Thanh tìm kiếm
├── context/            # Context API & Reducer
│   └── ProductContext.tsx
├── data/               # Dữ liệu mẫu
│   └── initialProducts.ts
├── hooks/              # Custom hooks
│   └── useProducts.ts
├── pages/              # Các trang của ứng dụng
│   ├── AddProduct.tsx
│   ├── EditProduct.tsx
│   ├── HomePage.tsx
│   └── ProductDetail.tsx
├── types/              # TypeScript types
│   └── product.ts
├── App.tsx            # Component chính
├── App.css           # Styles
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## 🛠️ Công nghệ sử dụng

- **React 18** - Thư viện UI
- **TypeScript** - Type safety
- **React Router v6** - Routing
- **Context API** - State management
- **useReducer** - State management
- **Vite** - Build tool

## 📋 Routes

- `/` - Trang chủ (danh sách sản phẩm)
- `/products/:id` - Chi tiết sản phẩm
- `/add` - Thêm sản phẩm mới
- `/edit/:id` - Chỉnh sửa sản phẩm

## ✨ Validation

Form validation bao gồm:
- **Tên sản phẩm**: Bắt buộc, tối thiểu 3 ký tự
- **Giá**: Bắt buộc, phải là số dương
- **Số lượng**: Bắt buộc, phải là số nguyên dương
- **Danh mục**: Bắt buộc chọn
- **Hình ảnh**: Bắt buộc, phải là URL hợp lệ (http:// hoặc https://)

## 🎨 Giao diện

- Responsive design (mobile-friendly)
- Modern UI với CSS variables
- **Hiển thị hình ảnh sản phẩm đẹp mắt**
- **Hover effect zoom trên hình ảnh**
- **Image preview khi nhập URL**
- Hover effects và transitions
- Clean và professional layout

## 📦 Cài đặt và chạy

```bash
# Di chuyển vào thư mục dự án
cd product-management

# Cài đặt dependencies (đã hoàn tất)
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build
```

## 🔑 Các tính năng nổi bật

1. **Type Safety**: Sử dụng TypeScript cho toàn bộ dự án
2. **State Management**: Context API + useReducer pattern
3. **Real-time Search**: Tìm kiếm không cần nhấn nút
4. **Validation**: Form validation đầy đủ với thông báo lỗi
5. **Responsive**: Hoạt động tốt trên mọi thiết bị
6. **UX**: Confirm dialogs, loading states, empty states
7. **Images**: Hiển thị hình ảnh sản phẩm với Unsplash API
8. **Image Preview**: Preview hình ảnh khi nhập URL trong form

## 📊 Dữ liệu mẫu

Ứng dụng đi kèm với 12 sản phẩm mẫu thuộc các danh mục khác nhau để test các tính năng. **Tất cả sản phẩm đều có hình ảnh chất lượng cao từ Unsplash.**

## 🎯 Yêu cầu hoàn thành

✅ Cấu trúc ứng dụng với nhiều trang  
✅ React Router để điều hướng  
✅ CRUD đầy đủ cho sản phẩm  
✅ Tìm kiếm real-time  
✅ Lọc theo danh mục và giá  
✅ Phân trang với 6 sản phẩm/trang  
✅ State Management (useContext + useReducer)  
✅ TypeScript cho type safety  
✅ Form validation đầy đủ  
✅ Component structure hợp lý  
✅ 12 sản phẩm mẫu  

---

**Phát triển bởi**: Product Management System  
**Năm**: 2025
