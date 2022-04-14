import React, {useState, useEffect} from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';

import ReactDOM from "react-dom";

import IconTabs from "./components/IconTabs";

import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Spots from "./pages/Spots";
import MyProfile from "./pages/MyProfile";


import './styles/base.css';
import './styles/transitions.css';
import { CSSTransition, SwitchTransition } from 'react-transition-group';


Amplify.configure(awsExports);
function App() {
  const [userComponent, setUserComponent] = useState(null)
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [activePageName, setActivePageName] = useState(null);

  const componentIndexToName = { 0: 'Home', 1: 'Reviews', 2: 'Spots', 3: 'MyProfile' }
  const componentAssociator = { Home: Home, Reviews: Reviews, Spots: Spots, MyProfile: MyProfile }

  useEffect(() => {
    console.log('useEffect',componentIndexToName[activePageIndex]);
    setActivePageName(componentIndexToName[activePageIndex])
    setUserComponent(componentAssociator[componentIndexToName[activePageIndex]]);
  },[activePageIndex])

if(userComponent === null || activePageName === null) return 'Loading...';
  return (
    <>
      <SwitchTransition>
        <CSSTransition
          key={true}
          addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
          classNames='fade'
        >
        <>
          {userComponent} 
        </>
        </CSSTransition>
      </SwitchTransition> 
      <IconTabs activePageIndex={activePageIndex} setActivePageIndex={setActivePageIndex} />
    </>
  );
}

export default App;