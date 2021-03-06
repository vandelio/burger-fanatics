import React,{useEffect} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import "@aws-amplify/ui-react/styles.css";
import "../../styles/transitions.css";
const filter = createFilterOptions();

const SearchCenter = (props) => {
  const ComboBox = () => {
    return (
      <Autocomplete
        value={props.searchValue}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            props.setSearchValue({
              title: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            // Create a new value from the user input
            props.setSearchValue({
              title: newValue.inputValue,
            });
          } else {
            props.setSearchValue(newValue);
          }
        }}
        autoHighlight
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        id="free-solo-with-text-demo"
        options={props.burgerSpots}
        getOptionLabel={(option) => {
          // Value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          // Add "xxx" option created dynamically
          if (option.inputValue) {
            return option.inputValue;
          }
          // Regular option
          return option.title;
        }}
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
        freeSolo
        renderInput={(params) => (
          <>
            <TextField {...params} label="Search for a City or Burger spot" />
          </>
        )}
      />
    );
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            padding: "16px 0",
            flexDirection: "row",
          }}
        >
          <Box sx={{ width: "100%", height: "100%" }}>
            <ComboBox />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default SearchCenter;
