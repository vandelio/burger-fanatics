import React from 'react';
import PageLayout from "./PageLayout";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from "../parts/List";
import SpotItem from "../parts/SpotItem";
import '../../styles/list.css';

import listOfBurgerSpots from '../../hooks/listOfBurgerSpots';
import listOfReviewActivities from '../../hooks/listOfReviewActivities';

function Spots() {
const burgerSpots = listOfBurgerSpots;
const reviewActivities = listOfReviewActivities;

  const FeedTop = () => {
    return <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
      <h1>Burger Spots</h1>
    </Box>
  }


  return (
    <PageLayout parts={FeedTop}>
       <div className='flex-row flex-start'>
          <section className="flex-column feed-container">
            <Grid container justifyContent="center" spacing={2}>
              {/* <List list={burgerSpots} /> */}
                {burgerSpots.map((v,i)=>{
                  return <Grid key={i} item>
                    <SpotItem key={i} content={v} />
                  </Grid>
                })
              }
            </Grid>
          </section>

          <Box className="hideBelow980" sx={{ width: '30%',height:'100%', display: 'flex', paddingBottom:'20px', paddingLeft:'20px', flexDirection:'column' }}>
            {/* newest rating activities */}
            <List className="activity" list={reviewActivities} />
          </Box>
        </div>
    
    </PageLayout>
  );
}

export default Spots;