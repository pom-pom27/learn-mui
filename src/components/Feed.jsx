import { Container, makeStyles } from "@material-ui/core";
import Post from "./Post";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(11),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(10),
    },
  },
}));
const Feed = () => {
  const classes = useStyle();
  return (
    <Container className={classes.root}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  );
};
export default Feed;
