import { create } from "zustand";
import axios from "axios";

interface Skins {
  uuid: string;
  displayName: string;
  themeUuid: string;
  contentTierUuid: string;
  displayIcon: string;
  wallpaper: string;
  assetPath: string;
  chromas: Chromas[];
  levels: Levels[];
}

interface Chromas {
  uuid: string;
  displayName: string;
  displayIcon: string;
  fullRender: string;
  swatch: string;
  streamVideo: string;
  assetPath: string;
}

interface Levels {
  uuid: string;
  displayName: string;
  levelItem: string;
  displayIcon: string;
  streamVideo: string;
  assetPath: string;
}
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
