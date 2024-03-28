import "./App.css";
import axios from "axios";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import { Divider } from "@chakra-ui/react";

function App() {
  interface Agent {
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
    abilities: string[];
    voiceLine: null;
  }
  interface Role {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
    assetPath: string;
  }
  const [agents, setAgents] = useState<Agent[]>([]); // Set initial value to an empty array

  useEffect(() => {
    axios
      .get(
        "https://valorant-api.com/v1/agents?language=es-MX&isPlayableCharacter=true"
      )
      .then((response) => {
        setAgents(response.data.data as Agent[]);
      });
  }, []);

  console.log(typeof agents);

  return (
    <>
      <NavBar />
      <div className="contenedor">
        {agents &&
          agents.map((agent) => {
            return (
              <div key={agent.uuid}>
                <div className="AgentImage">
                  <img
                    src={agent.fullPortrait}
                    alt={agent.displayName}
                    aspect-ratio={"1/1"}
                    width={400}
                    height={400}
                  />
                </div>
                <div className="AgentInfo">
                  {/*This div must be a card (component)*/}
                  <h1>{agent.displayName}</h1>
                  <h2>
                    Rol{" "}
                    <img src={agent.role.displayIcon} width={24} height={24} />{" "}
                    {agent.role.displayName}{" "}
                  </h2>
                  <p>{agent.description}</p>
                </div>
                {agent.developerName !== agent.displayName && (
                  <div className="Curiosity">
                    <p>Nombre en la beta {agent.developerName}</p>
                  </div>
                )}
              </div>
            );
          })}
      </div>
      <Divider borderColor="green.300" size="full" variant="dashed" />
      <Footer />
    </>
  );
}

export default App;
