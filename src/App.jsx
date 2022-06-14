import { makeStyles, Grid } from "@material-ui/core";
import Feed from "./components/Feed";
import LeftBar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import RightBar from "./components/Rightbar";
import Add from "./AddButton";

const useStyle = makeStyles((theme) => ({
  root: {},
  rightBar: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
const App = () => {
  const classes = useStyle();
  return (
    <>
      <Navbar />

      <Grid container className={classes.root}>
        <Grid item md={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item md={7} xs={10} className={classes.middleGridItem}>
          <Feed />
        </Grid>
        <Grid item md={3} className={classes.rightBar}>
          <RightBar />
        </Grid>
      </Grid>
      <Add />
    </>
  );
};

export default App;
