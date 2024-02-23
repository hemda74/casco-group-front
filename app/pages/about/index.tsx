import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../_app';
import { useLanguage } from '../../Context/LanguageContext';
import Layout from '../../components/Layout';
import AboutMainSectionAr from '../../components/About/AboutMainSection-ar';
import AboutMainSectionEn from '../../components/About/AboutMainSection-en';
import MeetOurTeamEn from '../../components/About/MeetOurTeamEn';
import AccreditedBodiesCompaines from '../../components/AccreditedBodiesCompaines';
import AccreditedBodiesCompainesRtl from '../../components/AccreditedBodiesCompainesRtl';
import Ac from '../../components/Ac';
type Props = {};
const Index: NextPageWithLayout = (props: Props) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>Home | CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main>
            <AboutMainSectionEn />
            {/* <MeetOurTeamEn /> */}
            <Ac />
            <AccreditedBodiesCompaines />
            <AccreditedBodiesCompainesRtl />
          </main>
        ) : (
          <main>
            <AboutMainSectionAr />
            <MeetOurTeamEn />
          </main>
        )}
      </Layout>
    </>
  );
};
// adding Layout
Index.getLayout = function getLayout(Index: ReactElement) {
  return <ViewerLayout childern={Index}></ViewerLayout>;
};
export default Index;
