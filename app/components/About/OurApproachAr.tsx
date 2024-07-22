import React from 'react';
import WhereIsNextAr from '../WhereIsNextAr';
import TestimonialsAr from './TestmonalialsAr';
import { Test } from '../../types';

type Props = {
  test: Test[];
}

const OurApproachAr: React.FC<Props> = ({ test }) => {
  return (
    <>
      <div id="content-wrap" dir="rtl">
        <div className="no-image-banner text-center">
          <h1 className="title title--bold title--2xl">
            <span className="gradient-text">نهجنا</span>
          </h1>
        </div>

        <section className="off-screen off-screen--fade-up">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="grid-9">
                  <div className="grid-card red-3-background intro text-white">
                    <span className="text-white">
                      <p>
                        <span className="intro--medium text-white">
                          {`تجربتنا المتنوعة، وفهمنا العميق ووعينا بالصورة الأكبر يعني أننا
                          نحُل المشكلات التجارية المعقدة بطرق إبداعية ومبتكرة.`}
                        </span>
                      </p>
                      <p className="fs-6">
                        {`من خلال العمل على جميع المستويات، نقوم بتحويل عمليات العملاء
                        باستخدام نهجنا الفريد Assess Design Embed®، والذي يتم تطبيقه في
                        كل مرحلة من مراحل المشروع لتقليل المخاطر وتحقيق نتائج أفضل، بشكل
                        أسرع، وبطريقة مستدامة:`}
                      </p>
                      <ul>
                        <li>
                          {`نعمل استراتيجيًا مع مجالس الإدارة والإدارة العليا، ونتعرف على
                          العوامل ذات التأثير الكبير ونجمع بين رؤية واسعة للقضايا وخبرتنا
                          العميقة في المجالات الوظيفية`}
                        </li>
                        <li>
                          {`نقدم مدخلات متخصصة، مستخدمين خبرتنا عبر العديد من الصناعات لتصميم
                          حلول عملية لتحقيق الأهداف الاستراتيجية`}
                        </li>
                        <li>
                          {`نقوم بتنفيذ التغيير التشغيلي، وندير برامج التحول لتحقيق تغيير
                          مستدام في النهج السوقي، العمليات، التنظيم، الثقافة، والأنظمة`}
                        </li>
                      </ul>
                    </span>
                  </div>
                  <div
                    className="grid-card grid-card--image"
                    style={{
                      backgroundImage:
                        'url(https://www.argonandco.com/wp-content/uploads/2019/12/approach-2.png)',
                    }}></div>
                  <div
                    className="grid-card grid-card--image"
                    style={{
                      backgroundImage:
                        'url(https://www.argonandco.com/wp-content/uploads/2019/12/approach-1.png)',
                    }}></div>
                  <div className="grid-card red-5-background white-color">
                    <span>
                      <p>
                        <span className="intro intro--medium">
                          {`التحديات تحفزنا، ونزدهر عند الإجابة على الأسئلة التي تبقي عملائنا
                          مستيقظين في الليل. نحن نحفر عميقًا لتحديد جذور المشكلة، ونطبق
                          مزيجًا من التحليل العلمي، وفطنة الأعمال، والفطرة السليمة.`}
                        </span>
                      </p>
                      <p className="text-white">
                        {`إبداعيون ودقيقون في نهجنا، ومركزون في التنفيذ، نقوم بتحديد وتنفيذ
                        حلول تجارية عملية.`}
                      </p>
                      <p className="text-white">
                        {`يثق عملاؤنا بنا لإنجاز المهمة أينما كنا في العالم، مع نهج استشاري
                        مشترك واعتقاد بأن الشيء الوحيد الذي يهم هو تحقيق فرق حقيقي لعملائنا.`}
                      </p>
                    </span>
                  </div>
                  <div
                    className="grid-card grid-card--image"
                    style={{
                      backgroundImage:
                        'url(https://www.argonandco.com/wp-content/uploads/2020/01/Our-Approach-e1578996335572.jpg)',
                    }}></div>
                  <div
                    className="grid-card grid-card--image"
                    style={{
                      backgroundImage:
                        'url(https://www.argonandco.com/wp-content/uploads/2020/01/No-text-Smart-Office-5.jpg)',
                    }}></div>
                </div>

                <TestimonialsAr test={test} />
              </div>
            </div>
          </div>
        </section>
        <WhereIsNextAr />
      </div>
    </>
  );
};

export default OurApproachAr;
