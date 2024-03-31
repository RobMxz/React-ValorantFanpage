import { Divider } from "@chakra-ui/react";

type CuriosityProps = {
  color: string;
  name: string;
};

const Curiosity = ({ color, name }: CuriosityProps) => {
  return (
    <div className="Curiosity">
      <Divider borderColor={`${"#" + color}`}></Divider>
      <p
        style={{
          position: "absolute",
          bottom: "16px",
          fontSize: "0.8em",
          alignItems: "center",
          alignContent: "center",
          color: `${"#" + color}`,
        }}
      >
        Nombre en la beta: {name}
      </p>
    </div>
  );
};
export default Curiosity;
