"use client";

import { Input } from "../ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState, useEffect, useMemo } from "react";

const NavSearch = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  // Memoize the current search value to avoid redundant updates
  const initialSearch = useMemo(
    () => searchParams.get("search") || "",
    [searchParams]
  );
  const [search, setSearch] = useState(initialSearch);

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString()); // Use `.toString()` to ensure proper parsing
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`/products?${params.toString()}`);
  }, 300);

  // Update search state when searchParams change
  useEffect(() => {
    setSearch(initialSearch);
  }, [initialSearch]);

  return (
    <Input
      type="search"
      placeholder="Search product..."
      className="max-w-xs dark:bg-muted"
      onChange={(e) => {
        const value = e.target.value;
        setSearch(value); // Update local state
        handleSearch(value); // Trigger debounced search
      }}
      value={search}
    />
  );
};

export default NavSearch;

// "use client";
// import { Input } from "../ui/input";
// import { useSearchParams, useRouter } from "next/navigation";
// import { useDebouncedCallback } from "use-debounce";
// import { useState, useEffect } from "react";

// const NavSearch = () => {
//   const searchParams = useSearchParams();
//   const { replace } = useRouter();
//   const [search, setSearch] = useState(
//     searchParams.get("search")?.toString() || ""
//   );
//   const handleSearch = useDebouncedCallback((value: string) => {
//     const params = new URLSearchParams(searchParams);
//     if (value) {
//       params.set("search", value);
//     } else {
//       params.delete("search");
//     }
//     replace(`/products?${params.toString()}`);
//   }, 300);

//   useEffect(() => {
//     if (!searchParams.get("search")) {
//       setSearch("");
//     }
//   }, [searchParams.get("search")]);

//   return (
//     <Input
//       type="search"
//       placeholder="search product..."
//       className="max-w-xs dark:bg-muted"
//       onChange={(e) => {
//         setSearch(e.target.value);
//         handleSearch(e.target.value);
//       }}
//       value={search}
//     />
//   );
// };

// export default NavSearch;
