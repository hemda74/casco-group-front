import React from 'react';
import Banner from './Banner';
import ContentSection from './ContentSection';
import { Service, ServiceShort } from '../../types';

type Props = {
  service: Service;
  services: ServiceShort[];

};
const SingleserviceEn: React.FC<Props> = ({ service, services }) => {



  return (
    <>
      <Banner service={service} />
      <ContentSection service={service} services={services}
      />
    </>
  );
};

export default SingleserviceEn;
