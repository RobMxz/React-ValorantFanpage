import React, { useEffect, useState } from "react";
import useCardsStore from "../../store/cardsData";
import { Center, Divider, Spinner } from "@chakra-ui/react";
import Search from "../Search";
import Card from "../Card/Card";

const ValoCard = () => {
  const { cards, isLoading, error, fetchCards } = useCardsStore();
  useEffect(() => {
    fetchCards();
  }, []);
  const [search, setSearch] = useState("");
  return (
    <>
      <div style={{ marginTop: "2em" }}>
        <Search setSearch={setSearch} />
      </div>
      <div className="contenedorSkin">
        {cards &&
          cards.map((card) => {
            return (
              <React.Fragment key={card.uuid}>
                {card.displayName
                  .toLowerCase()
                  .includes(search.toLowerCase()) && (
                  <Center>
                    <Center>
                      <div>
                        <Card className="Box ValoCard">
                          <Card.Header className="ValoCardHeader">
                            <h1>{card.displayName}</h1>
                          </Card.Header>
                          <Divider borderColor={"#C6F6D5"} />
                          <Card.Content className="ValoCardContent">
                            <Center>
                              <img src={card.largeArt} alt={card.displayName} />
                            </Center>
                          </Card.Content>
                        </Card>
                      </div>
                    </Center>
                  </Center>
                )}
              </React.Fragment>
            );
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

export default ValoCard;
