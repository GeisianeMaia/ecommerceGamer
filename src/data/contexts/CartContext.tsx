'use client';
import { createContext, useEffect, useState } from "react";
import Product from "../model/Product";
import CartItem from "../model/CartItem";
import useLocalStorage from "../hooks/useLocalStorage";

interface ContextCartProps {
  items: CartItem[];
  qtdeItems: number;
  add: (item: Product) => void;
  remove: (item: Product) => void;
  clearCart: () => void;
}

const ContextCart = createContext<ContextCartProps>({} as any);

export function CartProvider(props: any) {
  const { set, get } = useLocalStorage();
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedItems = get('cart');
    if (storedItems) {
      try {
        const parsedItems = JSON.parse(storedItems);
        if (Array.isArray(parsedItems)) {
          setItems(parsedItems); 
        }
      } catch (error) {
        console.error('Error parsing stored items:', error);
      }
    }
  }, [get]);

  useEffect(() => {
    set('cart', JSON.stringify(items));
  }, [items, set]);

  function add(product: Product) {
    const index = items.findIndex((i) => i.product.id === product.id);
    let newItems: CartItem[];

    if (index === -1) {
      newItems = [...items, { product, quantity: 1 }];
    } else {
      newItems = [...items];
      newItems[index].quantity++;
    }

    setItems(newItems);
  }

  function remove(product: Product) {
    const newItems = items.filter((item) => item.product.id !== product.id);
    setItems(newItems);
  }

  function clearCart() {
    setItems([]);
  }

  return (
    <ContextCart.Provider value={{
      items,
      add,
      remove,
      clearCart,
      get qtdeItems() {
        return items.reduce((total, item) => total + item.quantity, 0);
      }
    }}>
      {props.children}
    </ContextCart.Provider>
  );
}

export default ContextCart;
