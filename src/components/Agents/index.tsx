import { Center, Spinner } from "@chakra-ui/react";
import useValorantData from "../../hooks/useValorantData";
import Card from "./Card/Card";
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
            return <Card agent={agent} />;
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
