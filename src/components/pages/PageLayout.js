import React from 'react';
import Box from '@mui/material/Box';
function PageLayout(props) {
return (
<>
    <Box
        sx={{ width: '100%',height:'100%', display: 'flex', flexDirection:'column',borderBottom: 1, borderColor: 'divider' }}>
        <Box sx={{ p: 3 }}>
            <h1>{props.name}</h1>
            {props.children}
        </Box>
    </Box>
</>
);
}

export default PageLayout;