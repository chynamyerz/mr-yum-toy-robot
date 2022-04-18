import { FC } from "react";
import { Box } from "@mui/material";
import {
  ArrowCircleUpOutlined,
  ArrowCircleDownOutlined,
  ArrowCircleLeftOutlined,
  ArrowCircleRightOutlined,
} from "@mui/icons-material";

export const ToyIcon: FC<{ direction: string }> = ({ direction }) => {
  let toyIcon = <ArrowCircleUpOutlined fontSize="large" />;
  switch (direction) {
    case "NORTH":
      toyIcon = <ArrowCircleUpOutlined fontSize="large" />;
      break;
    case "EAST":
      toyIcon = <ArrowCircleRightOutlined fontSize="large" />;
      break;
    case "SOUTH":
      toyIcon = <ArrowCircleDownOutlined fontSize="large" />;
      break;
    case "WEST":
      toyIcon = <ArrowCircleLeftOutlined fontSize="large" />;
      break;
  }
  return <Box>{toyIcon}</Box>;
};
