import { create } from "zustand";

interface State {
  imgUrl?: string;
  isOpen: boolean;
  onOpen: (imgUrl?: string) => void;
  onClose: () => void;
}

export const useModal = create<State>((set) => ({
  imgUrl: undefined,
  isOpen: false,
  onClose: () =>
    set((state) => ({
      ...state,
      isOpen: false,
      imgUrl: undefined,
    })),
  onOpen: (imgUrl) => set((state) => ({ ...state, isOpen: true, imgUrl })),
}));
