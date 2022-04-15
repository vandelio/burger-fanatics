import React from 'react';
import Box from '@mui/material/Box';
import { Icon, View } from '@aws-amplify/ui-react';
import { Button, Flex, TextField } from '@aws-amplify/ui-react';
import '../../styles/transitions.css';
const SharingCenter = () => {
    const [value, setValue] = React.useState('')
      return (
        <Box sx={{ width: '100%',height:'100%', display: 'flex', flexDirection:'column',  }}>
          <Box sx={{ width: '100%',height:'100%', display: 'flex', padding:'6px 20px 16px', flexDirection:'column', borderBottom: 1, borderColor: 'divider' }}>
    
            <TextField value={value} direction="column" inputMode="text" name="sharingexperience"
              placeholder="How was you last Burger experience?" type="text" wrap="nowrap" onChange={(e)=>
              {console.info(e.currentTarget.value); setValue(e.currentTarget.value)}}
              />
          </Box>
          {value !== '' && 
            <Box sx={{ padding:'10px 0', borderColor: 'divider' }}>
              <Flex direction="row" justifyContent="space-between" alignItems="center" alignContent="center">
                <View ariaLabel="To the moon!" role="button" onClick={()=> alert('👋 hello')}>
                  Upload image
                </View>
    
                <Box ariaLabel="To the moon!" role="button" onClick={()=> alert('👋 hello')}>
                  {value !== '' && <Button>Search</Button>}
                </Box>
              </Flex>
            </Box>
          }
    
        </Box>
      )
    }
    export default SharingCenter;