import React, { useEffect } from 'react';
import PageLayout from "./PageLayout";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from "../parts/List";
import SpotItem from "../parts/SpotItem";
import SearchCenter from "../parts/SearchCenter";
import '../../styles/list.css';

import listOfBurgerSpots from '../../hooks/listOfBurgerSpots';
import listOfReviewActivities from '../../hooks/listOfReviewActivities';

function Spots() {
const [burgerSpots,setBurgerSpots] = React.useState(listOfBurgerSpots);
const [searchResult, setSearchResult] = React.useState('');
const reviewActivities = listOfReviewActivities;

useEffect(()=>{
  if(searchResult !== ''){
    console.log(searchResult);
    // let obj = burgerSpots.find(o => {
    //   if(o.title.includes(searchValue) || o.desc.includes(searchValue)) return o;
    // });
    // console.log('serah', obj)
    setBurgerSpots([searchResult]);
  }else{
    setBurgerSpots(listOfBurgerSpots);
  }
},[searchResult])

  const FeedTop = () => {
    return <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
      <h1>Burger Spots</h1>
    </Box>
  }


  return (
    <PageLayout parts={FeedTop()}>
    <Box sx={{maxWidth:'500px', margin:'auto',}}>
      <SearchCenter burgerSpots={burgerSpots} setSearchValue={setSearchResult} searchValue={searchResult} />  
    </Box>
    <Box sx={{ borderTop: 1, borderColor: 'divider', paddingTop:'20px' }}>
       <div className='flex-row flex-start'>
          <section className="flex-column feed-container">
            <Grid container justifyContent="center" spacing={2}>
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
    
      </Box>
    </PageLayout>
  );
}

export default Spots;