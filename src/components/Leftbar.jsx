import { Container, makeStyles } from "@material-ui/core";
import {
  Bookmark,
  Camera,
  ExitToApp,
  Home,
  List,
  Person,
  PlayCircleFilledOutlined,
  Settings,
  Storefront,
  TabletMac,
} from "@material-ui/icons";
import LeftBarItem from "./LeftBarItem";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "100vh",
    paddingTop: theme.spacing(8),
    backgroundColor: "white",
    color: "#555",
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("md")]: {
      border: "1px solid #ece7e7",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.primary.main,
      paddingTop: theme.spacing(7),
    },
  },
  icon: {
    [theme.breakpoints.down("sm")]: {
      color: "white",
    },
  },
}));

const LeftBar = () => {
  const classes = useStyle();
  return (
    <Container className={classes.root}>
      <LeftBarItem title={"Home"} icon={<Home className={classes.icon} />} />
      <LeftBarItem
        title={"Friends"}
        icon={<Person className={classes.icon} />}
      />
      <LeftBarItem title={"List"} icon={<List className={classes.icon} />} />
      <LeftBarItem
        title={"Camera"}
        icon={<Camera className={classes.icon} />}
      />
      <LeftBarItem title={"Home"} icon={<Home className={classes.icon} />} />
      <LeftBarItem
        title={"Videos"}
        icon={<PlayCircleFilledOutlined className={classes.icon} />}
      />
      <LeftBarItem
        title={"Apps"}
        icon={<TabletMac className={classes.icon} />}
      />
      <LeftBarItem
        title={"Collection"}
        icon={<Bookmark className={classes.icon} />}
      />
      <LeftBarItem
        title={"MarketPlaces"}
        icon={<Storefront className={classes.icon} />}
      />
      <LeftBarItem
        title={"Settings"}
        icon={<Settings className={classes.icon} />}
      />
      <LeftBarItem
        title={"Logout"}
        icon={<ExitToApp className={classes.icon} />}
      />
    </Container>
  );
};
export default LeftBar;
