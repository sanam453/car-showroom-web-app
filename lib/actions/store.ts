import { create } from "zustand";

export const useFavoritesStore = create((set) => ({
  items: [],
  isItemExists: (curItems: any, newValue: any) => {
    const localStorageItems = JSON.parse(
      window.localStorage.getItem("favoriteCars") || "[]"
    );

    const isExists = [...(localStorageItems || curItems)].find(
      (item: any) => item.id === newValue.id
    );

    return Boolean(isExists);
  },
  updateState: (newValue: any) =>
    set((curState: any) => {
      const localStorageItems = JSON.parse(
        window.localStorage.getItem("favoriteCars") || "[]"
      );

      // check if the item is already exists
      const isExists = curState.items.find(
        (item: any) => item.id === newValue.id
      );

      // if item exists, remove it from the list
      if (isExists) {
        const curItems = [...localStorageItems, ...curState.items];

        const nextValue = curItems.filter(
          (item: any) => item.id !== newValue.id
        );

        window.localStorage.setItem("favoriteCars", JSON.stringify(nextValue));

        return {
          items: nextValue,
        };
      }

      // if item doesn't exists, add it to the list
      const nextValue = [...localStorageItems, ...curState.items, newValue];

      window.localStorage.setItem("favoriteCars", JSON.stringify(nextValue));

      return {
        items: nextValue,
      };
    }),
}));