import { createTheme } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {},
  successButton: {
    backgroundColor: green[400],
    color: "white",
  },
  border: "1px black solid",
});

export default theme;
