import { Center, Spinner } from "@chakra-ui/react";
import Card from "../Card/Card";
import { Divider } from "@chakra-ui/react";
import Curiosity from "./Curiosity/Curiosity";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import useAgentsStore from "../../store/agentsData";
const Agents = () => {
  const { agents, isLoading, error, fetchAgents } = useAgentsStore();
  useEffect(() => {
    fetchAgents();
  }, []);

  return (
    <>
      <div
        className="contenedor"
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {agents &&
          agents.map((agent) => {
            return (
              <>
                <div className="Image-Info">
                  <div className="AgentImage">
                    <NavLink
                      to={`/${
                        "Agent/" +
                        agent.displayName.match(/[a-zA-Z]+/g)?.join("")
                      }`}
                    >
                      <img
                        src={agent.fullPortrait}
                        alt={agent.displayName}
                        style={{
                          filter: `drop-shadow(0px 0px 10px ${
                            "#" + agent.backgroundGradientColors[0]
                          })`,
                        }}
                      />
                    </NavLink>
                  </div>
                  <Card
                    className="AgentInfo"
                    style={{
                      borderImage: `linear-gradient(180deg,${
                        "#" + agent.backgroundGradientColors[0]
                      } , ${"#" + agent.backgroundGradientColors[2]}
                        , ${"#" + agent.backgroundGradientColors[0]})`,
                      borderImageSlice: "1",
                    }}
                  >
                    <Card.Header className="AgentTitle">
                      <h1>{agent.displayName}</h1>
                      <Divider
                        borderColor={`${
                          "#" + agent.backgroundGradientColors[0]
                        }`}
                      />
                    </Card.Header>
                    <Card.SubTitle className="AgentSubtitle">
                      <img src={agent.role.displayIcon} />
                      <h2> {agent.role.displayName} </h2>
                    </Card.SubTitle>
                    <Divider
                      borderColor={`${"#" + agent.backgroundGradientColors[0]}`}
                    />
                    {agent.developerName == agent.displayName && (
                      <div style={{ marginTop: "33px" }}></div>
                    )}
                    <Card.Content
                      style={{ height: "calc(100% - 200px)" }}
                      className="AgentDescription"
                    >
                      <p>{agent.description}</p>
                    </Card.Content>
                    {agent.developerName !== agent.displayName && (
                      <Curiosity
                        color={agent.backgroundGradientColors[0]}
                        name={agent.developerName}
                      />
                    )}
                  </Card>
                </div>
              </>
            );
          })}
      </div>
      {error && <div>Ha ocurrido un error</div>}
      {isLoading && (
        <Center marginBottom={32}>
          <Spinner size="xl" color="teal.500" thickness="8px" speed="0.65s" />
        </Center>
      )}
    </>
  );
};
export default Agents;
