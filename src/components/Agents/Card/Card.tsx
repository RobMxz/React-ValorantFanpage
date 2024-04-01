import { Agent } from "../../../hooks/useValorantData";
import CardImage from "./CardImage/CardImage";
import CardInfo from "./CardInfo/CardInfo";
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
      <CardInfo agent={agent} />
    </div>
  );
};
export default Card;
