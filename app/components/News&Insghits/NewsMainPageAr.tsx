import Link from 'next/link';
import React from 'react';
import { News } from '../../types';
type Props = {
  newss: News[]
}
const NewsMainPageAr: React.FC<Props> = ({ newss }) => {
  return (
    <>
      <div id="content-wrap" dir="rtl">
        <div className="banner  banner--ar banner--full-overlay ">
          <div className="banner__background">
            <img src="https://www.argonandco.com/wp-content/uploads/2019/10/b-82.jpg" />
          </div>
          <div className="banner__center text-center ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-11">
                  <h1 className="title title--xl title--bold off-screen off-screen--rotate-up">
                    اخبار الشركة
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container card-grid">
          <div className="row pad-40-vert">
            {newss.map((n) => (
              <div className="col-md-4" key={n.id}>
                <Link href={`/news-insights/company-news/${n.id}`}>
                  <div className="card card--image red-1-background white-color card--fixed-sm ">
                    <div className="card__image object-fit">
                      <picture>
                        <img src={n.imageUrl} />
                      </picture>
                    </div>
                    <div className="card__category">الاخبار</div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight ">
                          {n.title_ar}
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

export default NewsMainPageAr;
