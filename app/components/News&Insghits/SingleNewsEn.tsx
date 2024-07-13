import Link from 'next/link';
import React from 'react';
import { News } from '../../types';
type Props = {
  news: News;
  newss: News[];
};

const SingleEventEn: React.FC<Props> = ({ news, newss }) => {
  const [firstEvent, ...restEvents] = news.paragraph_news;
  const firstThreeEvents = newss.slice(0, 3);

  return (
    <>
      <div id="content-wrap">
        <div className="banner  banner--no-image  banner--ar banner--top-overlay  banner--title-overflow banner--single red-5-background background-banner                         ">
          <div className="banner__background"></div>
          <div className="banner__bottom text-center ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10 banner__white-overlay">
                  <div className="post-meta off-screen off-screen--rotate-up">
                    <span>News</span>
                    <span>{news.date_of_news}</span>

                  </div>
                  <h1 className="title title--lg title--bold off-screen off-screen--rotate-up">
                    {news.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mrg-80-top off-screen off-screen--fade-up">
          <div className="row justify-content-center">
            <div className="col-md-8 entry the-content the-content--post">
              <div className="page" title="Page 2">
                <div className="layoutArea">
                  <div className="column">
                    <p><span className="intro text-black">{firstEvent.text}</span></p>
                    <p><picture className="size-medium wp-image-4530 alignright">
                      <img src={news.imageUrl} alt="" width="214" height="300" srcSet={news.imageUrl} />
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
            More News          </h2>
          <div className="container">
            <div className="row small-gutters pad-40-vert">
              {firstThreeEvents.map((h) => (
                <div className="col-md-4" key={h.id}>
                  <Link href={`/news-insights/events/${h.id}/`}>
                    <div className="card  red-2-background card--fixed-sm ">
                      <div className="card__category">News</div>
                      <div className="position-bottom">
                        <div className="card__content">
                          <h3 className="title title--xs title--medium-weight ">
                            {h.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}

            </div>
          </div>
          <div className="text-center">
            <Link
              href="/news-insights/news/"
              className="line-link red-3-color">
              <span className="red-3-color">Back to all News</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleEventEn;
