import create from "zustand";

export const useMarketStore = create((set) => ({
  value: 0,
  increment: () => set((state) => ({ value: state.value + 1 })),
  decrement: () => set((state) => ({ value: state.value - 1 })),
  reset: () => set((state) => ({ value: (state.value = 0) })),
}));
