import Link from 'next/link';
import React from 'react';
import { Event } from '../../types';
type Props = {
  events: Event[]
};
const EventsEn: React.FC<Props> = ({ events }) => {
  return (
    <>
      <div id="content-wrap" dir='rtl'>
        <div className="banner banner--ar banner--full-overlay ">
          <div className="banner__background">
            <img src="https://www.argonandco.com/wp-content/uploads/2019/11/careers_banner-scaled.jpg" />
          </div>
          <div className="banner__center text-center ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-11">
                  <h1 className="title title--xl title--bold off-screen off-screen--rotate-up">
                    Events
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container card-grid">
          <div className="row pad-40-vert">
            {events.map((e) => (
              <div className="col-md-4" key={e.id}>
                <Link href={`/news-insights/events/${e.id}`}>
                  <div className="card  red-2-background  card--fixed-sm ">
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight ">
                          {e.title_ar}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsEn;
