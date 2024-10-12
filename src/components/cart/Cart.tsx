import Image from 'next/image';
import { IconX } from '@tabler/icons-react';
import useCart from '@/data/hooks/useCart';
import ResumeOrder from './ResumeOrder';


export default function Cart() {
  const { items } = useCart();
  const {remove} = useCart()

  const subtotal = items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const deliveryFee = 201;
  const total = subtotal + deliveryFee;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 px-10">
      <div className="p-4 bg-white">
        <h1 className="text-2xl font-bold mb-2 text-black">SEU CARRINHO</h1>
        <div className="flex items-center mb-4">
          <p className="text-lg font-semibold text-black">Total ({items.length} items)</p>
          <p className="text-lg font-bold text-black ml-4">R$ {total.toFixed(2)}</p>
        </div>
        {items.map((item) => (
          <div key={item.product.id} className="border border-gray-300 rounded-md p-4 mb-4 flex">
          <div className="relative w-28 h-28 mr-4">
            <Image
              src={item.product.image}
              alt={item.product.name}
              fill
              className="object-cover rounded"
            />
          </div>
          <div className="flex flex-col justify-between w-full">
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-black">{item.product.name}</p>
              <button onClick={() => remove(item.product)}className="text-red-500 hover:text-red-700 transition">
                <IconX size={24} />
              </button>
            </div>
            <p className="text-lg font-bold text-black flex flex-col items-end mt-2">R$ {(item.product.price * item.quantity).toFixed(2)}</p>
          </div>
        </div>
        ))}
      </div>
      <ResumeOrder subtotal={subtotal} deliveryFee={deliveryFee} total={total} />
    </div>
  );
}
