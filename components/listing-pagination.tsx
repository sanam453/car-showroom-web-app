"use client";

import React from "react";

// components
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// hooks
import { useRouter, useSearchParams } from "next/navigation";

export function ListingPagination({ currentPage }: { currentPage: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = React.useTransition();
  const [page, setPage] = React.useOptimistic(Number(currentPage));

  const pageNumber = React.useMemo(() => {
    if (page > 6) {
      return 6;
    } else if (page < 1) {
      return 1;
    } else {
      return page;
    }
  }, [page]);

  function handlePageChange(nextPage: number) {
    const search = new URLSearchParams(searchParams.toString());

    search.set("page", String(nextPage));

    startTransition(() => {
      setPage(nextPage);
      router.push(`?${search.toString()}`, {
        scroll: false,
      });
    });
  }

  return (
    <div data-pending={isPending ? true : undefined} className="mt-8 w-full">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              aria-disabled={pageNumber === 1}
              onClick={() => handlePageChange(page - 1)}
            />
          </PaginationItem>
          {Array.from({ length: 6 }, (_, i) => {
            const pageNum = i + 1;

            return (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  isActive={pageNum === pageNumber}
                  onClick={() => handlePageChange(pageNum)}
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          <PaginationItem>
            <PaginationNext
              aria-disabled={pageNumber === 6}
              onClick={() => handlePageChange(page + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
