import { makeStyles, Grid } from "@material-ui/core";
import Feed from "./components/Feed";
import LeftBar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import RightBar from "./components/Rightbar";

const useStyle = makeStyles((theme) => ({
  button: {
    ...theme.successButton,
    border: 0,
    borderRadius: 3,
    height: 48,
    padding: "0 30px",
  },
  wrapper: {
    border: "1px black solid",
  },
}));
const App = () => {
  const classes = useStyle();
  return (
    <>
      <Navbar />
    </>
  );
};

export default App;
