import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Chip from "@mui/material/Chip";
export default function Comment(props) {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "5px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Box
          sx={{
            width: "auto",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Chip
            label={props.text}
            likes={props.likes}
            sx={{ position: "relative", paddingRight: "30px" }}
          />
          <IconButton
            aria-label="add to favorites"
            sx={{ position: "absolute", right: "1px", top: "1px" }}
          >
            <FavoriteIcon sx={{ fontSize: "14px" }} />
          </IconButton>
        </Box>

        <Box
          sx={{ fontSize: "12px", display: "flex", justifyContent: "flex-end" }}
        >
          {props.username}
        </Box>
      </Box>
    </Box>
  );
}
