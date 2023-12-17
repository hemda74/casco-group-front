import React, { ReactElement } from 'react';
import Head from 'next/head';
import About from '../../components/AboutPage1';
import styles from '../../styles/Main.module.css';
import { NextPageWithLayout } from '../_app';
type Props = {};
// dymmy data for ui till handle working with api

const index = (props: Props) => {
  return (
    <>
      <Head>
        <title>About Usc | CASCO</title>
      </Head>
      <main>
        <About />
      </main>
    </>
  );
};
// adding Layout

export default index;
