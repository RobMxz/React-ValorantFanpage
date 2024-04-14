import { Center, Divider, Spinner } from "@chakra-ui/react";
import Card from "../Card/Card";
import Search from "../Search";
import React, { useState } from "react";
import { useEffect } from "react";
import useSkinsStore from "../../store/skinsData";
import { NavLink } from "react-router-dom";
const Skins = () => {
  const { skins, isLoading, error, fetchSkins } = useSkinsStore();
  useEffect(() => {
    fetchSkins();
  }, []);
  const [search, setSearch] = useState("");
  return (
    <>
      <div style={{ marginTop: "2em" }}>
        <Search setSearch={setSearch} />
        <p>{search}</p>
      </div>
      <Center>
        <div className="contenedorSkin">
          {skins &&
            skins.map((skin) => {
              let skinFirstWord = skin.displayName.split(" ")[0];
              return (
                <React.Fragment key={skin.uuid}>
                  {skin.displayIcon &&
                    skinFirstWord != "Standard" &&
                    skinFirstWord != "Random" &&
                    skin.displayName
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase()) && (
                      <Center>
                        <div
                          style={{
                            width: "calc(100% - 2em)",
                            height: "100%",
                          }}
                        >
                          <Card
                            className="SkinBox"
                            style={{ minWidth: "400px", minHeight: "445px" }}
                          >
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
                                <NavLink
                                  to={`/Skins/${skin.displayName
                                    .match(/[a-zA-Z0-9]+/g)
                                    ?.join("-")}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <img
                                    src={skin.displayIcon}
                                    style={{
                                      filter:
                                        "drop-shadow(5px 0px 5px #C6F6D5)",
                                      height: "100px",
                                      width: "420px",
                                    }}
                                  />
                                </NavLink>
                              </Center>
                            </Card.Content>
                          </Card>
                        </div>
                      </Center>
                    )}
                </React.Fragment>
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
