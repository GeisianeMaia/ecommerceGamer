"use client";
import { useState } from "react";
import Page from "@/components/layout/Page";
import products from "@/data/constants/products";
import ProductList from "@/components/catalog/ProductList";
import SearchBar from "@/components/catalog/SearchBar";

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (searchTerm: string) => {
    if (searchTerm.trim() === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <Page>
      <SearchBar onSearch={handleSearch} />
      <div className="flex gap-5 justify-center flex-wrap">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductList key={product.id} product={product} />
          ))
        ) : (
          <div className="flex items-center justify-center w-full min-h-screen">
            <p className="text-center font-bold text-gray-500 text-3xl">Produto não encontrado!</p>
          </div>
        )}
      </div>
    </Page>
  );
}
