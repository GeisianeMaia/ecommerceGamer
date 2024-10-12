'use client'
import { useParams } from 'next/navigation';
import ProductDetails from "./ProductDetails";
import products from '@/data/constants/products';

const Product = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === Number(productId));

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default Product;
