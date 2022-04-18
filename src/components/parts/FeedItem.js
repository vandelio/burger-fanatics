import * as React from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../styles/feed.css";
import { Badge } from "@mui/material";
import Comment from "./Comment";
import listOfComments from "../../hooks/listOfComments";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [comments] = React.useState(
    props.comments
      ? props.comments
      : listOfComments
  );

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const AvatarName = () => props.user.substr(0, 1);

  return (
    <Card className="card-feed-item" sx={{ minWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ fontSize: "1em" }} aria-label="recipe">
            <AvatarName />
          </Avatar>
        }
        action={
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Badge
                badgeContent={props.likes ? props.likes : 2}
                color="primary"
              >
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="share" className="noCursor">
              <ShareIcon />
            </IconButton>
          </CardActions>
        }
        title={props.user}
        subheader={props.createdAt}
      />
      {props.imagePath && (
        <CardMedia
          component="img"
          height="194"
          image={props.imagePath}
          alt={props.text}
        />
      )}
      <CardContent>
        <p>{props.text}</p>
      </CardContent>
      <Divider />

      {comments && (
        <>
          <CardActions disableSpacing onClick={handleExpandClick}>
            <CardContent>{comments.length + " Comments"}</CardContent>

            <ExpandMore
              expand={expanded}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <br />
            <CardContent>
              {comments.map((v, i) => {
                return <Comment key={i} {...v} />;
              })}
            </CardContent>
            <br />
          </Collapse>
        </>
      )}
    </Card>
  );
}
