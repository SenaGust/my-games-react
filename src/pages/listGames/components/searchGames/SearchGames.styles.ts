import { createStyles, makeStyles } from "@material-ui/core";

const useSearchGamesStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      flex: '1',
      alignContent: 'center'
    },
    fieldContainer: {
      flexDirection: 'column'
    },
    svgbutton: {
      fill: 'black',
      paddingBottom: 2
    }
  })
);

export default useSearchGamesStyles;
