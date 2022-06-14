import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Fab,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  makeStyles,
  MenuItem,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Add, Close } from "@material-ui/icons";
import { useState } from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  spacer: {
    paddingBottom: theme.spacing(1),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "100%",
  },
  formControl: {
    marginTop: theme.spacing(2),
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

const AddButton = () => {
  const classes = useStyle();

  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCloseDialog = () => setOpenDialog(false);
  const handleSuccessDialog = () => {
    setOpenDialog(false);
    setOpenSnackbar(true);
  };
  const handleOpenDialog = () => setOpenDialog(true);

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleOpenSnackbar = () => setOpenSnackbar(true);
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };
  const [commentStatus, setCommentStatus] = useState("Everybody");
  const handleOnChangeComment = (event) => setCommentStatus(event.target.value);
  return (
    <div className={classes.root}>
      <Fab onClick={handleOpenDialog} color="primary" aria-label="add">
        <Add />
      </Fab>

      <Dialog
        fullWidth
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="form-dialog-title"
        fullScreen={fullScreen}
      >
        <DialogTitle id="form-dialog-title">Add Post</DialogTitle>
        <Divider />
        <DialogContent>
          <form noValidate className={classes.form}>
            <FormControl className={classes.formControl}>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                variant="outlined"
              />
              <div className={classes.spacer} />
              <TextField
                autoFocus
                id="name"
                label="Description"
                type="text"
                minRows={4}
                fullWidth
                multiline
                variant="outlined"
              />
              <div className={classes.spacer} />
              <TextField select label="Visibility">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
              </TextField>
              <div className={classes.spacer} />
              <div className={classes.spacer} />
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                name="comment"
                value={commentStatus}
                onChange={handleOnChangeComment}
              >
                <FormControlLabel
                  value="Everybody"
                  control={<Radio />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="My Friend"
                  control={<Radio />}
                  label="My Friend"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio />}
                  label="Nobody"
                />
              </RadioGroup>
            </FormControl>
          </form>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleSuccessDialog}
            variant="contained"
            color="primary"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message="Post Added"
        action={
          <>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleCloseSnackbar}
            >
              <Close fontSize="small" />
            </IconButton>
          </>
        }
      />
    </div>
  );
};

export default AddButton;
