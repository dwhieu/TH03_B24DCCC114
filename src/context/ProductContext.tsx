import { createContext, useReducer } from 'react';
import type { ReactNode } from 'react';
import type { Product, ProductState, ProductAction } from '../types/product';
import { initialProducts } from '../data/initialProducts';

// Reducer function
const productReducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id ? action.payload : product
        )
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      };
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
};

// Context type
interface ProductContextType {
  state: ProductState;
  dispatch: React.Dispatch<ProductAction>;
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
  getProductById: (id: number) => Product | undefined;
}

// Create Context
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Provider Component
interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [state, dispatch] = useReducer(productReducer, {
    products: initialProducts
  });

  // Helper functions
  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...product,
      id: Math.max(0, ...state.products.map(p => p.id)) + 1
    };
    dispatch({ type: 'ADD_PRODUCT', payload: newProduct });
  };

  const updateProduct = (product: Product) => {
    dispatch({ type: 'UPDATE_PRODUCT', payload: product });
  };

  const deleteProduct = (id: number) => {
    dispatch({ type: 'DELETE_PRODUCT', payload: id });
  };

  const getProductById = (id: number): Product | undefined => {
    return state.products.find(product => product.id === id);
  };

  return (
    <ProductContext.Provider
      value={{
        state,
        dispatch,
        addProduct,
        updateProduct,
        deleteProduct,
        getProductById
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext };
