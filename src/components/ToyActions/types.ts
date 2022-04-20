import { Dispatch, SetStateAction } from "react";
import { Place } from "../../types";

/**
 *
 * Interfaces
 *
 */
export interface UseToyActionsParams {
  place?: Place;
  setPlace?: Dispatch<SetStateAction<Place | undefined>>;
  setShowReport?: Dispatch<SetStateAction<boolean>>;
}
