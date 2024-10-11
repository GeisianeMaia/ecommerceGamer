import Link from "next/link";
import Product from "@/data/model/Product";
import Image from "next/image";

export interface ProductCardProps {
  product: Product;
  productsPerPage?: number;
}

const ProductList = (props: ProductCardProps) => {
  const { id, name, price, image } = props.product;
  const { productsPerPage } = props;

  return (
    <Link
      href={`/product/${id}`}
      className="mt-10 bg-white border border-gray-300 rounded-md flex flex-col gap-4 w-full sm:w-[45%] lg:w-[22%] max-w-[290px] shadow-md"
    >
      <div className="relative w-full h-80">
        <Image
          src={image}
          alt={name}
          fill
          className="absolute object-cover rounded-t-md"
          sizes="25vw"
        />
      </div>
      <div className="flex flex-col p-2.5">
        <span className="font-medium text-black">{name}</span>
        <span className="font-bold text-black">R$ {price.toFixed(2)}</span>
      </div>
      {productsPerPage && (
        <div className="text-center text-gray-500 mt-2">
          {`Exibindo ${productsPerPage} produtos por página`}
        </div>
      )}
    </Link>
  );
};

export default ProductList;
