import React, { FC } from "react";
import { Box, Button, Grid } from "@mui/material";
import { useAppContext } from "../../context";
import { ToyDirection } from "../../types";

export const ToyActions: FC = () => {
  const { place, setPlace, setShowReport } = useAppContext();

  /**
   *
   * Handlers
   *
   */
  const handleMove = () => {
    switch (place?.direction) {
      case ToyDirection.NORTH:
        setPlace &&
          setPlace({ ...place, y: place.y > 0 ? place.y - 1 : place.y });
        break;
      case ToyDirection.EAST:
        setPlace &&
          setPlace({ ...place, x: place.x < 4 ? place.x + 1 : place.x });
        break;
      case ToyDirection.SOUTH:
        setPlace &&
          setPlace({ ...place, y: place.y < 4 ? place.y + 1 : place.y });
        break;

      case ToyDirection.WEST:
        setPlace &&
          setPlace({ ...place, x: place.x > 0 ? place.x - 1 : place.x });
        break;
    }
  };

  const handleLeft = () => {
    switch (place?.direction) {
      case ToyDirection.NORTH:
        setPlace && setPlace({ ...place, direction: ToyDirection.WEST });
        break;
      case ToyDirection.EAST:
        setPlace && setPlace({ ...place, direction: ToyDirection.NORTH });
        break;
      case ToyDirection.WEST:
        setPlace && setPlace({ ...place, direction: ToyDirection.SOUTH });
        break;
      case ToyDirection.SOUTH:
        setPlace && setPlace({ ...place, direction: ToyDirection.EAST });
        break;
    }
  };

  const handleShowReport = () => {
    setShowReport && setShowReport(true);
  };

  const handleRight = () => {
    switch (place?.direction) {
      case ToyDirection.NORTH:
        setPlace && setPlace({ ...place, direction: ToyDirection.EAST });
        break;
      case ToyDirection.EAST:
        setPlace && setPlace({ ...place, direction: ToyDirection.SOUTH });
        break;
      case ToyDirection.SOUTH:
        setPlace && setPlace({ ...place, direction: ToyDirection.WEST });
        break;
      case ToyDirection.WEST:
        setPlace && setPlace({ ...place, direction: ToyDirection.NORTH });
        break;
    }
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <Box>
          <Button
            variant="contained"
            style={{ width: 100 }}
            onClick={() =>
              setPlace &&
              setPlace({ x: 0, y: 4, direction: ToyDirection.NORTH })
            }
          >
            PLACE
          </Button>
        </Box>
      </Grid>
      <Grid item>
        <Box marginTop={2}>
          <Button
            variant="contained"
            style={{ width: 100 }}
            onClick={handleMove}
          >
            MOVE
          </Button>
        </Box>
      </Grid>
      <Grid item>
        <Box marginTop={2}>
          <Button
            variant="contained"
            style={{ width: 100 }}
            onClick={handleLeft}
          >
            LEFT
          </Button>
        </Box>
      </Grid>
      <Grid item>
        <Box marginTop={2}>
          <Button
            variant="contained"
            style={{ width: 100 }}
            onClick={handleRight}
          >
            RIGHT
          </Button>
        </Box>
      </Grid>
      <Grid item>
        <Box marginTop={2}>
          <Button
            variant="contained"
            style={{ width: 100 }}
            onClick={handleShowReport}
          >
            REPORT
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
