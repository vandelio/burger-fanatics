import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Rating from '@mui/material/Rating';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../../styles/feed.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className='card-feed-item' sx={{ minWidth:500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <CardActions disableSpacing>
            <IconButton  aria-label="Calculated rating">
              <Rating
                name="size-small"
                size="small" 
                readOnly
                value={props.content.rating}
              />
            </IconButton>
          </CardActions>
          
        }
        title={props.content.title}
        subheader={props.content.place}
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <p>
          {props.content.desc}
        </p>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <div>
          <Box sx={{background:'#f9f9f9', marginTop:'15px'}} className="ratingRowWrap">
            <p>
              <b>Have you been here?</b>
              <br/>
              Then submit your review below to
            </p>
            <Box sx={{ borderTop: 1, borderColor: 'divider', paddingTop:'20px' }}>
            <div className="ratingRow">
            <div>How was the taste : </div>
                <Rating
                  name="size-small"
                  value={props.content.rating}
                />
            </div>
            <br/>
            <div className="ratingRow">
            <div>How was the texture : </div>
                <Rating
                  name="size-small"
                  value={props.content.rating}
                />
            </div>
            <br/>
            <div className="ratingRow">
              
              <div>How was the visual experience : </div>
                <Rating
                  name="size-small"
                  value={props.content.rating}
                />
            </div>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column', width:'100%', marginTop:'20px', paddingTop:'20px',borderTop: 1, borderColor: 'divider',}} >
              <TextField
                multiline
                maxRows={4} 
                onChange={()=>{}} 
                label="Type you review here" />
              <Button>Submit rating</Button>
            </Box>
          </Box>
        </div>
          <p>
            <b>Do they have Burgers?</b>
            <p>
              Yes they do!
            </p>
            <b>When are they open?</b>
            <p>
              Everyday 11-22
            </p>
          </p>
        </CardContent>
      </Collapse>
    </Card>
  );
}