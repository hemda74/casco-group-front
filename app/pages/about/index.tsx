import React, { ReactElement } from 'react'
import Head from 'next/head';
import About from '../../components/AboutPage1'
import ViewerLayout from '../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../_app';
type Props = {};
// dymmy data for ui till handle working with api

const index:NextPageWithLayout = (props:Props) => {
  return (
    <>
    <Head>
        <title>CASCO | About Us</title>
   </Head>
    <About/>
    </>
  )
}
// adding Layout
index.getLayout = function getLayout(index: ReactElement) {
    return <ViewerLayout childern={index}></ViewerLayout>;
  };
export default index