import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Icon, View } from '@aws-amplify/ui-react';
import { Button, Flex } from '@aws-amplify/ui-react';

import {savePost} from "../../hooks/apiFunctions";

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import '../../styles/transitions.css';
const SharingCenter = (props) => {
    const [value, setValue] = React.useState('')
    const [savePostClicked, setClicked] = React.useState(false)

    
      return (<>
      {/* Insert module to trigger save post, with auth */}
      
        <Box sx={{ width: '100%',height:'100%', display: 'flex', flexDirection:'column',  }}>
          <Box sx={{ width: '100%',height:'100%', display: 'flex', padding:'16px 0 16px', flexDirection:'column',}}>
    
            <TextField value={value} direction="column" inputMode="text" name="sharingexperience" label={null} placeholder="How was you last Burger experience?" type="text" wrap="nowrap" onChange={(e)=>
              {console.info(e.currentTarget.value); setValue(e.currentTarget.value)}}
              />
          </Box>
          {value !== '' && 
            <Box sx={{ padding:'10px 0', borderColor: 'divider' }}>
              <Flex direction="row" justifyContent="space-between" alignItems="center" alignContent="center">
                {/* <View ariaLabel="To the moon!" role="button" onClick={()=> alert('👋 hello')}>
                  Upload image
                </View> */}
    
                <Box ariaLabel="Send it to the moon!" role="button" onClick={()=> {setClicked(true)}}>
                  {!savePostClicked && value !== '' && <Authenticator>
                      {({ signOut, user }) => {
                        return <main>
                          <Box ariaLabel="Send it to the moon!" role="button" onClick={()=> {savePost(value, props.feed, props.setFeed, user.username)}}>
                            {value !== '' && <Button>Publish!</Button>}
                          </Box>
                      </main>
                      }}
                    </Authenticator>}
                  
                </Box>
              </Flex>
            </Box>
          }
    
        </Box>
        </>
      )
    }
    export default SharingCenter;