import {
  Avatar,
  Container,
  ImageList,
  ImageListItem,
  Link,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const itemData = [
  {
    img: "https://v4.mui.com/static/images/image-list/camera.jpg",
    title: "Camera",
    author: "author",
  },
  {
    img: "https://v4.mui.com/static/images/image-list/breakfast.jpg",
    title: "Camera",
    author: "author",
  },
  {
    img: "https://v4.mui.com/static/images/image-list/burgers.jpg",
    title: "Camera",
    author: "author",
  },
  {
    img: "https://v4.mui.com/static/images/image-list/morning.jpg",
    title: "Camera",
    author: "author",
  },
  {
    img: "https://v4.mui.com/static/images/image-list/hats.jpg",
    title: "Camera",
    author: "author",
  },
  {
    img: "https://v4.mui.com/static/images/image-list/plant.jpg",
    title: "Camera",
    author: "author",
  },
];

const useStyle = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 0,
    height: "100vh",

    color: "#555",
    border: "1px solid #ece7e7",

    paddingTop: theme.spacing(11),
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(10),
    },
  },
  avatarGroup: {
    padding: theme.spacing(0.5, 0, 2, 0),
  },
  title: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#555",
  },
  imageList: {
    padding: theme.spacing(0, 0, 2, 0),
  },
  links: {
    display: "flex",
    flexWrap: "wrap",
    fontSize: 18,
    color: "black",
    fontWeight: 500,
  },
  link: {
    padding: theme.spacing(0, 1, 0, 0),
  },
}));

const RightBar = () => {
  const classes = useStyle();
  const preventDefault = (event) => event.preventDefault();

  return (
    <Container className={classes.root}>
      <Typography className={classes.title} variant="h6">
        Online Friends
      </Typography>
      <AvatarGroup className={classes.avatarGroup} max={6}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://mui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/5.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/5.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/5.jpg"
        />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom variant="h6">
        Gallery
      </Typography>
      <ImageList rowHeight={110} className={classes.imageList} cols={3}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={1}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography className={classes.title} gutterBottom variant="h6">
        Categories
      </Typography>
      <Typography className={classes.links}>
        <Link
          className={classes.link}
          color="textSecondary"
          href="#"
          onClick={preventDefault}
        >
          Sport
        </Link>
        <Link
          className={classes.link}
          color="textSecondary"
          href="#"
          onClick={preventDefault}
        >
          Food
        </Link>
        <Link
          className={classes.link}
          color="textSecondary"
          href="#"
          onClick={preventDefault}
        >
          Music
        </Link>
        <Link
          className={classes.link}
          color="textSecondary"
          href="#"
          onClick={preventDefault}
        >
          Movie
        </Link>
        <Link
          className={classes.link}
          color="textSecondary"
          href="#"
          onClick={preventDefault}
        >
          Science
        </Link>
        <Link
          className={classes.link}
          color="textSecondary"
          href="#"
          onClick={preventDefault}
        >
          Life
        </Link>
      </Typography>
    </Container>
  );
};

export default RightBar;
