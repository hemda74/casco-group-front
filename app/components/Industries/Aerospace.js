// import React, { Component } from 'react';
// import Slider from 'react-slick';
// export default class SwipeToSlide extends Component {
//   render() {
//     const settings = {
//       className: 'center',
//       infinite: true,
//       centerPadding: '50px',
//       swipeToSlide: true,
//       dots: false,
//       slidesToShow: 3,
//       slidesToScroll: 2,
//       pauseOnHover: true,
//       lazyLoad: true,
//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 5,
//             slidesToScroll: 2,
//             infinite: true,
//             dots: false,
//           },
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2,
//             dots: false,
//           },
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2,
//             dots: false,
//           },
//         },
//       ],
//     };
//     return (
//       <section className="section section--std section-divide off-screen off-screen--fade-up">
//         <div className="row justify-content-center">
//           <div className="col-md-8">
//             <h2 className="title title--lg red-2-color text-center">
//               Client testimonials
//             </h2>
//           </div>
//           <div className="col-md-12">
//             <Slider {...settings} className="mt-5">
//               <div>
//                 <div className="me-xl-4">
//                   <div className="card red-2-background card--fixed-sm ">
//                     <div className="card__content">
//                       <h3 className="title title--sm title--medium-weight">
//                         Supply quality management
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <div className="me-xl-4">
//                   <div className="card red-2-background card--fixed-sm ">
//                     <div className="card__content">
//                       <h3 className="title title--sm title--medium-weight">
//                         Supply quality management
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="me-xl-4">
//                   <div className="card red-2-background card--fixed-sm ">
//                     <div className="card__content">
//                       <h3 className="title title--sm title--medium-weight">
//                         Supply quality management
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <div className="me-xl-4">
//                   <div className="card red-2-background card--fixed-sm ">
//                     <div className="card__content">
//                       <h3 className="title title--sm title--medium-weight">
//                         Implementation approach for category management
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <div className="me-xl-4">
//                   <div className="card red-2-background card--fixed-sm ">
//                     <div className="card__content">
//                       <h3 className="title title--sm title--medium-weight">
//                         Supply quality management
//                       </h3>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Slider>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }
import React from 'react';
import Slider from 'react-slick';

function Responsive() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="section section--std section-divide off-screen off-screen--fade-up">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="title title--lg red-2-color text-center">
            Client testimonials
          </h2>
        </div>
        <div className="col-md-12">
          <Slider {...settings}>
            <div>
              <div className="me-xl-4">
                <div className="card red-2-background card--fixed-sm ">
                  <div className="card__content">
                    <h3 className="title title--sm title--medium-weight">
                      Supply quality management
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="me-xl-4">
                <div className="card red-2-background card--fixed-sm ">
                  <div className="card__content">
                    <h3 className="title title--sm title--medium-weight">
                      Supply quality management
                    </h3>
                  </div>
                </div>
              </div>
            </div>{' '}
            <div>
              <div className="me-xl-4">
                <div className="card red-2-background card--fixed-sm ">
                  <div className="card__content">
                    <h3 className="title title--sm title--medium-weight">
                      Supply quality management
                    </h3>
                  </div>
                </div>
              </div>
            </div>{' '}
            <div>
              <div className="me-xl-4">
                <div className="card red-2-background card--fixed-sm ">
                  <div className="card__content">
                    <h3 className="title title--sm title--medium-weight">
                      Supply quality management
                    </h3>
                  </div>
                </div>
              </div>
            </div>{' '}
            <div>
              <div className="me-xl-4">
                <div className="card red-2-background card--fixed-sm ">
                  <div className="card__content">
                    <h3 className="title title--sm title--medium-weight">
                      Supply quality
                    </h3>
                  </div>
                </div>
              </div>
            </div>{' '}
            <div>
              <div className="me-xl-4">
                <div className="card red-2-background card--fixed-sm ">
                  <div className="card__content">
                    <h3 className="title title--sm title--medium-weight">
                      management
                    </h3>
                  </div>
                </div>
              </div>
            </div>{' '}
            <div>
              <div className="me-xl-4">
                <div className="card red-2-background card--fixed-sm ">
                  <div className="card__content">
                    <h3 className="title title--sm title--medium-weight">
                      Supply quality management
                    </h3>
                  </div>
                </div>
              </div>
            </div>{' '}
            <div>
              <div className="me-xl-4">
                <div className="card red-2-background card--fixed-sm ">
                  <div className="card__content">
                    <h3 className="title title--sm title--medium-weight">
                      Supply
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Responsive;
