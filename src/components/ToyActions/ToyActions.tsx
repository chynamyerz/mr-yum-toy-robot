import React, { FC } from "react";
import { Box, Button, Grid } from "@mui/material";
import { useAppContext } from "../../context";
import { ToyDirection, ToyOperations } from "../../types";
import { useToyActions } from "./hooks";

export const ToyActions: FC = () => {
  const { place, setPlace, setShowReport } = useAppContext();
  const { handleMove, handleLeft, handleRight, handleShowReport } =
    useToyActions({
      place,
      setPlace,
      setShowReport,
    });

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
            {ToyOperations.PLACE}
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
            {ToyOperations.MOVE}
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
            {ToyOperations.LEFT}
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
            {ToyOperations.RIGHT}
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
            {ToyOperations.REPORT}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
