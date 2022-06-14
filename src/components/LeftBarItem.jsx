import { makeStyles, Typography } from "@material-ui/core";
import { Home } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(3),
    cursor: "pointer",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start",
    },
  },
  title: {
    paddingLeft: theme.spacing(1),
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const LeftBarItem = ({ icon, title }) => {
  const classes = useStyle();

  return (
    <div className={classes.item}>
      {icon}
      <Typography className={classes.title}>{title}</Typography>
    </div>
  );
};

export default LeftBarItem;
