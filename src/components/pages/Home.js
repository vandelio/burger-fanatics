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
// import {API, graphqlOperation} from 'aws-amplify'
// import {listPosts} from '../../graphql/queries'

import Avatar from '@mui/material/Avatar';

function Home() {
  const [feed, setFeed] = React.useState([
    {username:'John doe', content:'I just had an amazing burger in Berlin.', imagepath:'', likes:0, createdAt:'123123', comments:[
      {text:'Nice, very nice indeed, can you take me next time please!', createdAt:'234324', likes:0, username:'Benjamin Franklin'},
      {text:'Cool stuff!', createdAt:'234324', likes:0, username:'Vlodomir Ismishizchlooongname'},
      {text:'Message me next time', createdAt:'234324', likes:0, username:'Johanna B'}
    ]},
    {username:'Cindy Lee', content:'Wow.. Me just realised i live 5min from Backyard Burger!!!', imagepath:'', likes:3, createdAt:'123123', comments:[
      {text:'Lets go!', createdAt:'234324', likes:0, username:'Burger P(eater)'}
    ]},
  ]);
  const list = listOfReviewActivities;
  // const [feed] = React.useState([{},{},{},{},{}])
  const [IdolsActivity] = React.useState([{},{},{},{},{}])
  let width = useCurrentWidth();


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
  // React.useEffect(()=>{
  //   fetchFeed();
  // },[])
// 
  // const fetchFeed = async () =>{
  //   try{
  //     const feedData = await API.graphql(graphqlOperation(listPosts))
  //     const feedList = feedData.data.listPosts.items;
  //     console.log('feedList', feedList);
  //     setFeed(feedList);
  //   }
  //   catch (error){
  //     console.error('error on fetching posts', error);
  //   }
  // }
if(feed.length === 0) return 'no feed yet';
return (
<PageLayout parts={HomeFeedTop()}>
    <div className='flex-row flex-start'>
      <section className="flex-column feed-container">
        <Grid container justifyContent="center"  spacing={2}>
          {feed.map((v,i)=>
          <Grid key={i} item>
            <FeedItem {...v} key={i} />
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