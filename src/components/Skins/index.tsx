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
                        <div>
                          <Card className="Box Skin">
                            <Card.Header className="SkinHeader">
                              <h1>{skin.displayName}</h1>
                            </Card.Header>
                            <Divider borderColor={"#C6F6D5"} />
                            <Card.Content className="SkinContent">
                              <Center>
                                <NavLink
                                  to={`/Skins/${skin.displayName
                                    .match(/[a-zA-Z0-9]+/g)
                                    ?.join("-")}`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <img src={skin.displayIcon} />
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
