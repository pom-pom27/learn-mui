import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Bookmark, Favorite, MoreVert, Share } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(4),
  },
  avatar: {
    backgroundColor: red[500],
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const Post = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVert />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="14 June, 2022"
        />
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          <Container />
          <IconButton aria-label="bookmark">
            <Bookmark />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
