import { useEffect, useState } from "react";
import axios from "axios";

export interface Agent {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  characterTags: null;
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  backgroundGradientColors: string[];
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role: Role;
  recruitmentData: null;
  abilities: Ability[];
  voiceLine: null;
}

interface Ability {
  displayName: string;
  description: string;
  slot: string;
  displayIcon: string;
}

interface Role {
  uuid: string;
  displayName: string;
  description: string;
  displayIcon: string;
  assetPath: string;
}

const useEventsData = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | undefined | unknown>();
  useEffect(() => {
    try {
      axios
        .get(
          "https://valorant-api.com/v1/agents?language=es-MX&isPlayableCharacter=true"
        )
        .then((response) => {
          setAgents(response.data.data as Agent[]);
        });
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  }, []);
  return { agents: agents || [], isLoading, error };
};

export default useEventsData;
