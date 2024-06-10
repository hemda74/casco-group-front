import React from 'react';

const clientLogos: string[] = [
  './images/clients/Picture1.jpg',
  './images/clients/Picture1.jpg',
  './images/clients/Picture2.png',
  './images/clients/Picture1.jpg',
  './images/clients/Picture1.jpg',
  './images/clients/Picture2.png',
  './images/clients/Picture3.png',
  './images/clients/Picture4.png',
  './images/clients/Picture5.png',
  './images/clients/Picture6.jpg',
  './images/clients/Picture7.jpg',
  './images/clients/Picture8.png',
  './images/clients/Picture9.png',
  './images/clients/Picture10.jpg',
  './images/clients/Picture11.png',
  './images/clients/Picture12.png',
  './images/clients/Picture13.jpg',
  './images/clients/Picture14.png',
];

const CompaniesSectionEn: React.FC = () => {
  // Helper function to render client logo divs
  const renderClientLogos = () => {
    return clientLogos.map((logo, index) => (
      <div className="col-6 col-md-3" key={index}>
        <div className="floating-logo" style={{ backgroundImage: `url(${logo})` }}></div>
      </div>
    ));
  };

  return (
    <section className="static-background">
      <div className="d-flex align-items-center text-center">
        <div
          className="background-parallax-logos d-flex flex-column align-items-center"
          data-scroll-speed="8"
          style={{ transform: 'translateY(-277.4px)' }}
        >
          <div className="row mb-auto">
            {renderClientLogos()}
          </div>
        </div>
        <h2 className="title title--lg">We support global clients</h2>
      </div>
    </section>
  );
};

export default CompaniesSectionEn;
