import Link from 'next/link';
import React from 'react';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { Event } from '../../types';
type Props = {
  event: Event;
  events: Event[];
};

const SingleEventEn: React.FC<Props> = ({ event, events }) => {
  const [firstEvent, ...restEvents] = event.paragraph_event_ar;
  const firstThreeEvents = events.slice(0, 3);

  return (
    <>
      <div dir='rtl' id="content-wrap" >
        <div dir='rtl' className="banner banner--no-image  banner--ar banner--top-overlay  banner--title-overflow banner--single red-5-background background-banner                         ">
          <div dir='rtl' className="banner__bottom text-center ">
            <div dir='rtl' className="container">
              <div dir='rtl' className="row justify-content-center">
                <div dir='rtl' className="col-lg-10 banner__white-overlay">
                  <div dir='rtl' className="post-meta off-screen off-screen--rotate-up">
                    <span>فاعلية</span>
                    <span>{event.date_of_event_ar}</span>
                  </div>
                  <h1 className="title title--lg title--bold off-screen off-screen--rotate-up">
                    {event.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div dir='rtl' className="container mrg-80-top off-screen off-screen--fade-up">
          <div dir='rtl' className="row justify-content-center">
            <div dir='rtl' className="col-md-8 entry the-content the-content--post">
              <div dir='rtl' className="page" title="Page 2">
                <div dir='rtl' className="layoutArea">
                  <div dir='rtl' className="column">
                    <p><span className="intro text-black">{firstEvent.text}</span></p>
                    <p><picture className="size-medium wp-image-4530 alignright">
                      <img src={event.imageUrl} alt="" width="214" height="300" srcSet={event.imageUrl} />
                    </picture>
                    </p>
                    {restEvents.map((e) => (
                      <p key={e.id}>{e.text}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="pad-100-vert off-screen off-screen--fade-up">
          <h2 className="title title--lg red-1-color text-center color-red-1">
            المزيد من الفاعليات
          </h2>
          <div dir='rtl' className="container">
            <div dir='rtl' className="row small-gutters pad-40-vert">
              {firstThreeEvents.map((h) => (
                <div dir='rtl' className="col-md-4" key={h.id}>
                  <Link href={`/news-insights/events/${h.id}/`}>
                    <div dir='rtl' className="card  red-2-background card--fixed-sm ">
                      <div dir='rtl' className="card__category">فاعلية </div>
                      <div dir='rtl' className="position-bottom">
                        <div dir='rtl' className="card__content">
                          <h3 className="title title--xs title--medium-weight ">
                            {h.title_ar}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div dir='rtl' className="text-center">
            <Link
              href="/news-insights/events/"
              className="line-link red-3-color">
              <span className="red-3-color">العودة الى الفاعليات</span>
            </Link>
          </div>
        </section>
      </div >
    </>
  );
};

export default SingleEventEn;
