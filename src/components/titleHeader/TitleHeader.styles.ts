import { createStyles, makeStyles } from "@material-ui/core";

const useTitleHeaderStyles = makeStyles(() =>
  createStyles({
    container: {
      display: "flex",
      flex: "1",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: "16px",
    },
    titleStyle: {
      display: "flex",
      flex: "1",
      flexDirection: "row",
      alignItems: "center",
      "&>h5": {
        alignText: "center",
      },
    },
    svgIcon: {
      width: 32,
      height: 32,
      fill: "black",
    },
  })
);

export default useTitleHeaderStyles;