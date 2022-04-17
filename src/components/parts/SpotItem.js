import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
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

import ReviewSpot from './ReviewSpot';
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
  const [showReviewModal, setShowReviewModal] = React.useState(false);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const Review = (props) => {
    return <li>{props.text}</li>
  }

  const AvatarName = () => {
    let names = props.content.title.replace('-','').split(' ');
    return names[0].substr(0,1) + names[1].substr(0,1)
  }
  return (
    <Card className='card-feed-item' sx={{ minWidth:500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ fontSize:'1em'}} aria-label="recipe">
           <AvatarName/>
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
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
        <p>
          {props.content.desc.substring(0,100)}
        </p>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <Box sx={{marginLeft:'20px'}}>
       {'2 Reviews'}
        </Box>
        <Box sx={{marginLeft:'auto'}}>
         <ExpandMore
            sx={{marginLeft:'unset', fontSize:'1em'}}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label=" Reviews "
            >
           <CardContent>
            {'See Reviews'}
          </CardContent>
          </ExpandMore>
        </Box>
          <ExpandMore
            sx={{marginLeft:'unset'}}
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
            <Box sx={{display:'flex',flexDirection:'column', width:'100%'}} >
                <Button variant="contained" onClick={()=>setShowReviewModal(true)}>Review this place</Button>
            </Box>
            <Box  className="ratingRowWrap">

              <ReviewSpot setShowReviewModal={setShowReviewModal} showReviewModal={showReviewModal} />
              <p>
                <b>See all reviews for this burger spot here</b>
              </p>
                {
                  [{text:'Awesome place'},{text:'Awesome place'}].map((v,i)=>{
                    return <Review key={i} {...v} />
                  })
                }
            </Box>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}