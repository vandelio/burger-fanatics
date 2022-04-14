import * as React from 'react';
import PropTypes from 'prop-types';
import {Tabs,Tab} from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {

  console.log('tabs value', props.activePageIndex);
  // const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    props.setActivePageIndex(newValue);
    // setValue(newValue);
  };

  return (
    <nav>
      <Tabs ariant="fullWidth" value={props.activePageIndex} onChange={handleChange} aria-label="basic tabs example">
        <Tab icon={<PhoneIcon />} aria-label="phone" label="Item One" {...a11yProps(0)} />
        <Tab icon={<PhoneIcon />} aria-label="phone" label="Item Two" {...a11yProps(1)} />
        <Tab icon={<PhoneIcon />} aria-label="phone" label="Item Three" {...a11yProps(2)} />
        <Tab icon={<PhoneIcon />} aria-label="phone" label="Item Three" {...a11yProps(3)} />
      </Tabs>
    </nav>
  );
}
