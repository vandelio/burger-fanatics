import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
function PageLayout(props) {
  
  return (
    <>
    <Box sx={{ width: '100%',height:'100%', display: 'flex', flexDirection:'column',borderBottom: 1, borderColor: 'divider' }}>
        <Box sx={{ p: 3 }}>
          <Typography>Name:{props.name}</Typography>
          children:
          {props.children}
        </Box>
    </Box>
    </>
  );
}

export default PageLayout;