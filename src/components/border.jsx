import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  root: { border: "1px black solid" },
});

const BorderWrapper = ({ children }) => {
  const classes = useStyle();
  return <span className={classes.root}>{children}</span>;
};

export default BorderWrapper;
