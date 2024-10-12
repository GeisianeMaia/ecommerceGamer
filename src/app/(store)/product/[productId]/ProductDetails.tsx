'use client';

import ProductDetailPage from "@/components/product/ProductDetailPage";

interface ProductDetailsProps{
  product: any;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({product}) =>{
  return <ProductDetailPage product={product}/>
}

export default ProductDetails;