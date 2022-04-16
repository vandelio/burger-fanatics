import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../../styles/feed.css';
import { valueToPercent } from '@mui/base';
import Chip from '@mui/material/Chip';
import { Badge } from '@mui/material';
import {addLike} from "../../hooks/apiFunctions";

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
  const [comments] = React.useState(props.comments ? props.comments : [{text:'Nice, very nice indeed, can you take me next time please!', createdAt:'234324', likes:0, username:'Benjamin Franklin'},{text:'Cool stuff!', createdAt:'234324', likes:0, username:'Vlodomir Ismishizchlooongname'},{text:'Message me next time', createdAt:'234324', likes:0, username:'Johanna B'}]);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const Comment = (props) => {
    // {text:'Nice!', createdAt:'234324', likes:0},
    return <Box sx={{width:"100%", padding:"10px 0", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", }}>
               <Box  >
                  <Box sx={{ width: "auto", display:"flex", flexDirection:"column", position:"relative"}}  >
                    <Chip  label={props.text} likes={props.likes} sx={{ position:"relative", paddingRight:"30px"}} />
                    <IconButton aria-label="add to favorites" sx={{ position:"absolute", right:"1px", top:"1px" }}>
                      <FavoriteIcon  sx={{ fontSize: "14px" }}  />
                    </IconButton>
                  </Box>
                  
                  <Box  sx={{ fontSize: "12px", display:"flex", justifyContent:'flex-end' }} >
                    {props.username}
                  </Box>
              </Box>
            </Box>
  }
  console.log('feed likes', props)

  return (
    <Card className='card-feed-item' sx={{  minWidth:500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <Badge badgeContent={props.likes ? props.likes : 2} color="primary">
              <FavoriteIcon onClick={()=>{ 
                //props.addLike(props.key)
                }} />
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
      {props.imagePath && 
        <CardMedia
          component="img"
          height="194"
          image={props.imagePath}
          alt={props.text}
        />
      }
      <CardContent>
        <p>
          {props.text}
        </p>
      </CardContent>
      <Divider />

      {comments && 
        <>
          <CardActions disableSpacing   onClick={handleExpandClick}>

              <CardContent>
                {comments.length-1 + ' Comments'}
              </CardContent>
              
              <ExpandMore
                expand={expanded}
                aria-expanded={expanded}
                aria-label="show more"
              >
                
                <ExpandMoreIcon />
              </ExpandMore>
            
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            {
              comments.map((v)=>{
                return <Comment {...v} />
              })
            }
            </CardContent>
          </Collapse>
        </>
      }

    </Card>
  );
}