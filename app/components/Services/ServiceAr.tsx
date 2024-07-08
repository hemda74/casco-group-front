import React from 'react';
import BannerAr from './BannerAr';
import ContentSectionAr from './ContentSectionAr';
import { Service, ServiceShort } from '../../types';

type Props = {
  service: Service;
  services: ServiceShort[];

};
const SingleserviceAr: React.FC<Props> = ({ service, services }) => {



  return (
    <>
      <BannerAr service={service} />
      <ContentSectionAr service={service} services={services}
      />
    </>
  );
};

export default SingleserviceAr;
