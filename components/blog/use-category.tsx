import { CategoryPost } from "@/types";
import create from "zustand";

interface CategoryState {
  selectedCategory: CategoryPost | null;
  onSelectCategory: (category: CategoryPost | null) => void;
}

export const useCategory = create<CategoryState>((set) => ({
  selectedCategory: null,
  onSelectCategory: (selectedCategory) => set({ selectedCategory }),
}));
