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
import getRandomFromArray from '../../hooks/getRandomFromArray';
import burgerHeadImage1 from "../../assets/burgers/1small.jpg";
import burgerHeadImage2 from "../../assets/burgers/2small.jpg";
import burgerHeadImage3 from "../../assets/burgers/3small.jpg";

function Spots() {
const [burgerSpots,setBurgerSpots] = React.useState(listOfBurgerSpots);
const [searchResult, setSearchResult] = React.useState(null);
// const [burgerSpotsToShow,setBurgerSpotsToShow] = React.useState([]);
const reviewActivities = listOfReviewActivities;

const imageArray = [burgerHeadImage1,burgerHeadImage2,burgerHeadImage3]


  return (
    <PageLayout>
    <Box >
      <SearchCenter burgerSpots={burgerSpots} setSearchValue={setSearchResult} searchValue={searchResult} />  
    </Box>
    <Box sx={{ borderTop: 1, borderColor: 'divider', paddingTop:'20px' }}>
       <div className='flex-row flex-start'>
          <section className="flex-column feed-container">
            <Grid container justifyContent="center" spacing={2}>
                {burgerSpots.map((v,i)=>{v.imagePath = getRandomFromArray(imageArray); return v;}).filter((v)=>{
                  if(searchResult !== null ){
                    if(v.id === searchResult.id){
                      return v; 
                    }else{
                      return null; 
                    }
                  }else{
                      return v; 
                  }
                   
                  }).map((v,i)=>{
                  return <Grid key={i} item>
                    <SpotItem key={i} content={v} />
                  </Grid>
                })
              }
            </Grid>
          </section>

          <Box className="hideBelow920" sx={{ width: '30%', minWidth:'295px',height:'100%', display: 'flex', paddingBottom:'20px', paddingLeft:'20px', flexDirection:'column' }}>
            <div className="listHeadline">Recent Spot Activity</div>
            <List className="activity" list={reviewActivities} />
          </Box>
        </div>
    
      </Box>
    </PageLayout>
  );
}

export default Spots;