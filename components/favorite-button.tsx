"use client";

// utils
import { useFavoritesStore } from "@/lib/actions/store";

// components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";

// icons
import { Heart, HeartOff } from "lucide-react";

export function FavoriteButton({ car }: { car: any }) {
  const { items, updateState, isItemExists }: any = useFavoritesStore(
    (state) => state
  );

  const isCarExists = isItemExists(items, car);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="flex items-center gap-2">
          <Button className="text-xl" onClick={() => updateState(car)}>
            {isCarExists ? <Heart /> : <HeartOff />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>Add to Favorite</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
