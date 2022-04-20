import { Dispatch, SetStateAction } from "react";

/**
 *
 * Enums
 *
 */
export enum ToyDirection {
  NORTH = "NORTH",
  EAST = "EAST",
  SOUTH = "SOUTH",
  WEST = "WEST",
}

export enum ToyOperations {
  PLACE = "PLACE",
  MOVE = "MOVE",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
  REPORT = "REPORT",
}

/**
 *
 * Interfaces
 *
 */
export interface Place {
  x: number;
  y: number;
  direction: ToyDirection;
}

export interface AppContextValue {
  place?: Place;
  setPlace?: Dispatch<SetStateAction<Place | undefined>>;
  setShowReport?: Dispatch<SetStateAction<boolean>>;
}
