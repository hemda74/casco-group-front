import Link from 'next/link';
import React from 'react';

const WhatWeDoAr = () => {
  return (
    <>
      <div id="content-wrap" dir="rtl">
        <div className="banner banner--ar banner--full-overlay">
          <div className="banner__background">
            <picture>
              <source
                type="image/webp"
                srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-26.jpg.webp"
              />
              <img src="https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-26.jpg" />
            </picture>
          </div>
          <div className="banner__center text-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-11">
                  <h1 className="title title--xl title--bold off-screen off-screen--rotate-up">
                    ماذا نفعل في كاسكو
                  </h1>
                  <p className="intro off-screen off-screen--rotate-up mt-3">
                    شركة استشارات إدارية عالمية متخصصة في استراتيجية العمليات والتحول.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="banner__bottom text-center banner__bottom--lower m-auto">
            <div className="m-auto text-white">
              <span property="itemListElement" typeof="ListItem">
                <Link
                  title="الذهاب إلى الصفحة الرئيسية"
                  href="/"
                  className="home m-auto text-white">
                  <span property="name" className="me-2 ms-2 text-white">
                    الرئيسية
                  </span>
                </Link>
                <meta property="position" content="1" />
              </span>
              ›
              <span property="itemListElement" typeof="ListItem">
                <Link
                  title="الذهاب إلى صفحة عن كاسكو"
                  href="/about/"
                  className="post post-page">
                  <span property="name" className="me-2 ms-2 text-white">
                    عن كاسكو
                  </span>
                </Link>
                <meta property="position" content="2" />
              </span>
              ›
              <span className="post post-page current-item me-2 ms-2 text-white cursor-pointer">
                ماذا نفعل في كاسكو
              </span>
            </div>
          </div>
        </div>

        <div className="section section--std off-screen--fade-up">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h2
                  className="title title--lg red-2-color text-center"
                  style={{ marginBottom: '40px' }}>
                  تحويل العمليات
                </h2>
              </div>
              <div
                className="col-md-5 offset-md-1"
                style={{ marginBottom: '30px' }}>
                <h2 className="title title--md red-1-color">
                  استراتيجية وتحول العمليات
                </h2>
                <p>
                  <span className="intro text-black-50">
                    {`بفضل الخبرة التي تمتد إلى تخطيط سلسلة الإمداد، التصنيع، اللوجستيات،
                    المشتريات، المالية، والخدمات المشتركة، نعمل مع العملاء لتحويل
                    أعمالهم وتحقيق تغيير حقيقي.`}
                  </span>
                </p>
                <p className="intro text-black-50">
                  {`التحول يتضمن إجراء تغيير كبير في طريقة تشغيل الشركة، مما يتيح لها
                  الاستفادة بشكل أفضل من الكفاءات والبنية التحتية الحالية أو تطوير
                  جديدة. يؤدي ذلك إلى تحسين كبير في الأداء.`}
                </p>
              </div>
              <div className="col-md-5" style={{ marginBottom: '30px' }}>
                <h2 className="title title--md red-2-color">
                  الخبرة التقنية والخبرة التشغيلية
                </h2>
                <p>
                  <span className="intro text-black-50">
                    {`نطبق مزيجًا من الخبرة التقنية العميقة، والخبرة التشغيلية،
                      والمعرفة التجارية الواسعة لتحقيق نتائج مستدامة.`}
                  </span>
                </p>
                <p className="intro text-black-50">
                  {`جميع أفراد فريقنا يأتون من خلفيات تشغيلية وقد مروا بتدريب صارم،
                  لذا نحن نعرف حقًا ما نتحدث عنه.`}
                </p>
              </div>
              <div
                className="col-md-5 offset-md-1"
                style={{ marginBottom: '30px' }}>
                <h2 className="title title--md red-3-color">
                  الودّ مع التحدي عند الحاجة
                </h2>
                <p>
                  <span className="intro text-black-50">
                    {`نهجنا الإيجابي، المرن، والشخصي، مع التحدي عند الحاجة، يضمن
                    الحصول على دعم من جميع مستويات أعمال عملائنا وتحقيق نتيجة إيجابية.`}
                  </span>
                </p>
                <span className="intro text-black-50">
                  {`نحن ممتعون في العمل معنا ويثق بنا العملاء لإنجاز المهمة، ونشترك
                  في الاعتقاد بأن الشيء الوحيد الذي يهم هو تحقيق فرق حقيقي لعملائنا.`}
                </span>
              </div>
              <div className="col-md-5" style={{ marginBottom: '30px' }}>
                <h2 className="title title--md red-4-color">
                  وجود عالمي مع خبرة محلية
                </h2>
                <p>
                  <span className="intro text-black-50">
                    {`لدينا مكاتب في باريس، لندن، أبوظبي، أمستردام، أتلانتا، أوكلاند،
                    شيكاغو، دوسلدورف، هونغ كونغ، لوزان، ملبورن، مومباي، الرياض،
                    ساو باولو، سنغافورة، وسيدني.`}
                  </span>
                </p>
                <span className="intro text-black-50">
                  {`مع أكثر من 500 استشاري على مستوى العالم في 16 مكتبًا، لدينا القدرة
                  على تقديم الدعم المحلي لعملائنا جنبًا إلى جنب مع فهمنا المشهور
                  لأفضل الممارسات العالمية.`}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDoAr;
