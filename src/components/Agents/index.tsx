import { Divider, Center, Spinner } from "@chakra-ui/react";
import useValorantData from "../../hooks/useValorantData";
import Curiosity from "./Curiosity/Curiosity";

const Agents = () => {
  const { agents, isLoading, error } = useValorantData();
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
              <div
                key={agent.uuid}
                style={{
                  display: "flex",
                  width: "720px",
                  height: "450px",
                  margin: "0",
                  padding: "0",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  className="AgentImage"
                  style={{
                    width: "100%",
                    height: "100%",
                    alignContent: "center",
                  }}
                >
                  <img
                    src={agent.fullPortrait}
                    alt={agent.displayName}
                    aspect-ratio={"16/9"}
                    width={"100%"}
                    height={"100%"}
                    style={{
                      margin: "0",
                      padding: "0",
                      filter: `drop-shadow(0px 0px 10px ${
                        "#" + agent.backgroundGradientColors[0]
                      }`,
                    }}
                  />
                </div>
                {/*Start (this must be a component)*/}
                <div
                  className="AgentInfo"
                  style={{
                    border: `2.5px solid ${
                      "#" + agent.backgroundGradientColors[0]
                    }`,

                    borderRadius: "10px",
                    padding: "10px",
                    borderImage: `linear-gradient(180deg, ${
                      "#" + agent.backgroundGradientColors[0]
                    }, ${"#" + agent.backgroundGradientColors[2]}
                    , ${"#" + agent.backgroundGradientColors[0]})`,
                    borderImageSlice: "1",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "3rem",
                      textAlign: "center",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                    }}
                  >
                    {agent.displayName}
                  </h1>
                  <Divider
                    borderColor={`${"#" + agent.backgroundGradientColors[0]}`}
                  ></Divider>
                  <h2
                    style={{
                      margin: "1em 0em",
                      padding: "0 2em",
                      display: "flex",
                      justifyContent: "space-evenly",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "0",
                      textAlign: "center",
                      fontSize: "1.5rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                    }}
                  >
                    <img
                      src={agent.role.displayIcon}
                      style={{
                        width: "1.5em",
                        height: "1.5em",
                        aspectRatio: "1/1",
                      }}
                    />{" "}
                    {agent.role.displayName}{" "}
                  </h2>
                  <Divider
                    borderColor={`${"#" + agent.backgroundGradientColors[0]}`}
                  ></Divider>

                  <div
                    className="prueba "
                    style={{ height: "calc(100% - 200px)" }}
                  >
                    {agent.developerName == agent.displayName && (
                      <div style={{ marginTop: "33px" }}></div>
                    )}

                    <p
                      style={{
                        marginTop: "1em",
                        alignItems: "center",
                        alignContent: "center",
                        height: "100%",
                      }}
                    >
                      {agent.description}
                    </p>
                  </div>
                  {/*End*/}
                  {agent.developerName !== agent.displayName && (
                    <Curiosity
                      color={agent.backgroundGradientColors[0]}
                      name={agent.developerName}
                    />
                  )}
                </div>
              </div>
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
