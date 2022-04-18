import React, { FC } from "react";
import { Box, Grid } from "@mui/material";

import { ToyIcon } from "../ToyIcon";
import { useAppContext } from "../../context";
import { squareBoxes } from "../../constant";

export const TableGrid: FC = () => {
  const { place } = useAppContext();

  return (
    <Grid container style={{ width: 600, minWidth: 600, maxWidth: 600 }}>
      {squareBoxes.map((rowBoxes, columnIndex) => {
        return rowBoxes.map((rowBox, rowIndex) => {
          return (
            <Box
              key={rowBox}
              width={100}
              height={100}
              borderColor={"green"}
              border="1px solid grey"
              bgcolor={(columnIndex + rowIndex) % 2 ? "lightgray" : ""}
            >
              {place?.y === columnIndex && place?.x === rowIndex && (
                <Box position="relative" top="32%" left="32%">
                  <ToyIcon direction={place?.direction} />
                </Box>
              )}
            </Box>
          );
        });
      })}
    </Grid>
  );
};
