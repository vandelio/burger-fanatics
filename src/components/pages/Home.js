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

function Home() {
const [feed] = React.useState([{},{},{},{},{}])
const [IdolsActivity] = React.useState([{},{},{},{},{}])
let width = useCurrentWidth();

const list = [
  {
      title: 'Reviewed a Burger in Frankfurt',
      user:'Bob',
      datetime:'22.2.2022 14:02'
  },
  {
      title: 'Liked a post made by Bob',
      user:'Joe',
      datetime:'22.2.2022 13:02'
  },
  {
      title: 'Visited Burger World in Copenhagen',
      description:
      "This hopping town is an adventure capital and the burger sport is located right on Lake",
      user:'Cindy',
      datetime:'21.2.2022 12:52'
  },
];

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