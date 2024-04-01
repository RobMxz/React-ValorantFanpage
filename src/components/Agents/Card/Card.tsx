import Curiosity from "../Curiosity/Curiosity";
import { Divider } from "@chakra-ui/react";
import { Agent } from "../../../hooks/useValorantData";
import CardImage from "./CardImage/CardImage";
interface CardProps {
  agent: Agent;
}

const Card = ({ agent }: CardProps) => {
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
      <CardImage
        fullPortrait={agent.fullPortrait}
        displayName={agent.displayName}
        color={agent.backgroundGradientColors[0]}
      />
      {/*Start (this must be a component)*/}
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

        <div className="prueba " style={{ height: "calc(100% - 200px)" }}>
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
};
export default Card;
