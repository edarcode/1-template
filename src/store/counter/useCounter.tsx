import { create } from "zustand";

type Count = {
  value: number;
  inc: () => void;
};

export const useCounter = create<Count>()((set, get) => ({
  value: 1,
  inc: () => {
    const { value } = get();
    set({ value: value + 1 });
  },
}));
