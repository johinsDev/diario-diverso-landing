import { create } from "zustand";

interface ImagesModalState {
  src: string | null;
  handleOpen: (index: string) => void;
  handleClose: () => void;
}

export const useImagesModal = create<ImagesModalState>((set) => ({
  src: null,
  handleOpen: (src) => set({ src }),
  handleClose: () => set({ src: null }),
}));
