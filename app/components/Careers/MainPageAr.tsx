import React from 'react';
import Link from 'next/link';
import InsidersAr from '../InsidersAr';

const MainPageAr = () => {
  return (
    <>
      <div id="content-wrap" dir="rtl">
        <div className="banner banner--full-height banner--overlay">
          <div className="banner__background">
            <picture>
              <img
                src="https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-17-1-scaled.jpg"
                alt=""
              />
            </picture>
          </div>
          <div className="banner__bottom text-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-11">
                  <h1 className="title title--xl title--bold off-screen off-screen--rotate-up">
                    الوظائف
                  </h1>
                  <p className="intro off-screen off-screen--rotate-up">
                    {`نحن دائمًا في بحث عن أشخاص ملهمين ومتحمسين وذوي خبرة للانضمام إلى فريقنا.`}
                  </p>
                  <div className="down-arrow js-interact js-scroll-height">
                    <Link href="#culture">
                      <p>.</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="half-and-half" id="culture">
          <div className="row no-gutters">
            <div
              className="col-md-6 half-and-half__image"
              style={{
                backgroundImage:
                  'url(https://www.argonandco.com/wp-content/uploads/2019/11/culture.jpg)',
              }}
            ></div>
            <div className="col-md-6 red-1-background white-color">
              <div className="half-and-half__content">
                <h2>الثقافة</h2>
                <p>
                  <span className="intro">
                    {`يقول عملاؤنا ومستشارونا نفس الشيء؛ نحن نقوم بالأمور بطريقة مختلفة عن الآخرين. نحن نعمل بجد في هذا، ونعمل على توظيف أفضل الأشخاص والتركيز على ثقافتنا ونهجنا التعاوني، الذي يعد فريدًا في الصناعة.`}
                  </span>
                </p>
                <p>
                  {`أشخاصنا هم عملنا. نحن نوفر فرقًا من المستشارين ذوي المهارات العالية لتطبيق مجموعة من الخبرة التقنية، والخبرة التشغيلية، والمعرفة التجارية، وحس السليم لتحقيق تغيير حقيقي.`}
                </p>
                <p>
                  {`الركيزة الأساسية لنهجنا هي العناية ببعضنا البعض وبعملائنا. نحن أشخاص حقيقيون نتعامل مع أشخاص حقيقيين، لذلك نحتاج إلى فهم القضايا والاهتمامات التي يواجهها العملاء، وأيضًا السماح لزملائنا بتطوير مهاراتهم في مجموعة واسعة من المهام بينما يحققون توازنًا مستدامًا بين العمل والحياة.`}
                </p>
              </div>
            </div>
          </div>

          <div className="row no-gutters">
            <div
              className="col-md-6 order-2 half-and-half__image"
              style={{
                backgroundImage:
                  'url(https://www.argonandco.com/wp-content/uploads/2019/11/prof_dev.jpg)',
              }}
            ></div>
            <div className="col-md-6 order-1 red-2-background white-color">
              <div className="half-and-half__content">
                <h2>التطوير المهني</h2>
                <p>
                  <span className="intro">
                    {`نحن نوظف فقط أفضل الأشخاص؛ أولئك الذين نعتقد أنهم سيتناسبون مع نهجنا الداعم والتعاوني، والذين سيكونون قادرين على تحدي عملائنا بشكل بناء أثناء العمل معهم لإنجاز المهمة.`}
                  </span>
                </p>
                <p>
                  {`بمجرد انضمام شخص إلينا، نعتقد أنه من الضروري توفير بيئة يمكنهم من خلالها تطوير وتوسيع قدراتهم بشكل مستمر. على مدار مسيرتك المهنية معنا في Argon & Co، سيقدم لك نموذج تطوير حياتك المهنية الفرصة لـ:`}
                </p>
                <ul>
                  <li>
                    {`توسيع مهاراتك عبر عدد من تخصصات الأعمال المختلفة`}
                  </li>
                  <li>
                    {`تطوير مهارات تقنية أعمق في مجالات تخصصك`}
                  </li>
                  <li>{`العمل في والتعرف على صناعات مختلفة`}</li>
                  <li>
                    {`العمل مع فرق مهنية عالية المستوى، والاستشارات لجميع مستويات العميل`}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <InsidersAr />
        <div
          className="section section--std full-image-content off-screen off-screen--hide off-screen--fade-up join-us"
          style={{
            backgroundImage:
              'url(https://www.argonandco.com/wp-content/uploads/2019/11/grid-scaled.jpg)',
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <h2 className="title title--lg red-2-color text-center">
                  انضم إلينا
                </h2>
                <p style={{ textAlign: 'center' }}>
                  <span className="intro text-black">
                    {` تعرف على المزيد حول العمل في Argon & Co، والمشاريع النموذجية التي نعمل عليها، والأحداث المنتظمة التي يمكنك المشاركة فيها، والمسار المهني المثير القادم وكيفية التقديم لشغل وظيفة معنا.`}
                  </span>
                </p>
                <p style={{ textAlign: 'center' }}>
                  <Link href="/careers/join-us/">اقرأ المزيد وتقدم</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="pad-100-vert off-screen off-screen--hide off-screen--fade-up">
          <h2 className="title title--lg red-1-color text-center color-red-1">
            أين الوجهة التالية؟
          </h2>
          <div className="container">
            <div className="row small-gutters pad-40-vert">
              <div className="col-md-4">
                <a href="https://www.argonandco.com/en/about/what-we-do/">
                  <div className="card card--image red-3-background white-color card--fixed-sm">
                    <div className="card__image object-fit">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-26-1024x732.jpg.webp"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-26-1024x732.jpg" />
                      </picture>
                    </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight">
                          ما الذي نقوم به
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-4">
                <a href="https://www.argonandco.com/en/about/our-approach/">
                  <div className="card card--image red-3-background white-color card--fixed-sm">
                    <div className="card__image object-fit">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-15-1024x736.jpg.webp"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-15-1024x736.jpg" />
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
                </a>
              </div>

              <div className="col-md-4">
                <a href="https://www.argonandco.com/en/about/our-culture/">
                  <div className="card card--image red-3-background white-color card--fixed-sm">
                    <div className="card__image object-fit">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/IMG_8317-1024x995.jpg.webp"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2019/12/IMG_8317-1024x995.jpg" />
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
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MainPageAr;

