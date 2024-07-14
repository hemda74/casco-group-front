import React from 'react';
import Link from 'next/link';
import { News, Event, Event2, Event3 } from '../../types';
type Props = {
  newss: News[],
  events: Event[],
  papers: Event2[],
  articles: Event3[],
};
const MainPageAr: React.FC<Props> = ({ newss, events, articles, papers }) => {
  const j = newss[0];
  const [firstEvent, secondEvent] = events;
  const [f, s, t] = papers;
  return (
    <>
      <div id="content-wrap" dir='rtl'>
        <div className="no-image-banner text-center">
          <h1 className="title title--2xl title--bold">
            <span className="gradient-text">الاخبار والرؤى</span>
          </h1>
        </div>
        <section className="off-screen off-screen--fade-up">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="grid-3">
                  <Link href={`/news-insights/company-news/${j.id}`}>
                    <div className="card ">
                      <div className="card__image object-fit">
                        <picture>
                          <img src={j.imageUrl} />
                        </picture>
                      </div>
                      <div className="card__category">خبر</div>
                      <div className="position-bottom">
                        <div className="card__content">
                          <h3 className="title title--xs title--medium-weight ">
                            {j.title_ar}                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link href={`/news-insights/events/${firstEvent.id}`}>
                    <div className="card  red-2-background  card--fixed-sm ">
                      <div className="card__category">فاعلية</div>
                      <div className="position-bottom">
                        <div className="card__content">
                          <h3 className="title title--xs title--medium-weight ">
                            {firstEvent.title_ar}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link href={`/news-insights/events/${secondEvent.id}`}>
                    <div className="card red-2-background card--fixed-sm">
                      <div className="card__category">فاعلية</div>
                      <div className="position-bottom">
                        <div className="card__content">
                          <h3 className="title title--xs title--medium-weight ">
                            {secondEvent.title_ar}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="row justify-content-center">
                  <div className="col-xl-3 col-lg-4 col-xs-6 text-center pad-15-mob">
                    <Link
                      href="/news-insights/company-news/"
                      className="line-link red-3-color">
                      <span className="red-3-color">رؤية جميع الاخبار</span>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-xs-6 text-center">
                    <Link
                      href="/news-insights/events/"
                      className="line-link red-3-color">
                      <span className="red-3-color">رؤيةجميع الفاعليات</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white pad-80-top">
          <div className="container card-grid">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="title title--md red-1-color">احدث المقالات</h2>
              </div>
              {articles.map((a) => (
                <div className="col-lg-4 col-md-6" key={a.id}>
                  <Link href="/news-insights/articles/data-science-and-data-platforms-unlocking-new-possibilities-for-the-supply-chain/">
                    <div className="card card--image red-1-background white-color card--fixed-sm ">
                      <div className="card__image object-fit">

                        <img src={a.imageUrl} alt={a.title_ar} />
                        <div className="argon-star-overlay"></div>
                      </div>
                      <div className="card__category">مقال</div>
                      <div className="position-bottom">
                        <div className="card__content">
                          <h3 className="title title--xs title--medium-weight ">
                            {a.title_ar}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}

              <div className="col-12 text-center">
                <Link
                  href="/news-insights/articles/"
                  className="line-link red-1-color">
                  <span className="red-1-color">عرض جميع المقالات</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white pad-80-top">
          <div className="container card-grid">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <h2 className="title title--md red-5-color">
                  اخر الابحاث
                </h2>
              </div>

              <div className="col-lg-4 col-md-6">
                <Link href={`/news-insights/white-papers/${f.id}`}>
                  <div className="card  card--large  red-5-background">
                    <div className="card__category">ورقة بحثية </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--sm title--medium-weight">
                          {f.title_ar}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link href={`/news-insights/white-papers/${s.id}`}>
                  <div className="card  card--large  red-5-background">
                    <div className="card__category">ورقة بحثية </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--sm title--medium-weight">
                          {s.title_ar}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <Link href={`/news-insights/white-papers/${t.id}`}>
                  <div className="card  card--large  red-5-background">
                    <div className="card__category">ورقة بحثية </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--sm title--medium-weight">
                          {t.title_ar}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>


              <div className="col-12 text-center">
                <Link
                  href="/news-insights/white-papers/"
                  className="line-link red-5-color">
                  <span className="red-5-color">الذهاب الى الابحاث</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MainPageAr;
