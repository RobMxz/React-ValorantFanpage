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
  streamedVideo: string;
  assetPath: string;
}

interface Levels {
  uuid: string;
  displayName: string;
  levelItem: string;
  displayIcon: string;
  streamedVideo: string;
  assetPath: string;
}
