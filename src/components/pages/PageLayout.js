import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
function PageLayout(props) {
return (
<>
    <Box
        sx={{ width: '100%',height:'100%', display: 'flex', flexDirection:'column',borderBottom: 1, borderColor: 'divider' }}>
        <Box sx={{ p: 3 }}>
            <div className="pageTop">
                {props.parts && <div>{props.parts}</div>}
            </div>
            <Divider/>
            <Box sx={{ marginTop:'20px' }}>
             {props.children}
            </Box>
        </Box>
    </Box>
</>
);
}

export default PageLayout;