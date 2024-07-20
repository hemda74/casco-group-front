import Link from 'next/link';
import React from 'react';
import RecogentionAr from '../RecogentionAr';
import { Member, Reco, Teams } from '../../../types';
type Props = {
  reco: Reco[];
  members: Member[];
  team: Teams;

}
const MainTeamPageAr: React.FC<Props> = ({ reco, members, team }) => {
  return (
    <>
      <div dir="rel">
        <div className="no-image-banner text-center">
          <h1 className="title title--bold title--2xl">
            <span className="gradient-text">عن كاسكو</span>
          </h1>
        </div>
        <section className="off-screen off-screen--fade-up">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="grid-3">
                  <Link href="/about/what-we-do/">
                    <div className="card card--image red-3-background white-color card--large">
                      <div className="card__image object-fit">
                        <picture>
                          <img
                            src="https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-26-1024x732.jpg"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="position-bottom">
                        <div className="card__content">
                          <h3 className="title title--xs title--medium-weight">
                            ماذا نعمل في كاسكو
                          </h3>
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link href="/about/our-culture/">
                    <div className="card card--image red-3-background white-color card--fixed-sm">
                      <div className="card__image object-fit">
                        <picture>
                          <img
                            src="https://www.argonandco.com/wp-content/uploads/2019/12/IMG_8317-1024x995.jpg"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="position-bottom">
                        <div className="card__content">
                          <h3 className="title title--xs title--medium-weight">
                            ثقافتنا
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link href="/about/our-approach/">
                    <div className="card card--image red-3-background white-color card--fixed-sm">
                      <div className="card__image object-fit">
                        <picture>
                          <img
                            src="https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-15-1024x736.jpg"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="position-bottom">
                        <div className="card__content">
                          <h3 className="title title--xs title--medium-weight">
                            نهجنا
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="off-screen off-screen--hide off-screen--fade-up js-meet-the-team"
          id="meet-the-team">
          <div className="container card-grid">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="title title--lg red-1-color">{`فريقنا في ${team.name_ar}`}</h2>
              </div>
            </div>
            <div className="row js-team-top-level p-4">
              {members.map((m) => (
                <div className="col-xl-3 col-md-6 order-1" key={m.id}>
                  <div className="">
                    <a
                      className=" cursor-pointer"
                      data-bs-toggle="modal"
                      data-bs-target={`#example${m.id}Modal`}>
                      <div className=" card--person">
                        <div className="card--person__image grayscale">
                          <picture>
                            <img
                              src={m.imageUrl}
                              alt=""
                            />
                          </picture>
                        </div>
                        <strong className=" text-primary-100">{m.name_ar}</strong>
                      </div>
                    </a>
                    <div className="w-full">
                      <div
                        className=" modal  fade contact w-screen  fixed inset-0 mx-auto align-center scrolling-touch overflow-y-auto | lg:h-screen lg:px-8"
                        id={`example${m.id}Modal`}
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content w-full h-screen relative m-auto z-50 | lg:p-8 lg:h-auto">
                            <div className="relative bg-white   lg:max-w-content min-h-full lg:min-h-0 pointer-events-auto lg:rounded-lg lg:mx-auto">
                              <div className="absolute top-0 right-0 text-lg  cursor-pointer">
                                <button
                                  type="button"
                                  className="btn-close m-end"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>
                              <div className="row mt-5">
                                <div className="col-md-8">
                                  <h2 className="title title--lg p-2 text-primary-100 ">
                                    {m.name_ar}
                                  </h2>
                                  <ul>
                                    <li>
                                      {m.brief_1_ar}
                                    </li>
                                    <li>
                                      {m.brief_2_ar}
                                    </li>
                                    <li>
                                      {m.brief_3_ar}
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-md-4">
                                  <div className="card--person__image ">
                                    <img
                                      src={m.imageUrl}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <RecogentionAr reco={reco} />
      </div>
    </>
  );
};

export default MainTeamPageAr;
