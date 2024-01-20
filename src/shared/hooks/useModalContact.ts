import { create } from "zustand";

interface State {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const useModalContact = create<State>((set) => ({
  isOpen: false,
  isLoading: false,
  onOpen: () => set((state) => ({ ...state, isOpen: true })),
  onClose: () => set((state) => ({ ...state, isOpen: false})),
  setIsLoading: (isLoading) => set((state) => ({ ...state, isLoading }))
}));