import { createStyles, makeStyles } from "@material-ui/core";

const useGameListStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'grid',
      gap: 8
    },
  })
);

export default useGameListStyles;
