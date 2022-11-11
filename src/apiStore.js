import create from "zustand";
import axios from "axios";

export const useApiStore = create((set) => ({
  data: [],
  fetchData: async () => {
    const req = await axios.get("https://jsonplaceholder.typicode.com/users");
    set({ data: req.data });
  },
}));
