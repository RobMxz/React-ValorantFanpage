import { create } from "zustand";
import axios from "axios";
import { Card } from "../models/Card";

interface CardStore {
  cards: Card[];
  isLoading: boolean;
  error: Error | undefined | unknown;
  fetchCards: () => Promise<void>;
}

const useCardsStore = create<CardStore>((set) => ({
  cards: [] as Card[],
  isLoading: true,
  error: undefined as Error | undefined | unknown,
  fetchCards: async () => {
    try {
      const response = await axios.get(
        "https://valorant-api.com/v1/playercards"
      );
      const data = response.data.data as Card[];
      set({ cards: data, isLoading: false, error: undefined });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));

export default useCardsStore;
