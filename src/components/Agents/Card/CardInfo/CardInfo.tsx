import { Divider } from "@chakra-ui/react";
import { Agent } from "../../../../hooks/useValorantData";
import Curiosity from "../../Curiosity/Curiosity";
import CardTitle from "../CardTitle/CardTitle";
interface CardProps {
  agent: Agent;
}
const CardInfo = ({ agent }: CardProps) => {
  return (
    <div
      className="AgentInfo"
      style={{
        border: `2.5px solid ${"#" + agent.backgroundGradientColors[0]}`,

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
      <CardTitle title={agent.displayName} />
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

      <div style={{ height: "calc(100% - 200px)" }}>
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
      {agent.developerName !== agent.displayName && (
        <Curiosity
          color={agent.backgroundGradientColors[0]}
          name={agent.developerName}
        />
      )}
    </div>
  );
};
export default CardInfo;
