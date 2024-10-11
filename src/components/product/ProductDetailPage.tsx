import Product from "@/data/model/Product"
import { IconShoppingCart } from "@tabler/icons-react";
import Image from "next/image";

export interface ProductCardProps {
  product: Product;
}

export default function ProductDetailPage(props: ProductCardProps){
  const { name, price, image, description } = props.product;
  return(
    <div className="max-w-full p-12 flex justify-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-5xl font-bold mb-6 text-black">{name}</h1>
        <div className="flex mb-6">
          <div className="relative w-1/2 h-80">
            <Image
              src={image}
              alt={name}
              fill
              className="absolute object-cover rounded-md"
              sizes="100vw"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-start pl-4">
            <h2 className="text-5xl font-semibold text-blue-600">{`R$ ${price.toFixed(2)}`}</h2>
            <p className="text-lg text-black mt-2">*Frete grátis para compras acima de R$900,00</p>
            <button className="mt-4 max-w-[350px] px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center justify-center">
              Adicionar ao carrinho
              <IconShoppingCart size={24} stroke={1} className="ml-2" />
            </button>
          </div>
        </div>
        <div>
        <strong className="text-2xl text-lg text-black">DESCRIÇÃO</strong>
        <p className="text-lg text-black">{description}</p>
        </div>
      </div>
    </div>
  )
}