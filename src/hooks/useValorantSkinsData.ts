import { useEffect, useState } from "react";
import axios from "axios";

export interface Skins {
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

const useEventsData = () => {
  const [skins, setSkins] = useState<Skins[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | undefined | unknown>();
  useEffect(() => {
    try {
      axios
        .get("https://valorant-api.com/v1/weapons/skins")
        .then((response) => {
          setSkins(response.data.data as Skins[]);
        });
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  }, []);
  return { skins: skins || [], isLoading, error };
};

export default useEventsData;
