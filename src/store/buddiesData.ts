import { create } from "zustand";
import axios from "axios";
import { Buddy } from "../models/Buddy";

interface BuddyStore {
  buddies: Buddy[];
  isLoading: boolean;
  error: Error | undefined | unknown;
  fetchBuddies: () => Promise<void>;
}

const useBuddiesStore = create<BuddyStore>((set) => ({
  buddies: [] as Buddy[],
  isLoading: true,
  error: undefined as Error | undefined | unknown,
  fetchBuddies: async () => {
    try {
      const response = await axios.get("https://valorant-api.com/v1/buddies");
      const data = response.data.data as Buddy[];
      set({ buddies: data, isLoading: false, error: undefined });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));

export default useBuddiesStore;
