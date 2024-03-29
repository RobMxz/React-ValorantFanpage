import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Divider, Center, Spinner } from "@chakra-ui/react";
import useValorantData from "./hooks/useValorantData";
function App() {
  const { agents, isLoading, error } = useValorantData();
  return (
    <>
      <Header />
      <div className="contenedor">
        {agents &&
          agents.map((agent) => {
            return (
              <div key={agent.uuid}>
                <div className="AgentImage">
                  <img
                    src={agent.fullPortrait}
                    alt={agent.displayName}
                    aspect-ratio={"1/1"}
                    width={400}
                    height={400}
                  />
                </div>
                <div className="AgentInfo">
                  {/*This div must be a card (component)*/}
                  <h1>{agent.displayName}</h1>
                  <h2>
                    Rol{" "}
                    <img src={agent.role.displayIcon} width={24} height={24} />{" "}
                    {agent.role.displayName}{" "}
                  </h2>
                  <p>{agent.description}</p>
                </div>
                {agent.developerName !== agent.displayName && (
                  <div className="Curiosity">
                    <p>Nombre en la beta {agent.developerName}</p>
                  </div>
                )}
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
      <Divider borderColor="green.300" size="full" variant="dashed" />
      <Footer />
    </>
  );
}

export default App;
