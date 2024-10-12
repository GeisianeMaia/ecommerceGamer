'use client';
import Cart from "@/components/cart/Cart";
import Page from "@/components/layout/Page";
import useCart from "@/data/hooks/useCart";

const CartPage = () => {
  const { items } = useCart();

  return (
    <Page>
      {items.length === 0 ? (
        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold text-black">Carrinho Vazio</h2>
          <p className="mt-4 text-black">Seu carrinho está vazio. Adicione itens para continuar.</p>
        </div>
      ) : (
        <Cart /> 
        
      )}
    </Page>
  );
};

export default CartPage;
