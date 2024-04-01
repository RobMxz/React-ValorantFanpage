const CardImage = ({
  fullPortrait,
  displayName,
  color,
}: {
  fullPortrait: string;
  displayName: string;
  color: string;
}) => {
  return (
    <div
      className="AgentImage"
      style={{
        width: "100%",
        height: "100%",
        alignContent: "center",
      }}
    >
      <img
        src={fullPortrait}
        alt={displayName}
        aspect-ratio={"16/9"}
        width={"100%"}
        height={"100%"}
        style={{
          margin: "0",
          padding: "0",
          filter: `drop-shadow(0px 0px 10px ${"#" + color}`,
        }}
      />
    </div>
  );
};
export default CardImage;
