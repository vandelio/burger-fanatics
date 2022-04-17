import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
function PageLayout(props) {
return (
<>
    <Box
        sx={{ width: '100%',height:'100%', display: 'flex', flexDirection:'column',}}>
        <Box sx={{ p: 3 }}>
        {props.parts &&  
            <>
                <div className="pageTop">
                    <div>{props.parts}</div>
                </div>

                <Divider/>
            </>
        }
            <Box sx={{ marginTop:'0' }}>
                {props.children}
            </Box>
        </Box>
    </Box>
</>
);
}

export default PageLayout;