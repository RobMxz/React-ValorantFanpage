import {
  Alert,
  AlertDescription,
  Box,
  Center,
  CloseButton,
  Stack,
} from "@chakra-ui/react";
import { Skins } from "../../models/Skin";
import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

const SkinDetail = ({ skin, name }: { skin: Skins; name: string }) => {
  const [icon, setIcon] = useState<string>(skin.displayIcon);

  const [openAlerts, setOpenAlerts] = useState(
    Array(skin.levels.length).fill(false)
  );

  const handleCloseAlert = (index: number) => {
    setOpenAlerts([
      ...openAlerts.slice(0, index),
      false,
      ...openAlerts.slice(index + 1),
    ]);
  };

  return (
    <>
      {skin.displayName.toLowerCase().includes(name.toLowerCase()) && (
        <>
          <div>
            <div>
              <Center>
                <h1 style={{ letterSpacing: "0.35em", margin: "1.5em" }}>
                  {skin.displayName.toUpperCase()}
                </h1>
              </Center>
              <Center>
                <img
                  src={icon}
                  width="60%"
                  style={{
                    imageRendering: "crisp-edges",
                    filter: "drop-shadow(0px 0px 15px #319795)",
                  }}
                />
              </Center>
            </div>
            <div
              style={{
                width: "25em",
              }}
            >
              {" "}
              <Center>
                <div style={{ display: "flex", gap: "1em", margin: "1em" }}>
                  {skin.chromas &&
                    skin.chromas.slice(0).map((chroma) => (
                      <React.Fragment key={chroma.uuid}>
                        <div
                          style={{
                            border: "3px solid #BEE3F8",
                            borderRadius: "5px",
                          }}
                        >
                          {skin.chromas[0].displayIcon && (
                            <>
                              <img
                                src={chroma.swatch}
                                onClick={() => {
                                  setIcon(chroma.displayIcon);
                                }}
                                style={{ cursor: "pointer", maxWidth: "4em" }}
                              />
                            </>
                          )}
                        </div>
                      </React.Fragment>
                    ))}
                </div>
              </Center>
              <Center>
                <Stack spacing={3} width={"70%"}>
                  {skin.levels.map((level, index) => (
                    <div key={level.displayName} style={{ width: "90%" }}>
                      <Center>
                        {openAlerts[index] ? (
                          <Alert>
                            <Box>
                              <AlertDescription>
                                <video
                                  loop
                                  autoPlay
                                  style={{ maxWidth: "200px" }}
                                >
                                  <source
                                    src={level.streamedVideo}
                                    type="video/mp4"
                                  />
                                  Tu navegador no soporta el video.
                                </video>
                              </AlertDescription>
                            </Box>
                            <CloseButton
                              alignSelf="flex-start"
                              position="relative"
                              right={-1}
                              top={-1}
                              onClick={() => handleCloseAlert(index)}
                            />
                          </Alert>
                        ) : (
                          <Button
                            width={"90%"}
                            onClick={() =>
                              setOpenAlerts([
                                ...openAlerts.slice(0, index),
                                !openAlerts[index],
                                ...openAlerts.slice(index + 1),
                              ])
                            }
                            colorScheme="teal"
                            variant="outline"
                            _hover={{ borderColor: "teal.500" }}
                            border={"2px solid "}
                          >
                            {level.displayName}
                          </Button>
                        )}
                      </Center>
                    </div>
                  ))}
                </Stack>
              </Center>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SkinDetail;
