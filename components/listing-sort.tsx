"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSearchParams, useRouter } from "next/navigation";

const sorts = [
  {
    label: "Default",
    value: "default",
  },
  {
    label: "Price: Low to High",
    value: "priceAsc",
  },
  {
    label: "Price: High to Low",
    value: "priceDesc",
  },
  {
    label: "Year: Old to New",
    value: "yearAsc",
  },
  {
    label: "Year: New to Old",
    value: "yearDesc",
  },
];

export function ListingSort({ currentSort }: { currentSort: Sort }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [sort, setSort] = React.useState(currentSort);
  const [isPending, startTransition] = React.useTransition();

  React.useEffect(() => {
    const search = new URLSearchParams(searchParams.toString());

    if (sort) {
      search.set("sort", sort);
    } else {
      search.delete("sort");
    }

    startTransition(() => {
      router.push(`?${search.toString()}`, {
        scroll: false,
      });
    });
  }, [sort]);

  return (
    <div data-pending={isPending ? true : undefined}>
      <Select
        value={sort}
        onValueChange={(value: Sort) =>
          value === "default" ? setSort("") : setSort(value)
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort Cars" />
        </SelectTrigger>
        <SelectContent>
          {sorts.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
