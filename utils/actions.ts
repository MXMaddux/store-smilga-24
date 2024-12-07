import db from "@/utils/db";
import { redirect } from "next/navigation";
import { Product } from "@prisma/client";

export const fetchFeaturedProducts = async (): Promise<
  {
    id: string;
    name: string;
    company: string;
    description: string;
    featured: boolean;
    image: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    clerkId: string;
  }[]
> => {
  try {
    const products = await db.product.findMany({
      where: {
        featured: true,
      },
      select: {
        id: true,
        name: true,
        company: true, // Ensures this field is always included
        description: true,
        featured: true,
        image: true,
        price: true,
        createdAt: true,
        updatedAt: true,
        clerkId: true,
      },
    });
    return products;
  } catch (error) {
    console.error("Error fetching featured products:", error);
    throw new Error("Failed to fetch featured products.");
  }
};

// export const fetchFeaturedProducts = async () => {
//   const products = await db.product.findMany({
//     where: {
//       featured: true,
//     },
//   });
//   return products;
// };

export const fetchAllProducts = ({ search = "" }: { search: string }) => {
  return db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) redirect("/products");
  return product;
};
