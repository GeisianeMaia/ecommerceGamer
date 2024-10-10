import Page from "@/components/layout/Page";
import products from "@/data/constants/products";
import ProductList from "@/components/catalog/ProductList";
import SearchBar from "@/components/catalog/SearchBar";

export default function Home() {
  return (
    <Page>
      <SearchBar />
      <div className="flex gap-5 justify-center flex-wrap">
        {products.map((product) => (
          <ProductList key={product.id} product={product} />
        ))}
      </div>
    </Page>
  );
}
