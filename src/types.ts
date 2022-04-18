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
}
