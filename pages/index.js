import React, { Component } from 'react';


import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Layout from '../components/layout'

import InfoCard from '../components/InfoCard/'



export default function Home() {


  return (
    <Layout>
      <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <InfoCard />
      </Container>
    </React.Fragment>

      
    </Layout>
    
  )
}



