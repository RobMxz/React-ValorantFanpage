import React, { useEffect, useState } from "react";
import useBuddiesStore from "../../store/buddiesData";
import { Center, Divider, Spinner } from "@chakra-ui/react";
import Search from "../Search";
import Card from "../Card/Card";

const Buddies = () => {
  const { buddies, isLoading, error, fetchBuddies } = useBuddiesStore();
  useEffect(() => {
    fetchBuddies();
  }, []);
  const [search, setSearch] = useState("");
  return (
    <>
      <div style={{ marginTop: "2em" }}>
        <Search setSearch={setSearch} searchEnable={false} />
      </div>
      <div className="contenedorSkin">
        {buddies &&
          buddies.map((buddy) => {
            return (
              <React.Fragment key={buddy.uuid}>
                {buddy.displayName
                  .toLowerCase()
                  .includes(search.toLowerCase()) && (
                  <Center key={buddy.uuid}>
                    <Center>
                      <div>
                        <Card className="Box Buddy ">
                          <Card.Header className="BuddyHeader">
                            <h1>{buddy.displayName}</h1>
                          </Card.Header>
                          <Divider borderColor={"#C6F6D5"} />
                          <Card.Content className="BuddyContent">
                            <Center>
                              <img src={buddy.displayIcon} />
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

export default Buddies;
