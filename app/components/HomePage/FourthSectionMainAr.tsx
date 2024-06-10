import Link from 'next/link';
import React from 'react';

interface Service {
  href: string;
  title: string;
}

const services: Service[] = [
  { href: '/services/sustainability/', title: 'الاستدامة' },
  { href: '/services/operational-performance/', title: 'الاداء العملي' },
  { href: '/services/new-products/', title: 'المنتجات الجديدة' },
  { href: '/services/procurement/', title: 'التحصيل' },
  { href: '/services/supply-chain-planning/', title: 'تخطيط سلسلة الإمداد' },
  { href: '/services/manufacturing/', title: 'التصنيع' },
  { href: '/services/logistics/', title: 'الخدمات اللوجستية' },
  { href: '/services/channels-to-market/', title: 'قنوات التسويق' },
  { href: '/services/maintenance-and-after-sales/', title: 'صيانة و بعد البيع' },
  { href: '/services/transformation-management/', title: 'إدارة التحول' },
  { href: '/services/digital-and-it/', title: 'تكنولوجيا المعلومات' },
  { href: '/services/finance/', title: 'الموارد المالية' },
  { href: '/services/sga/', title: 'SG&A' },
  { href: '/services/hr/', title: 'الموارد البشرية' },
];

const FourthSectionMainAr: React.FC = () => {
  return (
    <section
      dir="rtl"
      className="strip-padding-lg white-color banner--full-overlay banner red-1-background"
      style={{
        backgroundImage:
          'url(https://www.argonandco.com/wp-content/uploads/2019/10/Compass-edited-e1570192043957.jpg)',
      }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-12 off-screen off-screen--hide off-screen--rotate-up">
            <h2 className="title title--lg">المساعدة في التحديات التشغيلية</h2>
          </div>
          <div className="col-lg-7 col-md-9 off-screen off-screen--hide off-screen--rotate-up">
            <p className="intro">
              نحن نحفر بعمق لتحديد جذور المشاكل المعقدة والتركيز عليها على تحقيق نتائج ملموسة للعملاء، وهذه هي اختيار
              تحديات العمليات التي نعمل عليها بانتظام.
            </p>
          </div>
        </div>
        <div className="row link-list off-screen off-screen--hide off-screen--link-list">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <Link href={service.href} className="d-flex align-items-center white-color">
                <div className="title title--md title--medium-weight">{service.title}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourthSectionMainAr;
