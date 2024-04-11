import { Center, Divider, Spinner } from "@chakra-ui/react";
import useValorantSkinsData from "../../hooks/useValorantSkinsData";
import Card from "../Card/Card";

const Skins = () => {
  const { skins, isLoading, error } = useValorantSkinsData();

  return (
    <>
      <Center>
        <div className="contenedorSkin">
          {skins &&
            skins.map((skin) => {
              let skinFirstWord = skin.displayName.split(" ")[0];
              return (
                <>
                  {skin.displayIcon &&
                    skinFirstWord != "Standard" &&
                    skinFirstWord != "Random" && (
                      <Center>
                        <div
                          style={{
                            width: "calc(100% - 2em)",
                            height: "100%",
                          }}
                        >
                          <Card className="SkinBox">
                            <Card.Header
                              style={{
                                height: "120px",
                                paddingTop: "1em",
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                              }}
                            >
                              <h1 style={{ padding: "0 1em" }}>
                                {skin.displayName}
                              </h1>
                            </Card.Header>
                            <Divider borderColor={"#C6F6D5"} />
                            <Card.Content
                              style={{
                                height: "325px",
                                alignContent: "center",
                              }}
                            >
                              <Center>
                                <img
                                  src={skin.displayIcon}
                                  style={{
                                    filter: "drop-shadow(5px 0px 5px #C6F6D5)",
                                    height: "100px",
                                    width: "420px",
                                  }}
                                />
                              </Center>
                            </Card.Content>
                          </Card>
                        </div>
                      </Center>
                    )}
                </>
              );
            })}
        </div>
      </Center>
      {error && <div>Ha ocurrido un error</div>}
      {isLoading && (
        <Center marginBottom={32}>
          <Spinner size="xl" color="teal.500" thickness="8px" speed="0.65s" />
        </Center>
      )}
    </>
  );
};

export default Skins;
