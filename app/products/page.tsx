import ProductsContainer from "@/components/products/ProductsContainer";

function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const layout = searchParams.layout || "grid";
  const search = searchParams.search || "";

  return <ProductsContainer layout={layout} search={search} />;
}

export default ProductsPage;
