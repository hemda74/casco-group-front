import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../../layouts/ViewerLayout';
import styles from '../../styles/Main.module.css';
import { NextPageWithLayout } from '../_app';
type Props = {};
// dymmy data for ui till handle working with api

const index: NextPageWithLayout = (props: Props) => {
  return (
    <>
      <Head>
        <title>About Us | CASCO</title>
      </Head>
      <main>
        <h1>Hello World</h1>
      </main>
    </>
  );
};
// adding Layout
index.getLayout = function getLayout(index: ReactElement) {
  return <ViewerLayout childern={index}></ViewerLayout>;
};
export default index;
