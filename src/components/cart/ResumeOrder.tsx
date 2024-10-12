import useCart from '@/data/hooks/useCart';
import React from 'react';

interface ResumeOrderProps {
  subtotal: number;
  deliveryFee: number;
  total: number;
}

const ResumeOrder: React.FC<ResumeOrderProps> = ({ subtotal, deliveryFee, total }) => {
  const {clearCart} = useCart()
  return (
    <div className="border border-gray-300 rounded-md p-4 bg-white">
      <h2 className="text-xl font-bold mb-2 text-black uppercase">Resumo do pedido</h2>
      <div className="flex justify-between mb-2 text-black">
        <p className="text-lg">Subtotal:</p>
        <p className="text-lg">R$ {subtotal.toFixed(2)}</p>
      </div>
      <div className="flex justify-between mb-2 text-black">
        <p className="text-lg">Entrega:</p>
        <p className="text-lg">R$ {deliveryFee.toFixed(2)}</p>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between text-black font-bold">
        <p className="text-lg">Total:</p>
        <p className="text-lg">R$ {total.toFixed(2)}</p>
      </div>
      <button onClick={clearCart}className="mt-4 w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition uppercase">
        Finalizar Compra
      </button>
    </div>
  );
}

export default ResumeOrder;
