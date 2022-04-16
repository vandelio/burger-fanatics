import PageLayout from "./PageLayout";
import Box from '@mui/material/Box';
function Reviews() {

  const FeedTop = () => {
    return <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
      <h1>Burger Spots</h1>
    </Box>
  }


  return (
    <PageLayout parts={FeedTop}>
    </PageLayout>
  );
}


export default Reviews;