// "use client";

// import { useEffect, useState } from "react";
// import { fetchFeaturedProducts } from "@/utils/actions";
// import EmptyList from "../global/EmptyList";
// import SectionTitle from "../global/SectionTitle";
// import ProductsGrid from "../products/ProductsGrid";

// function FeaturedProducts() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const data = await fetchFeaturedProducts();
//       setProducts(data);
//       setLoading(false);
//     };
//     fetchProducts();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (products.length === 0) return <EmptyList />;

//   return (
//     <section className="pt-24">
//       <SectionTitle text="featured products" />
//       <ProductsGrid products={products} />
//     </section>
//   );
// }
// export default FeaturedProducts;

import { fetchFeaturedProducts } from "@/utils/actions";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";

async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) return <EmptyList />;
  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid products={products} />
    </section>
  );
}
export default FeaturedProducts;
