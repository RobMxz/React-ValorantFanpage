import { create } from "zustand";
import axios from "axios";
import { Skins } from "../models/Skin";

interface SkinsStore {
  skins: Skins[];
  isLoading: boolean;
  error: Error | undefined | unknown;
  fetchSkins: () => Promise<void>;
}

const useSkinsStore = create<SkinsStore>((set) => ({
  skins: [] as Skins[],
  isLoading: true,
  error: undefined as Error | undefined | unknown,
  fetchSkins: async () => {
    try {
      const response = await axios.get(
        "https://valorant-api.com/v1/weapons/skins"
      );
      const data = response.data.data as Skins[];
      set({ skins: data, isLoading: false, error: undefined });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));
export default useSkinsStore;
