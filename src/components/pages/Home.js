import React from 'react';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { Icon, View } from '@aws-amplify/ui-react';
import PageLayout from "./PageLayout";
import FeedItem from "../parts/FeedItem";
import List from "../parts/List";
import {useCurrentWidth} from '../../hooks/useCurrentWidth';
import { Button, Flex, TextField } from '@aws-amplify/ui-react';
import listOfReviewActivities from '../../hooks/listOfReviewActivities';
import {API, graphqlOperation} from 'aws-amplify'
import {listPosts} from '../../graphql/queries'
import SharingCenter from "../parts/SharingCenter";

import {updatePost} from '../../graphql/mutations'
import {fetchPosts} from "../../hooks/apiFunctions";


function Home() {
  const [feed, setFeed] = React.useState([]);
  const list = listOfReviewActivities;
  const [IdolsActivity] = React.useState([{},{},{},{},{}])
  let width = useCurrentWidth();


  React.useEffect(()=>{
    fetchPosts(setFeed)
  },[])

  const HomeFeedTop = () => {
    return <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
      <h1>Fanatics Feed</h1>
      <Box sx={{display:'flex', flexDirection:'row', alignItems:'center',}}>
        <div>Online Fanatics</div>
        <Box element={'ul'} sx={{listStyle:'none', display:'flex', flexDirection:'row'}}>
          <Box element="li" sx={{p:1}}>
            <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">R</Avatar>
          </Box>
          <Box element="li" sx={{p:1}}>
          <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">S</Avatar>
          </Box>
          <Box element="li" sx={{p:1}}>
          <Avatar sx={{ bgcolor: 'gray' }} aria-label="recipe">B</Avatar>
          </Box>
        </Box>
      </Box>
    </Box>
  }


return (
<PageLayout parts={HomeFeedTop()}>
  <Box className="sharingCenterContainer">
    <SharingCenter setFeed={setFeed} feed={feed}  />  
  </Box>
  <Box sx={{ borderTop: 1, borderColor: 'divider', paddingTop:'20px' }}>
  
    <div className='flex-row flex-start'>
      <section className="flex-column feed-container">
        <Grid container justifyContent="center"  spacing={2}>
          {feed.length > 0 && feed.reverse().map((v,i)=>
            <Grid key={i} item>
              <FeedItem {...v} key={i} post={v} />
            </Grid>
          )}
          {feed.length === 0 &&
            <Box sx={{marginTop:'30px', textAlign:'center'}}>
              <h2>We are loading the most resent posts!</h2>
            </Box>
          }
          

        </Grid>
      </section>
      

      <Box className="hideBelow980" sx={{ width: '30%',height:'100%', display: 'flex', paddingBottom:'20px', paddingLeft:'20px', flexDirection:'column' }}>
        <List className="activity" list={list} />
      </Box>
    </div>
  </Box>
</PageLayout>
);
}

export default Home;