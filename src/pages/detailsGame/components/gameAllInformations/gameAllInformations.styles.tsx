import { createStyles, makeStyles } from "@material-ui/core";

const useGameListItemStyles = makeStyles(() =>
  createStyles({
    image: {
      width: 40,
      height: "auto",
    },
    ratingStyle: {
      fontSize: 18,
    },
  })
);

export default useGameListItemStyles;
