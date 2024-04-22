import SkinDetail from "./index";

import { test } from "vitest";

import { render } from "@testing-library/react";
import { Skins } from "../../models/Skin";

const skinData: Skins = {
  uuid: "499acf05-4f79-e345-3714-57bf7aa163ea",
  displayName: "RGX 11z Pro Phantom",
  themeUuid: "495d492c-435b-2742-202b-9bb1dd30f6b5",
  contentTierUuid: "e046854e-406c-37f4-6607-19a9ba8426fc",
  displayIcon:
    "https://media.valorant-api.com/weaponskins/499acf05-4f79-e345-3714-57bf7aa163ea/displayicon.png",
  wallpaper: "",
  assetPath:
    "ShooterGame/Content/Equippables/Guns/Rifles/Carbine/Afterglow2/Carbine_Afterglow2_PrimaryAsset",
  chromas: [
    {
      uuid: "1788506c-4cd4-5a85-12cc-288b566ed869",
      displayName: "RGX 11z Pro Phantom",
      displayIcon:
        "https://media.valorant-api.com/weaponskinchromas/1788506c-4cd4-5a85-12cc-288b566ed869/displayicon.png",
      fullRender:
        "https://media.valorant-api.com/weaponskinchromas/1788506c-4cd4-5a85-12cc-288b566ed869/fullrender.png",
      swatch:
        "https://media.valorant-api.com/weaponskinchromas/1788506c-4cd4-5a85-12cc-288b566ed869/swatch.png",
      streamedVideo: "",
      assetPath:
        "ShooterGame/Content/Equippables/Guns/Rifles/Carbine/Afterglow2/Chromas/Standard/Carbine_Afterglow2_Standard_PrimaryAsset",
    },
    {
      uuid: "36f8c874-43d9-5764-9585-55b0141fdb9c",
      displayName: "RGX 11z Pro Phantom Level 5\n(Variant 1 Red)",
      displayIcon:
        "https://media.valorant-api.com/weaponskinchromas/36f8c874-43d9-5764-9585-55b0141fdb9c/displayicon.png",
      fullRender:
        "https://media.valorant-api.com/weaponskinchromas/36f8c874-43d9-5764-9585-55b0141fdb9c/fullrender.png",
      swatch:
        "https://media.valorant-api.com/weaponskinchromas/36f8c874-43d9-5764-9585-55b0141fdb9c/swatch.png",
      streamedVideo:
        "https://valorant.dyn.riotcdn.net/x/videos/release-08.07/76454adf-4539-b440-2927-aaa8c50b6488_default_universal.mp4",
      assetPath:
        "ShooterGame/Content/Equippables/Guns/Rifles/Carbine/Afterglow2/Chromas/v1/Carbine_Afterglow2_v1_PrimaryAsset",
    },
    {
      uuid: "f399ce20-4d22-b504-dbae-f8907bf25135",
      displayName: "RGX 11z Pro Phantom Level 5\n(Variant 2 Blue)",
      displayIcon:
        "https://media.valorant-api.com/weaponskinchromas/f399ce20-4d22-b504-dbae-f8907bf25135/displayicon.png",
      fullRender:
        "https://media.valorant-api.com/weaponskinchromas/f399ce20-4d22-b504-dbae-f8907bf25135/fullrender.png",
      swatch:
        "https://media.valorant-api.com/weaponskinchromas/f399ce20-4d22-b504-dbae-f8907bf25135/swatch.png",
      streamedVideo:
        "https://valorant.dyn.riotcdn.net/x/videos/release-08.07/25b94bda-45f6-f0af-e276-f8abd76f4b70_default_universal.mp4",
      assetPath:
        "ShooterGame/Content/Equippables/Guns/Rifles/Carbine/Afterglow2/Chromas/v2/Carbine_Afterglow2_v2_PrimaryAsset",
    },
    {
      uuid: "24fd1841-4d50-31b9-8b45-edbfd0f42b03",
      displayName: "RGX 11z Pro Phantom Level 5\n(Variant 3 Yellow)",
      displayIcon:
        "https://media.valorant-api.com/weaponskinchromas/24fd1841-4d50-31b9-8b45-edbfd0f42b03/displayicon.png",
      fullRender:
        "https://media.valorant-api.com/weaponskinchromas/24fd1841-4d50-31b9-8b45-edbfd0f42b03/fullrender.png",
      swatch:
        "https://media.valorant-api.com/weaponskinchromas/24fd1841-4d50-31b9-8b45-edbfd0f42b03/swatch.png",
      streamedVideo:
        "https://valorant.dyn.riotcdn.net/x/videos/release-08.07/9cd59643-4e2d-4312-1734-1c9c8bd00cac_default_universal.mp4",
      assetPath:
        "ShooterGame/Content/Equippables/Guns/Rifles/Carbine/Afterglow2/Chromas/v3/Carbine_Afterglow2_v3_PrimaryAsset",
    },
  ],
  levels: [
    {
      uuid: "49a986d0-4a07-b756-331e-babe1b2839d9",
      displayName: "RGX 11z Pro Phantom",
      levelItem: "",
      displayIcon:
        "https://media.valorant-api.com/weaponskinlevels/49a986d0-4a07-b756-331e-babe1b2839d9/displayicon.png",
      streamedVideo:
        "https://valorant.dyn.riotcdn.net/x/videos/release-08.07/d48bfbfa-44e5-6cce-238a-a8885aebe65f_default_universal.mp4",
      assetPath:
        "ShooterGame/Content/Equippables/Guns/Rifles/Carbine/Afterglow2/Levels/Carbine_Afterglow2_Lv1_PrimaryAsset",
    },
    {
      uuid: "4194e0af-4f61-f3e0-cf96-258f93cc82f4",
      displayName: "RGX 11z Pro Phantom Level 2",
      levelItem: "EEquippableSkinLevelItem::VFX",
      displayIcon: "",
      streamedVideo:
        "https://valorant.dyn.riotcdn.net/x/videos/release-08.07/47c53cdc-45d2-c85a-2b36-5fa7b6ee54a2_default_universal.mp4",
      assetPath:
        "ShooterGame/Content/Equippables/Guns/Rifles/Carbine/Afterglow2/Levels/Carbine_Afterglow2_Lv2_PrimaryAsset",
    },
    {
      uuid: "745fd101-4ba4-a3f7-eeb1-2b9a201721aa",
      displayName: "RGX 11z Pro Phantom Level 3",
      levelItem: "EEquippableSkinLevelItem::Animation",
      displayIcon: "",
      streamedVideo:
        "https://valorant.dyn.riotcdn.net/x/videos/release-08.07/07448477-4714-1c9d-734c-37a097ce09a2_default_universal.mp4",
      assetPath:
        "ShooterGame/Content/Equippables/Guns/Rifles/Carbine/Afterglow2/Levels/Carbine_Afterglow2_Lv3_PrimaryAsset",
    },
    {
      uuid: "9d47f8ab-42fa-167c-7704-3f9f2103ddc6",
      displayName: "RGX 11z Pro Phantom Level 4",
      levelItem: "EEquippableSkinLevelItem::Finisher",
      displayIcon: "",
      streamedVideo:
        "https://valorant.dyn.riotcdn.net/x/videos/release-08.07/61f46113-4fcc-33f2-78cb-b7948b46053c_default_universal.mp4",
      assetPath:
        "ShooterGame/Content/Equippables/Guns/Rifles/Carbine/Afterglow2/Levels/Carbine_Afterglow2_Lv4_PrimaryAsset",
    },
    {
      uuid: "c97c97b2-4f3b-fb34-32a4-548d32863042",
      displayName: "RGX 11z Pro Phantom Level 5",
      levelItem: "EEquippableSkinLevelItem::KillCounter",
      displayIcon: "",
      streamedVideo:
        "https://valorant.dyn.riotcdn.net/x/videos/release-08.07/ba16abb7-452c-5ca6-152a-409deac545da_default_universal.mp4",
      assetPath:
        "ShooterGame/Content/Equippables/Guns/Rifles/Carbine/Afterglow2/Levels/Carbine_Afterglow2_Lv5_PrimaryAsset",
    },
  ],
};

test(SkinDetail, () => {
  let result = render(
    <SkinDetail skin={skinData} name="RGX 11z Pro Phantom" />
  );
  console.log(result);
});
