import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "10px",
    padding: "10px",
    width: "100px",
  },
  textfield: {
    marginTop: "10px",
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
}));
