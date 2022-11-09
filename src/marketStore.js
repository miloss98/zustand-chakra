import create from "zustand";

export const useMarketStore = create((set) => ({
  value: 0,
  incrementValue: () => set((state) => ({ value: state.value + 1 })),
  decrementValue: () => set((state) => ({ value: state.value - 1 })),
  reset: () => set((state) => ({ value: (state.value = 0) })),
}));
