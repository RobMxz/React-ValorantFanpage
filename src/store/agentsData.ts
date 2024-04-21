import { create } from "zustand";
import axios from "axios";
import { Agent } from "../models/Agent";

interface AgentsStore {
  agents: Agent[];
  isLoading: boolean;
  error: Error | undefined | unknown;
  fetchAgents: () => Promise<void>;
}

const useAgentsStore = create<AgentsStore>((set) => ({
  agents: [] as Agent[],
  isLoading: true,
  error: undefined as Error | undefined | unknown,
  fetchAgents: async () => {
    try {
      const response = await axios.get(
        "https://valorant-api.com/v1/agents?language=es-MX&isPlayableCharacter=true"
      );
      const data = response.data.data as Agent[];
      set({ agents: data, isLoading: false, error: undefined });
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));

export default useAgentsStore;
