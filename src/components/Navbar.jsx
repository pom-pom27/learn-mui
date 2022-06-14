import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  InputBase,
  alpha,
  IconButton,
  Badge,
  Avatar,
} from "@material-ui/core";
import { Search, Mail, Notifications } from "@material-ui/icons";
import { useState } from "react";

const useStyle = makeStyles((theme) => ({
  logoSmall: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoBig: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.openSearch ? "flex" : "none"),
    },
  },
  searchIcon: {
    margin: theme.spacing(0, 0, 0, 1),
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1),
  },
  icons: {
    display: (props) => (props.openSearch ? "none" : "flex"),
    alignItems: "center",
    // border: "1px black solid",
  },
  iconWithBadge: {
    margin: theme.spacing(0, 2, 0, 0),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 1, 0, 0),
    },
  },
  searchButton: {
    display: "none",

    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    marginRight: theme.spacing(2),
  },
}));

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const classes = useStyle({ openSearch });
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.logoSmall} variant="h6">
          News
        </Typography>
        <Typography className={classes.logoBig} variant="h6">
          BIG NEWS
        </Typography>
        <div className={classes.search}>
          <Search className={classes.searchIcon} />
          <InputBase
            placeholder="Search…"
            fullWidth
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div className={classes.icons}>
          <IconButton
            aria-label="show 4 new mails"
            color="inherit"
            onClick={() => {
              setOpenSearch(true);
            }}
            className={classes.searchButton}
          >
            <Search />
          </IconButton>
          <IconButton
            aria-label="show 4 new mails"
            color="inherit"
            className={classes.iconWithBadge}
          >
            <Badge badgeContent={4} color="secondary">
              <Mail />
            </Badge>
          </IconButton>
          <IconButton color="inherit" className={classes.iconWithBadge}>
            <Badge badgeContent={2} color="secondary">
              <Notifications />
            </Badge>
          </IconButton>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
