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
        fontSize: 24,
        fontWeight: "bold",
      },
    },
    svgIcon: {
      width: 32,
      height: 32,
      fill: "black",
    },
    titleIcon: {
      width: 35,
      height: 35,
      margin: '0px 12px',
      fill: "blueviolet",
    },
  })
);

export default useTitleHeaderStyles;
