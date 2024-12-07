"use client";

import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}

export default HomePage;

// "use client";

// import FeaturedProducts from "@/components/home/FeaturedProducts";
// import Hero from "@/components/home/Hero";
// import LoadingContainer from "@/components/global/LoadingContainer";
// import { Suspense } from "react";
// function HomePage() {
//   return (
//     <>
//       <Hero />
//       <Suspense fallback={<LoadingContainer />}>
//         <FeaturedProducts />
//       </Suspense>
//     </>
//   );
// }
// export default HomePage;
