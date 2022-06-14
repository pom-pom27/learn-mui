import { Container, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    paddingTop: theme.spacing(11),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(10),
    },
  },
}));

const Rightbar = () => {
  const classes = useStyle();

  return <Container className={classes.root}>Rightbar</Container>;
};

export default Rightbar;
