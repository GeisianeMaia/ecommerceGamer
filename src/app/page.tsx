"use client";
import { useState } from "react";
import Page from "@/components/layout/Page";
import products from "@/data/constants/products";
import ProductList from "@/components/catalog/ProductList";
import SearchBar from "@/components/catalog/SearchBar";
import FilterProduct from "@/components/catalog/FilterProduct";

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (searchTerm: string) => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleFilter = (selectedCategories: string[], minPrice: number, maxPrice: number) => {
    const filtered = products.filter((product) => {
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
      return matchesCategory && matchesPrice;
    });
    setFilteredProducts(filtered);
  };

  return (
    <Page>
      <div className="flex p-4 gap-4 flex-wrap">
        <div className="w-full md:w-1/4 flex justify-center mt-24">
          <FilterProduct onFilter={handleFilter} />
        </div>
        <div className="flex-1">
          <div className="flex justify-start mb-4">
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="flex gap-5 justify-start flex-wrap">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductList key={product.id} product={product} />
              ))
            ) : (
              <div className="flex items-center justify-center w-full min-h-screen">
                <p className="text-center font-bold text-3xl text-gray-500">
                  Produto não encontrado!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Page>
  );
}
