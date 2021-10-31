import { createStyles, makeStyles } from "@material-ui/core";

const useGameListItemStyles = makeStyles(() =>
  createStyles({
    image: {
      width: 40,
      height: "auto",
    },
  })
);

export default useGameListItemStyles;
