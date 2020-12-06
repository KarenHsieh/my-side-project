import React, { Component } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Layout from '../components/layout'



export default function Home() {


  return (
    <Layout>
      <main className={styles.main}>
        <h3 className={styles.title}>
          this is home page
        </h3>
      </main>
    </Layout>
    
  )
}



