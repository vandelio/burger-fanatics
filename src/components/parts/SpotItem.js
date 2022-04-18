import {useState} from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Rating from "@mui/material/Rating";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import getRandomFromArray from "../../hooks/getRandomFromArray";

import burgerHeadImage6 from "../../assets/burgers/burger-006.jpg";
import burgerHeadImage7 from "../../assets/burgers/burger-007.jpg";
import burgerHeadImage8 from "../../assets/burgers/burger-008.jpg";
import burgerHeadImage9 from "../../assets/burgers/burger-009.jpg";
import burgerHeadImage10 from "../../assets/burgers/burger-010.jpg";

import List from "./List";
import ReviewSpot from "./ReviewSpot";
import "../../styles/feed.css";

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
  const [expanded, setExpanded] = useState(false);
  const [expandedDesc, setExpandedDesc] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const imageArray = [
    burgerHeadImage6,
    burgerHeadImage7,
    burgerHeadImage8,
    burgerHeadImage9,
    burgerHeadImage10,
  ];

  const [reviewsForSpot, setReviewsForSpot] = useState([
    {
      text: "Awesome place",
      user: "Johnny",
      rating: [4, 5, 4],
      imagePath: getRandomFromArray(imageArray),
    },
    {
      text: "I had the most wonderful cheeseburger",
      user: "Salomon",
      rating: [5, 5, 4],
      imagePath: getRandomFromArray(imageArray),
    },
    {
      text: "I really like the options of cheese and buns",
      user: "Cindy",
      rating: [4, 4, 4],
      imagePath: getRandomFromArray(imageArray),
    },
  ]);

  const handleSetShowReviewModal = () => {
    setShowReviewModal(!showReviewModal);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandDescClick = () => {
    setExpandedDesc(!expandedDesc);
  };

  const RenderReviews = () => {
    return <List list={reviewsForSpot} />;
  };
  const AvatarName = () => {
    let names = props.content.title.replace("-", "").split(" ");
    return names[0].substr(0, 1) + names[1].substr(0, 1);
  };
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
            <Rating
              name="size-small"
              size="small"
              readOnly
              value={Number(props.content.rating)}
            />
          </CardActions>
        }
        title={props.content.title}
        subheader={props.content.place}
      />
      <CardMedia
        component="img"
        image={props.content.imagePath}
        alt="Best Burgers In Town"
      />
      <CardContent>
        {expandedDesc && (
          <Collapse in={expandedDesc} timeout="auto" unmountOnExit>
            <p>{props.content.desc}</p>
          </Collapse>
        )}
        {!expandedDesc && (
          <p>{props.content.desc.substring(0, 100) + ". . . ."}</p>
        )}
        <Box sx={{ display: "flex", fontSize: "1em" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <b>Opening hours:</b>
            <div>{props.content.openinghours}</div>
          </Box>
          <ExpandMore
            sx={{ display: "flex", fontSize: "1em" }}
            onClick={handleExpandDescClick}
            aria-expanded={expandedDesc}
            aria-label=" Reviews "
          >
            <CardContent>
              {expandedDesc ? "Read less" : "Read more"}
            </CardContent>
          </ExpandMore>
        </Box>
        <br />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <Box sx={{ marginLeft: "20px" }}>{"2 Reviews"}</Box>
        <Box sx={{ marginLeft: "auto" }}>
          <ExpandMore
            sx={{ marginLeft: "unset", fontSize: "1em" }}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label=" Reviews "
          >
            <CardContent>{"See Reviews"}</CardContent>
          </ExpandMore>
        </Box>
        <ExpandMore
          sx={{ marginLeft: "unset" }}
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label=" Reviews "
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <div className="ratingRow-container">
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            >
              <Button variant="contained" onClick={handleSetShowReviewModal}>
                Review this place
              </Button>
            </Box>
            <Box className="ratingRowWrap">
              <ReviewSpot
                setShowReviewModal={handleSetShowReviewModal}
                showReviewModal={showReviewModal}
              />
              <p>
                <b>See all reviews for this burger spot here</b>
              </p>
              <RenderReviews />
            </Box>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
