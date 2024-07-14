import Link from 'next/link';
import React from 'react';
import { Event2 } from '../../types';
type Props = {
  papers: Event2[]
};
const WhitePaperMainEn: React.FC<Props> = ({ papers }) => {
  return (
    <>
      <div id="content-wrap">
        <div className="banner  banner--ar banner--full-overlay ">
          <div className="banner__background">
            <img src="https://www.argonandco.com/wp-content/uploads/2019/10/shutterstock_219813205.jpg" />
          </div>
          <div className="banner__center text-center ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-11">
                  <h1 className="title title--xl title--bold off-screen off-screen--rotate-up">
                    Whitepapers
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container card-grid">
          <div className="row pad-40-vert">
            {papers.map((p) => (
              <div className="col-md-4" key={p.id}>
                <Link href={`/news-insights/white-papers/${p.id}`}>
                  <div className="card  card--large  red-5-background">
                    <div className="card__category">Whitepaper</div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--sm title--medium-weight">
                          {p.title}
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

export default WhitePaperMainEn;
