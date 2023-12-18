import React, { ReactElement } from 'react';
import Head from 'next/head';
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
      <main></main>
    </>
  );
};
// adding Layout

export default index;
