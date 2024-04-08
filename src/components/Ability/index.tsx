import { Center, Divider } from "@chakra-ui/react";
import { Agent } from "../../hooks/useValorantData";
import {
  TbHexagonLetterQ,
  TbHexagonLetterC,
  TbHexagonLetterE,
  TbHexagonLetterX,
} from "react-icons/tb";
import { Icon } from "@chakra-ui/react";
import Card from "../Card/Card";

interface AbilityProps {
  agent: Agent;
}

const Ability = ({ agent }: AbilityProps) => {
  return (
    <>
      <div className="Agent-Ability">
        <div className="AgentImage">
          <h1
            style={{
              textAlign: "center",
              fontFamily: "xd",
              marginTop: "2em",
              fontSize: "2em",
              textTransform: "uppercase",
              color: `${"#" + agent.backgroundGradientColors[0]}`,
            }}
          >
            {agent.displayName}
            {" | "}
            {agent.role.displayName}
          </h1>
          <img
            src={agent.fullPortrait}
            alt={agent.displayName}
            style={{
              filter: `drop-shadow(0px 0px 10px ${
                "#" + agent.backgroundGradientColors[0]
              })`,
              aspectRatio: "16/9",
              width: "720px",
              height: "540px",
              marginBottom: "6em",
            }}
          />
        </div>
        <div className="contenedor2">
          {agent.abilities.map((ability) => (
            <>
              {ability.slot !== "Passive" && (
                <Card
                  className="ability"
                  style={{
                    borderImage: `linear-gradient(180deg,${
                      "#" + agent.backgroundGradientColors[0]
                    } , ${"#" + agent.backgroundGradientColors[2]}
        , ${"#" + agent.backgroundGradientColors[0]})`,
                    borderImageSlice: "1",
                    minWidth: "280px",
                  }}
                >
                  <Card.Header>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {ability.slot === "Ability1" && (
                        <Icon as={TbHexagonLetterQ} boxSize="2em" />
                      )}
                      {ability.slot === "Ability2" && (
                        <Icon as={TbHexagonLetterE} boxSize="2em" />
                      )}
                      {ability.slot === "Grenade" && (
                        <Icon as={TbHexagonLetterC} boxSize="2em" />
                      )}
                      {ability.slot === "Ultimate" && (
                        <Icon as={TbHexagonLetterX} boxSize="2em" />
                      )}
                      <h1 style={{ padding: "0 0 0 1em" }}>
                        {ability.displayName}
                      </h1>
                    </div>
                    <Divider
                      borderColor={`${"#" + agent.backgroundGradientColors[0]}`}
                    />
                  </Card.Header>

                  <Card.SubTitle style={{ marginTop: "1em" }}>
                    <Center>
                      <img
                        src={ability.displayIcon}
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          backgroundColor: `${
                            "#" + agent.backgroundGradientColors[1]
                          }`,
                          padding: "10px",
                          filter: `drop-shadow(0px 0px 10px ${
                            "#" + agent.backgroundGradientColors[0]
                          })`,
                          marginBottom: "1em",
                        }}
                      />
                    </Center>
                    <Divider
                      borderColor={`${"#" + agent.backgroundGradientColors[0]}`}
                    />
                  </Card.SubTitle>
                  <Card.Content
                    style={{
                      height: "calc(100% - 251px)",
                      marginBottom: "1em",
                    }}
                    className="AgentDescription"
                  >
                    <p>{ability.description}</p>
                  </Card.Content>
                </Card>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ability;
