import { ToyDirection } from "../../../types";
import { UseToyActionsParams } from "../types";

export const useToyActions = ({
  place,
  setPlace,
  setShowReport,
}: UseToyActionsParams) => {
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

  const handleShowReport = () => {
    setShowReport && setShowReport(true);
  };

  return {
    handleMove,
    handleLeft,
    handleRight,
    handleShowReport,
  };
};
