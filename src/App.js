import React, {useState, useEffect} from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import ReactDOM from "react-dom";
import IconTabs from "./components/parts/IconTabs";
import Home from "./components/pages/Home";
import Reviews from "./components/pages/Reviews";
import Spots from "./components/pages/Spots";
import MyProfile from "./components/pages/MyProfile";
import NotificationCenter from './components/parts/NotificationCenter';
import Logo from './components/parts/Logo';

import LunchDiningIcon from '@mui/icons-material/LunchDining';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';

import { Button, Flex, TextField } from '@aws-amplify/ui-react';

import './styles/base.css';
import './styles/header.css';
import './styles/transitions.css';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

Amplify.configure(awsExports);
function App() {
  const [userComponent, setUserComponent] = useState(null)
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [activePageName, setActivePageName] = useState(null);

  const [showHeader, setShowHeader] = useState(true);

  const componentIndexToName = [
    {
      name:'Home',
      component:<Home/>,
      icon:<LunchDiningIcon />
    }, 
    {
      name:'Spots',
      component:<Spots/>,
      icon:<RoomOutlinedIcon />
    },
    {
      name:'MyProfile',
      component:<MyProfile/>,
      icon:<FaceOutlinedIcon />
    } 
  ]

  useEffect(() => {
    console.log('useEffect', componentIndexToName[activePageIndex]);
    setActivePageName(componentIndexToName[activePageIndex].name)
    setUserComponent(componentIndexToName[activePageIndex].component);
    // setShowHeader(componentIndexToName[activePageIndex].name === 'Home'); 
  },[activePageIndex])

  if(userComponent === null || activePageName === null) return 'Loading...';

  
  return (
    <>
      <div className={`head-container flex-column align-center-desktop showFull`}>
        {/* sqitchf to flex width: 100%; */}
        <header className="flex-row-desktop  space-between">
          <section className={`head flex-row space-between`}>
            <Logo />
            <NotificationCenter />
          </section>
          <IconTabs activePageIndex={activePageIndex} setActivePageIndex={setActivePageIndex} tablist={componentIndexToName}/>
        </header>
      </div>
      <SwitchTransition>
        <CSSTransition key={true} addEndListener={(node, done)=> node.addEventListener("transitionend", done, false)} classNames='fade'>
          <>
            {userComponent}
          </>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
}

export default App;