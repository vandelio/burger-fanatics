import React from 'react';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Icon, View } from '@aws-amplify/ui-react';
import PageLayout from "./PageLayout";
import FeedItem from "../parts/FeedItem";
import List from "../parts/List";
import {useCurrentWidth} from '../../hooks/useCurrentWidth';
import { Button, Flex, TextField } from '@aws-amplify/ui-react';
import listOfReviewActivities from '../../hooks/listOfReviewActivities';
import {API, graphqlOperation} from 'aws-amplify'
import {listPosts} from '../../graphql/queries'


function Home() {
  const [feed, setFeed] = React.useState([]);
  const list = listOfReviewActivities;
  // const [feed] = React.useState([{},{},{},{},{}])
  const [IdolsActivity] = React.useState([{},{},{},{},{}])
  let width = useCurrentWidth();

  React.useEffect(()=>{
    fetchFeed();
  },[])

  const fetchFeed = async () =>{
    try{
      const feedData = await API.graphql(graphqlOperation(listPosts))
      const feedList = feedData.data.listPosts.items;
      console.log('feedList', feedList);
      setFeed(feedList);
    }
    catch (error){
      console.error('error on fetching posts', error);
    }
  }
if(feed.length === 0) return 'no feed yet';
return (
<PageLayout name="">
    <div className='flex-row flex-start'>
      <section className="flex-column feed-container">
        <Grid container justifyContent="center" spacing={2}>
          {feed.map((v,i)=>
          <Grid key={i} item>
            <FeedItem key={i} />
          </Grid>
          )}
        </Grid>
      </section>

      <Box className="hideBelow980" sx={{ width: '30%',height:'100%', display: 'flex', paddingBottom:'20px', paddingLeft:'20px', flexDirection:'column' }}>
        <List className="activity" list={list} />
      </Box>
    </div>
</PageLayout>
);
}

export default Home;