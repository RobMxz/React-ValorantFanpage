import Ability from "./index";
import { test } from "vitest";

import { render } from "@testing-library/react";

import { Agent } from "../../models/Agent";

const abilityData: Agent = {
  uuid: "e370fa57-4757-3604-3648-499e1f642d3f",
  displayName: "Gekko",
  description:
    "Gekko, el nativo de Los Ángeles, lidera un grupo de criaturas revoltosas, y son como uña y mugre. Sus amiguitos avanzan a toda velocidad, dispersando a los enemigos, y Gekko los persigue para reagruparlos y lanzarlos de nuevo.",
  developerName: "Aggrobot",
  characterTags: null,
  displayIcon:
    "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayicon.png",
  displayIconSmall:
    "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/displayiconsmall.png",
  bustPortrait:
    "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png",
  fullPortrait:
    "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png",
  fullPortraitV2:
    "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/fullportrait.png",
  killfeedPortrait:
    "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/killfeedportrait.png",
  background:
    "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/background.png",
  backgroundGradientColors: ["c7f458ff", "d56324ff", "3a2656ff", "3a7233ff"],
  assetPath: "ShooterGame/Content/Characters/AggroBot/AggroBot_PrimaryAsset",
  isFullPortraitRightFacing: false,
  isPlayableCharacter: true,
  isAvailableForTest: false,
  isBaseContent: false,
  role: {
    uuid: "1b47567f-8f7b-444b-aae3-b0c634622d10",
    displayName: "Iniciador",
    description:
      "Los iniciadores crean oportunidades para que el equipo pueda despejar ángulos, entrar a zonas en disputa y alejar a los defensores.",
    displayIcon:
      "https://media.valorant-api.com/agents/roles/1b47567f-8f7b-444b-aae3-b0c634622d10/displayicon.png",
    assetPath:
      "ShooterGame/Content/Characters/_Core/Roles/Breaker_PrimaryDataAsset",
  },
  recruitmentData: null,
  abilities: [
    {
      slot: "Ability1",
      displayName: "Carnalito",
      description:
        "EQUIPA a Carnalito. DISPARA para enviar a Carnalito hacia adelante en busca de enemigos; Carnalito libera una explosión conmocionante hacia el primer enemigo que ve. Usa DISPARO SECUNDARIO al apuntar a un sitio de Spike o a una Spike plantada para que Carnalito plante o desactive la Spike, respectivamente. Para plantarla, Gekko debe tener la Spike en su inventario. Cuando Carnalito se agota, regresa a su forma de glóbulo en reposo; INTERACTÚA para recuperar el glóbulo y obtener otra carga de Carnalito tras un breve enfriamiento.",
      displayIcon:
        "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ability1/displayicon.png",
    },
    {
      slot: "Ability2",
      displayName: "Vértigo",
      description:
        "EQUIPA a Vértigo. DISPARA para enviar a Vértigo volando hacia adelante. Vértigo carga y luego libera explosiones de plasma contra los enemigos en su campo de visión; los enemigos alcanzados por su plasma quedan cegados. Cuando Vértigo se agota, regresa a su forma de glóbulo en reposo; INTERACTÚA para recuperar el glóbulo y obtener otra carga de Vértigo tras un breve enfriamiento.",
      displayIcon:
        "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ability2/displayicon.png",
    },
    {
      slot: "Grenade",
      displayName: "Pogo Brutal",
      description:
        "EQUIPA a Pogo. DISPARA para lanzar a Pogo como una granada. Usa el DISPARO SECUNDARIO para lanzarla por debajo. Al aterrizar, Pogo se duplica en una zona amplia que inflige un poco de daño prolongado y luego explota después de un corto lapso de tiempo.",
      displayIcon:
        "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/grenade/displayicon.png",
    },
    {
      slot: "Ultimate",
      displayName: "Paliza",
      description:
        "EQUIPA a Paliza. DISPARA para vincularte con la mente de Paliza y dirigirla a través del territorio enemigo; ACTIVA para embestir hacia adelante y explotar, lo que inmoviliza a los enemigos en un pequeño radio. Cuando Paliza se agota, regresa a su forma de glóbulo en reposo; INTERACTÚA para recuperar el glóbulo y obtener otra carga de Paliza tras un breve enfriamiento. Solo se puede recuperar a Paliza una vez.",
      displayIcon:
        "https://media.valorant-api.com/agents/e370fa57-4757-3604-3648-499e1f642d3f/abilities/ultimate/displayicon.png",
    },
  ],
  voiceLine: null,
};
test(Ability, () => {
  const result = render(<Ability agent={abilityData} />);
});
