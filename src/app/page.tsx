"use client"; 
import { useState } from "react";
import Page from "@/components/layout/Page";
import products from "@/data/constants/products";
import ProductList from "@/components/catalog/ProductList";
import SearchBar from "@/components/catalog/SearchBar";
import FilterProduct from "@/components/catalog/FilterProduct";
import Pagination from "@/components/catalog/Pagination";
import Product from "@/data/model/Product";

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const PAGE_SIZE = 2;

  const handleSearch = (searchTerm: string) => {
    const filtered = products.filter(
      (product: Product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(0);
  };

  const handleFilter = (selectedCategories: string[], minPrice: number, maxPrice: number) => {
    const filtered = products.filter((product: Product) => {
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
      return matchesCategory && matchesPrice;
    });
    setFilteredProducts(filtered);
    setCurrentPage(0);
  };

  const totalProducts = filteredProducts.length;

  const currentProducts = filteredProducts.slice(
    currentPage * PAGE_SIZE,
    (currentPage + 1) * PAGE_SIZE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
            {currentProducts.length > 0 ? (
              currentProducts.map((product: Product) => (
                <ProductList key={product.id} product={product} productsPerPage={PAGE_SIZE} />
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
      <Pagination 
        totalItems={totalProducts} 
        currentPage={currentPage} 
        onPageChange={handlePageChange} 
      />
    </Page>
  );
}
