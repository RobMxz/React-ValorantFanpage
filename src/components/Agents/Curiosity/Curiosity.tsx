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
          color: `${"#" + color}`,
        }}
      >
        Nombre en la beta: {name}
      </p>
    </div>
  );
};
export default Curiosity;
