import React, { useState } from "react";
import { Box, Container, Grid } from "@mui/material";

import { TableGrid, ToyActions } from "./components";
import { AppContextProvider } from "./context/AppContext";
import { Place } from "./types";

function App() {
  const [place, setPlace] = useState<Place>();
  const [showReport, setShowReport] = useState<boolean>(false);

  return (
    <AppContextProvider value={{ place, setPlace, setShowReport }}>
      <Container>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <Box
              marginTop={4}
              marginBottom={4}
              color="GrayText"
              fontSize={40}
              fontWeight="bold"
            >
              Toy Robot Simulator
            </Box>
          </Grid>
          <Grid item>
            <Grid container spacing={10}>
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    <ToyActions />
                  </Grid>
                  <Grid item>
                    {place && showReport && (
                      <Grid container direction="column">
                        <Box
                          marginTop={4}
                          marginBottom={2}
                          color="GrayText"
                          fontSize={16}
                          fontWeight="bold"
                        >
                          Current position:
                        </Box>
                        <Box>{`Coordinate: (${place?.x ?? 0}, ${
                          4 - (place?.y || 0)
                        })`}</Box>
                        <Box>{`Direction: ${place?.direction}`}</Box>
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <TableGrid />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </AppContextProvider>
  );
}

export default App;
