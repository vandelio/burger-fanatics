import * as React from 'react';
import PropTypes from 'prop-types';
import {Tabs,Tab} from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import {useCurrentWidth} from '../../hooks/useCurrentWidth';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  let width = useCurrentWidth();
  
  const handleChange = (event, newValue) => {
    props.setActivePageIndex(newValue);
  };

  return (
    <nav className="dark-bg">
      <Tabs ariant="fullWidth" value={props.activePageIndex} onChange={handleChange} aria-label="basic tabs example">
        {props.tablist.map((v,i)=>{
          return <Tab key={i} icon={v.icon} iconPosition={`start`} aria-label="phone" label={<label>{v.name}</label>} {...a11yProps(i)} />
        })}
      </Tabs>
    </nav>
  );
}
