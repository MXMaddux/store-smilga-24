"use client";

import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function FavoriteToggleButton({ productId }: { productId: string }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite((prev) => !prev);
    console.log(`Toggled favorite for product: ${productId}`);
    // Optionally, make an API call here to update the favorite status
  };

  return (
    <Button
      size="icon"
      variant={isFavorite ? "default" : "outline"}
      className="p-2 cursor-pointer"
      onClick={handleToggleFavorite}
    >
      <FaHeart color={isFavorite ? "red" : "gray"} />
    </Button>
  );
}
export default FavoriteToggleButton;
