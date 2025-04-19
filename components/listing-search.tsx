"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { useDebounceValue } from "usehooks-ts";
import { useSearchParams, useRouter } from "next/navigation";

export function ListingSearch({ currentSearch }: { currentSearch: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = React.useTransition();
  const [search, setSearch] = useDebounceValue(currentSearch, 500);
  const [searchValue, setSearchValue] = React.useState(currentSearch);

  React.useEffect(() => {
    const urlParams = new URLSearchParams(searchParams.toString());

    if (search) {
      urlParams.set("search", search);
    } else {
      urlParams.delete("search");
    }

    startTransition(() => {
      router.push(`?${urlParams.toString()}`, {
        scroll: false,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div
      data-pending={isPending ? true : undefined}
      className="ml-auto relative w-full max-w-64"
    >
      <Input
        type="search"
        id="search-field"
        placeholder="Audi, BMW, Mercedes..."
        value={searchValue}
        onChange={({ target }) => {
          setSearch(String(target.value));
          setSearchValue(String(target.value));
        }}
      />
    </div>
  );
}
