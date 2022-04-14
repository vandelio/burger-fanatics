import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Icon } from '@aws-amplify/ui-react';
import PageLayout from "./PageLayout";
import Logo from "../components/Logo";

function Home() {
  return (
    <PageLayout name="Home sweet home">
      <Logo />
    </PageLayout>
  );
}

export default Home;