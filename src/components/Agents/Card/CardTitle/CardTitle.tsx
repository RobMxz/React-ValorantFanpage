const CardTitle = ({ title }: { title: string }) => {
  return (
    <h1
      style={{
        fontSize: "3rem",
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: "0.15em",
      }}
    >
      {title}
    </h1>
  );
};
export default CardTitle;
